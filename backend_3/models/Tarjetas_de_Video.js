//requerimiento de 2 funciones especificas de mongoose
const { Schema, model } = require('mongoose');

//objeto a guardar, modelo
const videocard = new Schema({
	Marca: String,
	Frecuencia_de_Nucleo: String,
	Stream_procesor: String,
	Freq_de_Memoria: String,
	Rendimiento: String,
});

//exportacion de objeto clase
module.exports = model('Tarjeta_De_Video', videocard);
