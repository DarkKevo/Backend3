//requerimiento de 2 funciones especificas de mongoose
const { Schema, model } = require('mongoose');

//objeto a guardar, modelo
const procesadores = new Schema({
	Marca: String,
	Modelo: String,
	Nucleos: String,
	Frecuecia_Base: String,
	Cache: String,
});

//exportacion de objeto clase
module.exports = model('Procesadores', procesadores);
