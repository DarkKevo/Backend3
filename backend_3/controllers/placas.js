const objeto_class = require('../models/placas_madre');
class placa {
	constructor(req, res) {
		this.Marca = req.body.marca;
		this.Modelo = req.body.modelo;
		this.Cpu = req.body.cpu;
		this.Chipset = req.body.chipset;
		this.Memoria = req.body.memoria;
        this.Almacenamiento = req.body.almacenamiento
	}
	async save_object(req, res) {
		if (
			typeof this.Marca != 'undefined' &&
			typeof this.Modelo != 'undefined' &&
			typeof this.Cpu != 'undefined' &&
			typeof this.Chipset != 'undefined' &&
			typeof this.Memoria != 'undefined' &&
            typeof this.Almacenamiento != 'undefined'
		) {
			const objeto_procesador = new objeto_class({
				Marca: this.Marca,
				Modelo: this.Modelo,
				Cpu: this.Cpu,
				Chipset: this.Chipset,
				Memoria: this.Memoria,
                Almacenamiento: this.Almacenamiento
			});
			let objeto_save = await objeto_procesador.save();
			console.log(objeto_save);
			res.send('Dato Guardado en Placas');
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
				Cpu: req.body.cpu,
				Chipset: req.body.chipset,
				Memoria: req.body.memoria,
                Almacenamiento: req.body.almacenamiento
			}
		);
		res.send('Data Actualizada');
	}
	async eliminar(req, res) {
		let productos = await objeto_class.findByIdAndDelete(req.params.id);
		res.send('Dato eliminado');
	}
}

module.exports = placa;
