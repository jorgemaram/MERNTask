const User = require('../models/User.model');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.authenticateUser = async (req, res) => {
    //revisar si hay errores
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errores: errors.array() })
    }

    //extraer email y password
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({msg: 'El usuario no existe'})
        }
        //Revisar el password
        const rightPassword = await bcryptjs.compare(password, user.password);
        if (!rightPassword) {
            return res.status(400).json({msg: 'Password Incorrecto'})
        }

        //Si todo es correcto
        //Crear JWT
        const payload = {
            user: {
                id: user.id
            }
        };
        //Firmar JWT
        jwt.sign(payload, process.env.SECRET, {
            expiresIn: 3600 //1 hora
        }, (error, token) => {
            if (error) throw error;
            //Mensaje de confrimación
            res.json({ token });
        })


    } catch (error) {
        console.log(error)
    }
}

//Obtiene que usuario está autenticado
exports.authUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')   
        res.json({user})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Hubo un error'})
    }
}

