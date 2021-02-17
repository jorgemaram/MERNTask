//Rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { check } = require('express-validator')

//Valida un usuario
//api/auth
router.post('/',
    [
        check('email', 'Añade un email válido').isEmail(),
        check('password', 'El password debe ser mínimo de 6 caracteres').isLength({ min: 6 })
    ],
    );

module.exports = router;