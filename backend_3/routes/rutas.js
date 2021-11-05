//requerimiento de express
const express = require('express');

//requerimiento de modelo de Procesador y objeto
let procesador = require('../controllers/procesador_manage');
let placa = require('../controllers/placas');
let ram = require('../controllers/ram');
let disco = require('../controllers/disco');
let video = require('../controllers/video');
let usuario = require('../controllers/user');

//variables que trabajan con clases
let objeto_procesador;
let objeto_placa;
let objeto_ram;
let objeto_disco;
let objeto_video;
let objeto_usuario;

//express router
let rutas = express.Router();

//APARTADO CORRESPONDIENTE A RUTAS QUE INTERATUAN CON LOS CONTROLADORES DE LA COLECCION DE PROCESADORES

//ruta de agregar procesador
rutas.post('/add/:user/:password/procesador', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			objeto_procesador = new procesador(req, res);
			objeto_procesador.save_object(req, res);
		} else {
			res.send('No Tienes acceso');
		}
	});
});

//ruta de listar procesadores
rutas.get('/view/:user/:password/procesador', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			//validacion por si la DB esta vacia o la clase no se ha creado
			if (typeof objeto_procesador == 'undefined') {
				res.send('Aun no has creado datos, por ello no puedes listarlos');
			} else {
				objeto_procesador.listar_objetos(req, res);
			}
		} else {
			res.send('No Tienes Acceso');
		}
	});
});

//ruta de listar procesadores por marca
rutas.get('/view/:user/:password/procesador/marca/:marca', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			//validacion por si la DB esta vacia o la clase no se ha creado
			if (typeof objeto_procesador == 'undefined') {
				res.send('Aun no has creado datos, por ello no puedes listarlos');
			} else {
				objeto_procesador.listar_objetos_por_marca(req, res);
			}
		} else {
			res.send('No Tienes Acceso');
		}
	});
});

//ruta de listar procesadores por modelo
rutas.get('/view/:user/:password/procesador/modelo/:modelo', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			//validacion por si la DB esta vacia o la clase no se ha creado
			if (typeof objeto_procesador == 'undefined') {
				res.send('Aun no has creado datos, por ello no puedes listarlos');
			} else {
				objeto_procesador.listar_por_modelo(req, res);
			}
		} else {
			res.send('No Tienes Acceso');
		}
	});
});

//ruta de edicion de procesadores por id de mongo
rutas.put('/edit/:user/:password/procesador/id/:id', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			//validacion por si la DB esta vacia o la clase no se ha creado
			if (typeof objeto_procesador == 'undefined') {
				res.send('Aun no has creado datos, por ello no puedes editarlos');
			} else {
				objeto_procesador.actualizar_dato(req, res);
			}
		} else {
			res.send('No Tienes Acceso');
		}
	});
});

//ruta de eliminacion de procesadores por id de mongo
rutas.delete('/delete/:user/:password/procesador/id/:id', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			//validacion por si la DB esta vacia o la clase no se ha creado
			if (typeof objeto_procesador == 'undefined') {
				res.send('Aun no has creado datos, por ello no puedes eliminarlos');
			} else {
				objeto_procesador.eliminar(req, res);
			}
		} else {
			res.send('No Tienes Acceso');
		}
	});
});

//APARTADO CORRESPONDIENTE A RUTAS QUE INTERATUAN CON LOS CONTROLADORES DE LA COLECCION DE PLACAS MADRE

//ruta de agregar placa
rutas.post('/add/:user/:password/placa', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			objeto_placa = new placa(req, res);
			objeto_placa.save_object(req, res);
		} else {
			res.send('No Tienes Acceso');
		}
	});
});

//ruta de listar placas
rutas.get('/view/:user/:password/placa', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			//validacion por si la DB esta vacia o la clase no se ha creado
			if (typeof objeto_placa == 'undefined') {
				res.send('Aun no has creado datos, por ello no puedes listarlos');
			} else {
				objeto_placa.listar_objetos(req, res);
			}
		} else {
			res.send('No Tienes Acceso');
		}
	});
});

//ruta de listar Placas por marca
rutas.get('/view/:user/:password/placa/marca/:marca', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			//validacion por si la DB esta vacia o la clase no se ha creado
			if (typeof objeto_placa == 'undefined') {
				res.send('Aun no has creado datos, por ello no puedes listarlos');
			} else {
				objeto_placa.listar_objetos_por_marca(req, res);
			}
		} else {
			res.send('No Tienes Acceso');
		}
	});
});

//ruta de listar placas por modelo
rutas.get('/view/:user/:password/placa/modelo/:modelo', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			//validacion por si la DB esta vacia o la clase no se ha creado
			if (typeof objeto_placa == 'undefined') {
				res.send('Aun no has creado datos, por ello no puedes listarlos');
			} else {
				objeto_placa.listar_por_modelo(req, res);
			}
		} else {
			res.send('No Tienes Acceso');
		}
	});
});

