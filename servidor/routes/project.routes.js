const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller')

//Crea un proyecto
//api/proyectos
router.post('/', projectController.createProject)

module.exports = router;