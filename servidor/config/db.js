const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('DB conectada');
    } catch (error) {
        console.log(error);
        proccess.exit(1); //Detener la app
    }

}

module.exports = connectDB