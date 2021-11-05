const objeto_class = require('../models/procesadores');
class Processor {
	constructor(req, res) {
		this.Marca = req.body.marca;
		this.Modelo = req.body.modelo;
		this.Nucleos = req.body.nucleos;
		this.Frecuencia_Base = req.body.frecuencia_base;
		this.Cache = req.body.cache;
	}
	async save_object(req, res) {
		if (
			typeof this.Marca != 'undefined' &&
			typeof this.Modelo != 'undefined' &&
			typeof this.Nucleos != 'undefined' &&
			typeof this.Frecuencia_Base != 'undefined' &&
			typeof this.Cache != 'undefined'
		) {
			const objeto_procesador = new objeto_class({
				Marca: this.Marca,
				Modelo: this.Modelo,
				Nucleos: this.Nucleos,
				Frecuecia_Base: this.Frecuencia_Base,
				Cache: this.Cache,
			});
			let objeto_save = await objeto_procesador.save();
			console.log(objeto_save);
			res.send('Dato Guardado en Procesadores');
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
	async listar_por_modelo(req, res) {
		let productos = await objeto_class.find({ Modelo: req.params.modelo });
		res.json(productos);
	}
	async actualizar_dato(req, res) {
		let productos = await objeto_class.update(
			{ _id: req.params.id },
			{
				Marca: req.body.marca,
				Modelo: req.body.modelo,
				Nucleos: req.body.nucleos,
				Frecuecia_Base: req.body.frecuencia_base,
				Cache: req.body.cache,
			}
		);
		res.send('Data Actualizada');
	}
	async eliminar(req, res) {
		let productos = await objeto_class.findByIdAndDelete(req.params.id);
		res.send('Dato eliminado');
	}
}

module.exports = Processor;
