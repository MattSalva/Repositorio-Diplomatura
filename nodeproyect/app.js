var express = require('express');
var app = express();

var contactoRouter = require('./routes/contacto')
var indexRouter = require('./routes/index')
var usuarioRouter = require('./routes/usuario')

app.use('/', indexRouter)
app.use('/contacto', contactoRouter)
app.use('/usuario', usuarioRouter)

module.exports = app;