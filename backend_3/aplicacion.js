//Requerimientos con Express y mongoose

const mongoose = require('mongoose')
const db = mongoose.connection
const express = require('express');
const servidor = express();

//url de conexion

let url = 'mongodb://127.0.0.1:27017/Backend2'

//conexion de mongoose
mongoose.connect(url)
    //promesa catch para captar errores
    .catch(err => console.log(err))

//mensaje de conexion exitosa
db.on('open', _ => {
    console.log(`Database connected url: ${url}`)
})

//errores
db.on('error', err => {
    console.log(err)
})

//Configuraciones de Express

servidor.set('port', 3000);

//Middlewares

servidor.use(express.json());

//Routes

let routes = require('./routes/rutas')
servidor.use('/server', routes)

//Listen

servidor.listen(servidor.get('port'), () => {
	console.log(`Server Started on port ${servidor.get('port')} (EXPRESS)`);
});
