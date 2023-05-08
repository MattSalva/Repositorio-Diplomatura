var express = require('express');
var router = express.Router();
var experienceModel = require('./../models/experienceModel');


router.get('/', async function (req, res, next) {
    var experience = await experienceModel.getExperience();
    res.render('experience/experience', {
        layout: 'layout',
        usuario: req.session.nombre,
        experience
    });
});

router.get('/add', (req, res, next) => {
    res.render('experience/add', {
        layout: 'layout'
    })
})

router.post('/add', async (req, res, next) => {
    try {
        if (req.body.title != "" && req.body.description != "" && req.body.start_date != "" && req.body.end_date != ""){
            await experienceModel.insertExperience(req.body);
            res.redirect('/experience')
        } else {
            res.render('experience/experience', {
                layout: 'layout',
                error: true, message: 'Todos los campos son requeridos'
            });
        }
    } catch (error) {
        console.log(error);
        res.render('experience/experience', {
            layout: 'layout',
            error: true, message: 'No se cargo la experiencia'
        });
    }
});

router.get('/delete/:id', async (req, res, next) => {
    var id = req.params.id;
    await experienceModel.deleteExperienceById(id);
    res.redirect('/experience')
})

router.get('/edit/:id', async (req, res, next) => {
    let id = req.params.id;
    let experience = await experienceModel.getExperienceById(id);
    res.render('experience/edit', {
        layout:'layout',
        experience
    })
})

router.post('/edit', async (req, res, next) => {
    try {
        let obj = {
            title: req.body.title,
            description: req.body.description,
            start_date: req.body.start_date,
            end_date: req.body.end_date
        }

        await experienceModel.editExperienceById(obj, req.body.id);
        res.redirect('/experience');
    }
    catch (error) {
        console.log(error);
        res.render('experience/edit', {
            layout: 'layout',
            error: true, message: 'No se modifico la experiencia'
        })
    }
})

module.exports = router;