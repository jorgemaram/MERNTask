const Task = require('../models/Task.model')
const Project = require('../models/Project.model')
const { validationResult } = require('express-validator')


//Crear una nueva tarea
exports.createTask = async (req, res) => {
    //revisar si hay errores
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }


    try {
        //Extraer el proyecto y comprobar si existe
        const { project } = req.body
        const isProject = await Project.findById(project)
        if (!isProject) {
            return res.status(404).json({ msg: 'Proyecto no encontrado' })
        }
        //Revisar si el proyecto actual pertenece al usuario autenticado
        if (isProject.owner.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'No autorizado' })
        }
        //Creamos la tarea
        const task = new Task(req.body);
        await task.save();
        res.json({ task });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }

}

//Obtiene las tareas por proyecto
exports.getTasks = async (req, res) => {
    try {
        //Extraer el proyecto y comprobar si existe
        const { project } = req.body
        const isProject = await Project.findById(project)
        if (!isProject) {
            return res.status(404).json({ msg: 'Proyecto no encontrado' })
        }
        //Revisar si el proyecto actual pertenece al usuario autenticado
        if (isProject.owner.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'No autorizado' })
        }
        //Obtener las tareas por proyecto
        const tasks = await Task.find({ project });
        res.json(tasks);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

//Actualizar tarea
exports.updateTask = async (req, res) => {
    try {
        //Extraer el proyecto y comprobar si existe
        const { project, name, state } = req.body

        //Si la tarea existe o no
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ msg: 'No existe la tarea' })
        }

        //Extraer proyecto
        const isProject = await Project.findById(project)

        //Revisar si el proyecto actual pertenece al usuario autenticado
        if (isProject.owner.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'No autorizado' })
        }

        //Crear objeto con la nueva información
        const newTask = {};
        if (name) newTask.name = name;
        if (state) newTask.state = state;

        //Guardar la tarea
        task = await Task.findOneAndUpdate({ _id: req.params.id }, newTask, { new: true })

        res.json({ task })

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}


//Eliminar tarea
exports.deleteTask = async (req, res) => {
    try {
        //Extraer el proyecto y comprobar si existe
        const { project } = req.body

        //Si la tarea existe o no
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ msg: 'No existe la tarea' })
        }

        //Extraer proyecto
        const isProject = await Project.findById(project)

        //Revisar si el proyecto actual pertenece al usuario autenticado
        if (isProject.owner.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'No autorizado' })
        }
        // Eliminar tarea
        await Task.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Tarea eliminada' })

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}