//ruta de edicion de placas por id de mongo
rutas.put('/edit/:user/:password/placa/id/:id', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			//validacion por si la DB esta vacia o la clase no se ha creado
			if (typeof objeto_placa == 'undefined') {
				res.send('Aun no has creado datos, por ello no puedes editarlos');
			} else {
				objeto_placa.actualizar_dato(req, res);
			}
		} else {
			res.send('No Tienes Acceso');
		}
	});
});

//ruta de eliminacion de placas por id de mongo
rutas.delete('/delete/:user/:password/placa/id/:id', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			//validacion por si la DB esta vacia o la clase no se ha creado
			if (typeof objeto_placa == 'undefined') {
				res.send('Aun no has creado datos, por ello no puedes eliminarlos');
			} else {
				objeto_placa.eliminar(req, res);
			}
		} else {
			res.send('No Tienes Acceso');
		}
	});
});

//APARTADO CORRESPONDIENTE A RUTAS QUE INTERATUAN CON LOS CONTROLADORES DE LA COLECCION DE RAM

//ruta de agregar placa
rutas.post('/add/:user/:password/ram', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			objeto_ram = new ram(req, res);
			objeto_ram.save_object(req, res);
		} else {
			res.send('No Tienes acceso');
		}
	});
});

//ruta de listar placas
rutas.get('/view/:user/:password/ram', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			//validacion por si la DB esta vacia o la clase no se ha creado
			if (typeof objeto_ram == 'undefined') {
				res.send('Aun no has creado datos, por ello no puedes listarlos');
			} else {
				objeto_ram.listar_objetos(req, res);
			}
		} else {
			res.send('No Tienes acceso');
		}
	});
});

//ruta de listar Placas por marca
rutas.get('/view/:user/:password/ram/marca/:marca', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			//validacion por si la DB esta vacia o la clase no se ha creado
			if (typeof objeto_ram == 'undefined') {
				res.send('Aun no has creado datos, por ello no puedes listarlos');
			} else {
				objeto_ram.listar_objetos_por_marca(req, res);
			}
		} else {
			res.send('No Tienes acceso');
		}
	});
});

//ruta de listar placas por modelo
rutas.get('/view/:user/:password/ram/tecnologia/:tecnologia', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			//validacion por si la DB esta vacia o la clase no se ha creado
			if (typeof objeto_ram == 'undefined') {
				res.send('Aun no has creado datos, por ello no puedes listarlos');
			} else {
				objeto_ram.listar_por_tecnologia(req, res);
			}
		} else {
			res.send('No Tienes acceso');
		}
	});
});

//ruta de edicion de ram por id de mongo
rutas.put('/edit/:user/:password/ram/id/:id', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			//validacion por si la DB esta vacia o la clase no se ha creado
			if (typeof objeto_ram == 'undefined') {
				res.send('Aun no has creado datos, por ello no puedes editarlos');
			} else {
				objeto_ram.actualizar_dato(req, res);
			}
		} else {
			res.send('No Tienes acceso');
		}
	});
});

//ruta de eliminacion de placas por id de mongo
rutas.delete('/delete/:user/:password/ram/id/:id', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			//validacion por si la DB esta vacia o la clase no se ha creado
			if (typeof objeto_ram == 'undefined') {
				res.send('Aun no has creado datos, por ello no puedes eliminarlos');
			} else {
				objeto_ram.eliminar(req, res);
			}
		} else {
			res.send('No Tienes acceso');
		}
	});
});

//APARTADO CORRESPONDIENTE A RUTAS QUE INTERATUAN CON LOS CONTROLADORES DE LA COLECCION DE DISCOS

//ruta de agregar disco
rutas.post('/add/:user/:password/disco', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			objeto_disco = new disco(req, res);
			objeto_disco.save_object(req, res);
		} else {
			res.send('No Tienes acceso');
		}
	});
});

//ruta de listar disco
rutas.get('/view/:user/:password/disco', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			//validacion por si la DB esta vacia o la clase no se ha creado
			if (typeof objeto_disco == 'undefined') {
				res.send('Aun no has creado datos, por ello no puedes listarlos');
			} else {
				objeto_disco.listar_objetos(req, res);
			}
		} else {
			res.send('No Tienes acceso');
		}
	});
});

//ruta de listar disco por marca
rutas.get('/view/:user/:password/disco/marca/:marca', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			//validacion por si la DB esta vacia o la clase no se ha creado
			if (typeof objeto_disco == 'undefined') {
				res.send('Aun no has creado datos, por ello no puedes listarlos');
			} else {
				objeto_disco.listar_objetos_por_marca(req, res);
			}
		} else {
			res.send('No Tienes acceso');
		}
	});
});

