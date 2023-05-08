var express = require('express');
var router = express.Router();
var educationModel = require('./../models/educationModel');


router.get('/', async function (req, res, next) {
    var education = await educationModel.getEducation();
    res.render('education/education', {
        layout: 'layout',
        usuario: req.session.nombre,
        education
    });
});

router.get('/add', (req, res, next) => {
    res.render('education/add', {
        layout: 'layout'
    })
})

router.post('/add', async (req, res, next) => {
    try {
        if (req.body.title != "" && req.body.description != "" && req.body.type != "" && req.body.start_date != "" && req.body.end_date != ""){
            await educationModel.insertEducation(req.body);
            res.redirect('/education')
        } else {
            res.render('education/education', {
                layout: 'layout',
                error: true, message: 'Todos los campos son requeridos'
            });
        }
    } catch (error) {
        console.log(error);
        res.render('education/education', {
            layout: 'layout',
            error: true, message: 'No se cargo la educación'
        });
    }
});

router.get('/delete/:id', async (req, res, next) => {
    var id = req.params.id;
    await educationModel.deleteEducationById(id);
    res.redirect('/education')
})

router.get('/edit/:id', async (req, res, next) => {
    let id = req.params.id;
    let education = await educationModel.getEducationById(id);
    res.render('education/edit', {
        layout:'layout',
        education
    })
})

router.post('/edit', async (req, res, next) => {
    try {
        let obj = {
            title: req.body.title,
            description: req.body.description,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            type: req.body.type
        }

        await educationModel.editEducationById(obj, req.body.id);
        res.redirect('/education');
    }
    catch (error) {
        console.log(error);
        res.render('education/edit', {
            layout: 'layout',
            error: true, message: 'No se modifico la educación'
        })
    }
})

module.exports = router;