const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

//crear el servidor
const app = express();

//Conectar a la DB
connectDB();

//habilitar CORS
app.use(cors())

//Habilitar express.json
app.use(express.json({ extended: true }));

//puerto de la app
const port = process.env.PORT || 5000;

// Importar rutas 
app.use('/api/usuarios', require('./routes/user.routes'))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/proyectos', require('./routes/project.routes'))
app.use('/api/tareas', require('./routes/tasks.routes'))

//arranque de la app
app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`)
});