//ruta de listar disco por tipo
rutas.get('/view/:user/:password/disco/tipo/:tipo', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			//validacion por si la DB esta vacia o la clase no se ha creado
			if (typeof objeto_disco == 'undefined') {
				res.send('Aun no has creado datos, por ello no puedes listarlos');
			} else {
				objeto_disco.listar_por_tipo(req, res);
			}
		} else {
			res.send('No Tienes acceso');
		}
	});
});

//ruta de edicion de disco por id de mongo
rutas.put('/edit/:user/:password/disco/id/:id', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			//validacion por si la DB esta vacia o la clase no se ha creado
			if (typeof objeto_disco == 'undefined') {
				res.send('Aun no has creado datos, por ello no puedes editarlos');
			} else {
				objeto_disco.actualizar_dato(req, res);
			}
		} else {
			res.send('No Tienes acceso');
		}
	});
});

//ruta de eliminacion de placas por id de mongo
rutas.delete('/delete/:user/:password/disco/id/:id', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			//validacion por si la DB esta vacia o la clase no se ha creado
			if (typeof objeto_disco == 'undefined') {
				res.send('Aun no has creado datos, por ello no puedes eliminarlos');
			} else {
				objeto_disco.eliminar(req, res);
			}
		} else {
			res.send('No Tienes acceso');
		}
	});
});

//APARTADO CORRESPONDIENTE A RUTAS QUE INTERATUAN CON LOS CONTROLADORES DE LA COLECCION DE TARJETAS DE VIDEO

//ruta de agregar video
rutas.post('/add/:user/:password/video', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			objeto_video = new video(req, res);
			objeto_video.save_object(req, res);
		} else {
			res.send('No Tienes acceso');
		}
	});
});

//ruta de listar video
rutas.get('/view/:user/:password/video', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			//validacion por si la DB esta vacia o la clase no se ha creado
			if (typeof objeto_video == 'undefined') {
				res.send('Aun no has creado datos, por ello no puedes listarlos');
			} else {
				objeto_video.listar_objetos(req, res);
			}
		} else {
			res.send('No Tienes acceso');
		}
	});
});

//ruta de listar video por marca
rutas.get('/view/:user/:password/video/marca/:marca', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			//validacion por si la DB esta vacia o la clase no se ha creado
			if (typeof objeto_video == 'undefined') {
				res.send('Aun no has creado datos, por ello no puedes listarlos');
			} else {
				objeto_video.listar_objetos_por_marca(req, res);
			}
		} else {
			res.send('No Tienes acceso');
		}
	});
});

//ruta de listar video por rendimiento
rutas.get('/view/:user/:password/video/rendimiento/:rendimiento', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			//validacion por si la DB esta vacia o la clase no se ha creado
			if (typeof objeto_video == 'undefined') {
				res.send('Aun no has creado datos, por ello no puedes listarlos');
			} else {
				objeto_video.listar_por_rendimiento(req, res);
			}
		} else {
			res.send('No Tienes acceso');
		}
	});
});

//ruta de edicion de video por id de mongo
rutas.put('/edit/:user/:password/video/id/:id', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			//validacion por si la DB esta vacia o la clase no se ha creado
			if (typeof objeto_video == 'undefined') {
				res.send('Aun no has creado datos, por ello no puedes editarlos');
			} else {
				objeto_video.actualizar_dato(req, res);
			}
		} else {
			res.send('No Tienes acceso');
		}
	});
});

//ruta de eliminacion de video por id de mongo
rutas.delete('/delete/:user/:password/video/id/:id', (req, res) => {
	objeto_usuario.verify(req, res).then((resp) => {
		if (resp == true) {
			//validacion por si la DB esta vacia o la clase no se ha creado
			if (typeof objeto_video == 'undefined') {
				res.send('Aun no has creado datos, por ello no puedes eliminarlos');
			} else {
				objeto_video.eliminar(req, res);
			}
		} else {
			res.send('No Tienes acceso');
		}
	});
});

//RUTAS DE CREACION Y ELIMINACION DE USUARIOS

//ruta de agregar user
rutas.post('/add/user', (req, res) => {
	objeto_usuario = new usuario(req, res);
	objeto_usuario.save_object(req, res);
});

//ruta de eliminacion de usuario
rutas.delete('/delete/user/id/:id', (req, res) => {
	//validacion por si la DB esta vacia o la clase no se ha creado
	if (typeof objeto_usuario == 'undefined') {
		res.send('Aun no has creado datos, por ello no puedes eliminarlos');
	} else {
		objeto_usuario.eliminar(req, res);
	}
});

module.exports = rutas;
