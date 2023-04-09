var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var pool = require('./bd');
var hbs = require('hbs');

hbs.registerHelper('dateFormat', require('handlebars-dateformat'));


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// session manager
app.use(session({
  secret: 'asdsad',
  resave: false,
  saveUninitialized: true
}));

async function traerData(){
  try{
    const res = pool.query("SELECT CONCAT(nombre, ' ',apellido) AS nombre_y_apellido, edad FROM datos_personales WHERE id = 1").then((result) => {return result});
    return await res;
  }
  catch(error){
    console.log(error)
  }
}

secured = async(req, res, next) => {
  try {
    console.log(req.session.id_usuario);
    if(req.session.id_usuario){
      next();
    } else{
      res.redirect('/admin/login')
    }
  } catch (error){
    console.log(error)
  }

}


async function main(){
  //const nombre_completo = await traerData();
  const nombre_completo = await pool.query("SELECT CONCAT(nombre, ' ',apellido) AS nombre_y_apellido, edad FROM datos_personales WHERE id = 1").then((result) => {return result});
  const edu = await pool.query("SELECT * FROM educacion").then((result) => {return result})
  const exp = await pool.query("SELECT * FROM experiencia").then((result) => {return result})
  const projects = await pool.query("SELECT * FROM proyectos").then((result) => {return result})
  console.log(edu[0])
  console.log(nombre_completo)



  app.get('/', secured,function(req, res){
    var conocido = Boolean(req.session.nombre);
    if (conocido){
      res.render('index', {
        title: 'Portfolio',
        conocido: conocido,
        nombre: req.session.nombre,
        n: nombre_completo[0].nombre_y_apellido,
        edad: nombre_completo[0].edad
      })
    }
    else{
      res.render('admin/login', {
        title: 'Portfolio - Login',
        conocido: conocido,
        nombre: req.session.nombre,
        layout: 'admin/layout'

      })
    }
  });

  // app.post('/ingresar', function (req, res){
  //   req.session.nombre = req.body.nombre
  //   res.redirect('/')
  // })



// app.use('/', indexRouter);
// app.use('/users', usersRouter);
  app.use('/admin/login', loginRouter);

  app.get('/education', secured ,function (req,res){
    res.render('education/education', {
      edu_uni: edu[0],
      edu_terciaria: edu[1],
      edu_secundaria: edu[2]
    })
  });

  app.get('/experience', secured,function (req,res){
    res.render('experience/experience', {
      exp_inv: exp[0],
      exp_ava: exp[1],
      exp_ate: exp[2]
    })
  })

  app.get('/projects', secured,function (req,res){
    res.render('projects/projects', {
      tic_tac: projects[0],
      portfolio: projects[1],
      hangman: projects[2],
      memory: projects[3],
      banking: projects[4],
      browser: projects[5]
    })
  })


// catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404));
  });

// error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });






}

main()

module.exports = app;
