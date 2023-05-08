var express = require('express');
var router = express.Router();
var projectsModel = require('./../models/projectsModel');


router.get('/', async function (req, res, next) {
    var projects = await projectsModel.getProjects();
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
        if (req.body.title != "" && req.body.description != "" && req.body.site != "" && req.body.repository != ""){
            await projectsModel.insertProjects(req.body);
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
    await projectsModel.deleteProjectsById(id);
    res.redirect('/projects')
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
        let obj = {
            title: req.body.title,
            description: req.body.description,
            repository: req.body.repository,
            site: req.body.site
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