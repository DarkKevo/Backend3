//requerimiento de 2 funciones especificas de mongoose
const { Schema, model } = require('mongoose');

//objeto a guardar, modelo
const memorias_ram = new Schema({
	Marca: String,
	Tecnologia: String,
    Tamaño: String
});

//exportacion de objeto clase
module.exports = model('Memorias_ram', memorias_ram);
