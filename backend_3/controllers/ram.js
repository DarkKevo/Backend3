const objeto_class = require('../models/memorias_ram');
class ram {
	constructor(req, res) {
		this.Marca = req.body.marca;
		this.Tecnologia = req.body.tecnologia;
		this.Tamaño = req.body.tamaño;
	}
	async save_object(req, res) {
		if (
			typeof this.Marca != 'undefined' &&
			typeof this.Tecnologia != 'undefined' &&
			typeof this.Tamaño != 'undefined'
		) {
			const objeto_procesador = new objeto_class({
				Marca: this.Marca,
				Tecnologia: this.Tecnologia,
				Tamaño: this.Tamaño,
			});
			let objeto_save = await objeto_procesador.save();
			console.log(objeto_save);
			res.send('Dato Guardado en Ram');
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
	async listar_por_tecnologia(req, res) {
		let productos = await objeto_class.find({ Tecnologia: req.params.tecnologia });
		res.json(productos);
	}
	async actualizar_dato(req, res) {
		let productos = await objeto_class.update(
			{ _id: req.params.id },
			{
				Marca: req.body.marca,
				Tecnologia: req.body.tecnologia,
				Tamaño: req.body.tamaño,
			}
		);
		res.send('Data Actualizada');
	}
	async eliminar(req, res) {
		let productos = await objeto_class.findByIdAndDelete(req.params.id);
		res.send('Dato eliminado');
	}
}

module.exports = ram;
