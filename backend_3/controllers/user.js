const usuarios = require('../models/user');

class users {
	constructor(req, res) {
		this.Usuario = req.body.usuario;
		this.Password = req.body.contraseña;
	}
	async save_object(req, res) {
		const objeto_procesador = new usuarios({
			usuario: this.Usuario,
			clave: this.Password,
		});
		let objeto_save = await objeto_procesador.save();
		res.send('Objeto Guardado');
	}
	async eliminar(req, res) {
		let productos = await usuarios.findByIdAndDelete(req.params.id);
		res.send('Dato eliminado');
	}
	verify(req, res) {
        const promise = new Promise(async (resolve, reject) => {
            let busqueda = await usuarios.find({usuario: req.params.user, clave: req.params.password})
            if (!busqueda.length){
                resolve(false)
            } else {
                resolve(true)
            }
        })
        return promise
	}
}

module.exports = users;
