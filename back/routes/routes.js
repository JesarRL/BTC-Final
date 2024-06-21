const express = require("express");
const router = express.Router();
const inventarioController = require("../controllers/inventario.controller")


// listar vehiculos


router.post("/vehiculos/crear-ingreso", inventarioController.crearIngresos)
router.post("/vehiculo/crear-ingreso", inventarioController.crearIngreso)
router.get("/vehiculos/listar-inventario", inventarioController.listarInventario)
router.get("/vehiculos/buscar_vehiculo/:busqueda", inventarioController.buscarInventario)
// router.delete("/vehiculos/borrar-ingreso/:id", inventarioController.borrarIngreso)
router.put("/vehiculos/actualizar-ingreso/:id", inventarioController.actualizarInventario)

module.exports = router;