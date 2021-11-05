//requerimiento de 2 funciones especificas de mongoose
const { Schema, model } = require('mongoose');

//objeto a guardar, modelo
const placas_madre = new Schema({
	Marca: String,
    Modelo: String,
    CPU: String,
    Chipset: String,
    Memoria: String,
    Almacenamiento: String
});

//exportacion de objeto clase
module.exports = model('Placas_Madre', placas_madre);
