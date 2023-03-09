var express = require('express');
var router = express.Router();

/* GET contacto page. */
router.get('/', function (req,res,next){
    res.send('Pagina de contactos');
});

module.exports = router;