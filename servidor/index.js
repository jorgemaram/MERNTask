const express = require('express');
const connectDB = require('./config/db');

//crear el servidor
const app = express();

//Conectar a la DB
connectDB();

//puerto de la app
const PORT = process.env.PORT || 4000;

//arranque de la app
app.listen((PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`)
}))