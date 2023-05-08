var express = require('express');
var router = express.Router();
var projectsModel = require('./../models/projectsModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;

const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/', async function (req, res, next) {
    var projects = await projectsModel.getProjects();

    projects = projects.map(project => {
        if (project.img_id){
            const image = cloudinary.image(project.img_id, {
                width: 400,
                height: 400,
                class:"img-fluid rounded-start",
                crop: 'fill'
            });
            return {...project, image}
        } else {
            return {...project, image: ''}
        }
    });

    console.log(projects);

    res.render('projects/projects', {
        layout: 'layout',
        usuario: req.session.nombre,
        projects
    });
});

router.get('/add', (req, res, next) => {
    res.render('projects/add', {
        layout: 'layout'
    })
})

router.post('/add', async (req, res, next) => {
    try {
         var img_id = '';
         if (req.files && Object.keys(req.files).length > 0){
             image = req.files.image;
             img_id = (await uploader(image.tempFilePath)).public_id;
         }
        if (req.body.title != "" && req.body.description != "" && req.body.repository != ""){
            await projectsModel.insertProjects({...req.body, img_id});
            res.redirect('/projects')
        } else {
            res.render('projects/projects', {
                layout: 'layout',
                error: true, message: 'Todos los campos son requeridos'
            });
        }
    } catch (error) {
        console.log(error);
        res.render('projects/projects', {
            layout: 'layout',
            error: true, message: 'No se cargo el proyecto'
        });
    }
});

router.get('/delete/:id', async (req, res, next) => {
    var id = req.params.id;

    let project = await projectsModel.getProjectsById(id);
    if (project.img_id){
        await (destroy(project.img_id));
    }
    await projectsModel.deleteProjectsById(id);
    res.redirect('/projects');
})

router.get('/edit/:id', async (req, res, next) => {
    let id = req.params.id;
    let projects = await projectsModel.getProjectsById(id);
    res.render('projects/edit', {
        layout:'layout',
        projects
    })
})

router.post('/edit', async (req, res, next) => {
    try {
        let img_id = req.body.img_orig;
        let del_img = false;
        if (req.body.img_delete === "1"){
            img_id = null;
            del_img = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0){
                imagen = req.files.image;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
                del_img = true;
            }
        }
        if (del_img && req.body.img_orig) {
            await (destroy(req.body.img_orig));
        }
        let obj = {
            title: req.body.title,
            description: req.body.description,
            repository: req.body.repository,
            site: req.body.site,
            img_id
        }

        await projectsModel.editProjectsById(obj, req.body.id);
        res.redirect('/projects');
    }
    catch (error) {
        console.log(error);
        res.render('projects/edit', {
            layout: 'layout',
            error: true, message: 'No se modifico el proyecto'
        })
    }
})

module.exports = router;