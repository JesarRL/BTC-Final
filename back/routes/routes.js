const express = require('express'); //llamamos a Express
const router = express.Router(); //definimos una instancia de express

const usuarioController = require('../controllers/usuario.controller')

router.post('/crear-usuario', usuarioController.crearUsuario)
router.get('/buscar-usuario', usuarioController.consultarUsuario)
router.put('/actualizar-usuario/:id', usuarioController.actualizarUsuario)

module.exports = router