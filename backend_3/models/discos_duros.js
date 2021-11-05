//requerimiento de 2 funciones especificas de mongoose
const { Schema, model } = require('mongoose');

//objeto a guardar, modelo
const discos_duros = new Schema({
	Marca: String,
	Tamaño: String,
	Peso: String,
	Revoluciones: String,
	Tipo: String,
});

//exportacion de objeto clase
module.exports = model('Discos_duros', discos_duros);
