// const express = require('express'); // common js
import dotenv from 'dotenv';
import express from 'express';
import db from './config/db.js';
import router from './routes/index.js';


dotenv.config();
console.log(process.env.DB_HOST);

// Conectar la base de datos
db.authenticate()
  .then( () => console.log('Base de datos conectada') )
  .catch( error => console.log(error));

const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use( (req, res, next) => {
  // res.locals.unaVariable = 'Una nueva variable';
  // console.log('res.locals :', res.locals);
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nombresitio = "Agencia de Viajes";
  // return next();
  next();
})

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

// Definir la carpeta publica
app.use(express.static('public'));

// Agregar router
app.use('/', router); // Se agregan las diferentes rutas que vayamos definiendo

app.listen(() => {
  console.log(`El Servidor está funcionando en el puerto ${port}`);
})