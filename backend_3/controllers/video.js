const objeto_class = require('../models/Tarjetas_de_Video');
class video {
	constructor(req, res) {
		this.Marca = req.body.marca;
		this.Frecuencia_de_nucleo = req.body.frecuencia_de_nucleo;
		this.Stream_procesor = req.body.stream_procesor;
		this.Frecuencia_de_memoria = req.body.frecuencia_de_memoria;
		this.Rendimiento = req.body.rendimiento;
	}
	async save_object(req, res) {
		if (
			typeof this.Marca != 'undefined' &&
			typeof this.Frecuencia_de_nucleo != 'undefined' &&
			typeof this.Stream_procesor != 'undefined' &&
			typeof this.Frecuencia_de_memoria != 'undefined' &&
			typeof this.Rendimiento != 'undefined'
		) {
			const objeto_procesador = new objeto_class({
				Marca: this.Marca,
				Frecuencia_de_Nucleo: this.Frecuencia_de_nucleo,
				Stream_procesor: this.Stream_procesor,
				Freq_de_Memoria: this.Frecuencia_de_memoria,
				Rendimiento: this.Rendimiento,
			});
			let objeto_save = await objeto_procesador.save();
			console.log(objeto_save);
			res.send('Dato Guardado en Tarjetas de Video');
		} else {
			res.send('Datos incorrectos');
		}
	}
	async listar_objetos(req, res) {
		let productos = await objeto_class.find();
		res.json(productos);
	}
	async listar_objetos_por_marca(req, res) {
		let productos = await objeto_class.find({ Marca: req.params.marca });
		res.json(productos);
	}
	async listar_por_rendimiento(req, res) {
		let productos = await objeto_class.find({ Rendimiento: req.params.rendimiento });
		res.json(productos);
	}
	async actualizar_dato(req, res) {
		let productos = await objeto_class.update(
			{ _id: req.params.id },
			{
				Marca: req.body.marca,
				Frecuencia_de_Nucleo: req.body.frecuencia_de_nucleo,
				Stream_procesor: req.body.stream_procesor,
				Freq_de_Memoria: req.body.frecuencia_de_memoria,
				Rendimiento: req.body.rendimiento,
			}
		);
		res.send('Data Actualizada');
	}
	async eliminar(req, res) {
		let productos = await objeto_class.findByIdAndDelete(req.params.id);
		res.send('Dato eliminado');
	}
}

module.exports = video;
