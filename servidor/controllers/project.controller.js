const Project = require ('../models/Project.model')

exports.createProject = async (req, res) => {
    try {
        //Crear nuevo proyecto
        const project = new Project(req.body);
        project.save();
        res.json(project);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');

    }
}