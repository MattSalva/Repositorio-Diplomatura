var express = require('express');
var router = express.Router();
var educationModel = require('./../models/educationModel');
var experienceModel = require('./../models/experienceModel');
var projectsModel = require('./../models/projectsModel');
const nodemailer = require("nodemailer");
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

router.post('/contact', async (req, res) => {
    const mail = {
        to: 'mattsalva@outlook.com',
        subject: 'Contacto web',
        html:`${req.body.nombre} se contacto a traves de la web y quiere más información a este correo: ${req.body.email}
        <br> Además, hizo el siguiente comentario: ${req.body.mensaje} <br> Su tel es: ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail);

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
});

module.exports = router;