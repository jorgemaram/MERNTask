//Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const {check} = require('express-validator')

//Crea un usuario
//api/usuarios
router.post('/',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Añade un email válido').isEmail(),
        check('password', 'El password debe ser mínimo de 6 caracteres').isLength({min: 6})
    ],
    userController.createUser);

module.exports = router;
