const express = require('express');
const connectDB = require('./config/db');

//crear el servidor
const app = express();

//Conectar a la DB
connectDB();


//Habilitar express.json
app.use(express.json({ extended: true }));

//puerto de la app
const port = process.env.PORT || 4000;

// Importar rutas 
app.use('/api/usuarios', require('./routes/user.routes'))

//arranque de la app
app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`)
});