const User = require('../models/User.model');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {

    //revisar si hay errores
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errores: errors.array()})
    }
 
    //extraer email y password
    const {email, password} = req.body

    try {
        //revisar que el usuario sea único
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        //guardar nuevo usuario
        user = new User(req.body);

        //Hashear el password
        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash(password, salt);

        //guardar usuario
        await user.save();

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
                res.json({ token});
        })

        //Mensaje de confrimación
        res.json({ msg: 'Usuario creado correctamente' });

    }catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}