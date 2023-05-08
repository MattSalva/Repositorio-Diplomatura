var express = require('express');
var router = express.Router();
var educationModel = require('./../models/educationModel');
var experienceModel = require('./../models/experienceModel');
var projectsModel = require('./../models/projectsModel');
var cloudinary = require('cloudinary').v2;

router.get('/education', async function(req, res, next) {
    let education = await educationModel.getEducation();


    res.json(education);
})

router.get('/experience', async function(req, res, next) {
    let experience = await experienceModel.getExperience();

    res.json(experience);
})

router.get('/projects', async function(req, res, next) {
    let projects = await projectsModel.getProjects();

    projects = projects.map(projects => {
        if (projects.img_id){
            const image = cloudinary.url(projects.img_id, {
                width: 960,
                height: 800,
                crop: 'fill'
            });
            return {
                ...projects,
                image
            }
        } else {
            return {
                ...projects,
                image:''
            }
        }
    });

    res.json(projects);
})

module.exports = router;