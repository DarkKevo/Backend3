//requerimiento de 2 funciones especificas de mongoose
const { Schema, model } = require('mongoose');

//objeto a guardar, modelo
const usuarios = new Schema({
    usuario: {
        type: String,
        unique: true,
        required: true
    },
    clave: {
        type: String,
        required: true
    }
})

//exportacion de objeto clase
module.exports = model('Usuarios', usuarios);
