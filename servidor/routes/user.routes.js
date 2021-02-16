//Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

//Crea un usuario
//api/usuario
router.post('/', userController.createUser);

module.exports = router;
