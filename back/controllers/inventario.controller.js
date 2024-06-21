let inventarioModel = require("../models/inventario.model");

exports.crearIngresos = async (req, res) => {
    try {
        for (const camioneta of req.body.data) {
            console.log(camioneta);
            let entrada = new inventarioModel(camioneta)
            await entrada.save()
        }

        res.status(200).send({ camioneta })

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error al crear el ingreso" })
    }
}


exports.crearIngreso = async (req, res) => {
    try {
        let camioneta = new inventarioModel(req.body)
        await camioneta.save()
        res.status(200).send({ camioneta })

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error al crear el ingreso" })
    }
}

exports.listarInventario = async (req, res) => {
    try {
        let camionetaData = await inventarioModel.find()
        res.status(200).send({ camionetaData })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error al listar los vehiculos" })
    }
}

exports.buscarInventario = async (req, res) => {
    res.send("esta camioneta es");
}

exports.actualizarInventario = (req, res) => {
    res.send("estamos actualizando el vehiculo");
}

exports.eliminarIngreso = (req, res) => {
    res.send("estamos eliminando el vehiculo");
}