var express = require('express');
var router = express.Router();

/*GET del indice. */
router.get('/', function (req, res, next){
    res.send('Pagina index');
});

module.exports = router;