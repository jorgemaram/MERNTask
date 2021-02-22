//Rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');
const { check } = require('express-validator')

//api/auth
//Valida un usuario
router.post('/', authController.authUser);

//Obtiene usuario autenticado
router.get('/',
    auth,
    authController.authUser
);

module.exports = router;