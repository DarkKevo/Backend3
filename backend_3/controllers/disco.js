const objeto_class = require('../models/discos_duros');
class disco {
	constructor(req, res) {
		this.Marca = req.body.marca;
		this.Tamaño = req.body.tamaño;
		this.Peso = req.body.peso;
		this.Revoluciones = req.body.revoluciones;
		this.Tipo = req.body.tipo;
	}
	async save_object(req, res) {
		if (
			typeof this.Marca != 'undefined' &&
			typeof this.Tamaño != 'undefined' &&
			typeof this.Peso != 'undefined' &&
			typeof this.Revoluciones != 'undefined' &&
			typeof this.Tipo != 'undefined'
		) {
			const objeto_procesador = new objeto_class({
				Marca: this.Marca,
				Tamaño: this.Tamaño,
				Peso: this.Peso,
				Revoluciones: this.Revoluciones,
				Tipo: this.Tipo,
			});
			let objeto_save = await objeto_procesador.save();
			console.log(objeto_save);
			res.send('Dato Guardado en Discos');
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
	async listar_por_tipo(req, res) {
		let productos = await objeto_class.find({ Tipo: req.params.tipo });
		res.json(productos);
	}
	async actualizar_dato(req, res) {
		let productos = await objeto_class.update(
			{ _id: req.params.id },
			{
				Marca: req.body.marca,
				Tamaño: req.body.tamaño,
				Peso: req.body.peso,
				Revoluciones: req.body.revoluciones,
				Tipo: req.body.tipo
			}
		);
		res.send('Data Actualizada');
	}
	async eliminar(req, res) {
		let productos = await objeto_class.findByIdAndDelete(req.params.id);
		res.send('Dato eliminado');
	}
}

module.exports = disco;
