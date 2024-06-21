const usuarioModel = require("../models/usuario.model")

exports.crearUsuario = async(req, res) => {
    try{
        let usuario = new usuarioModel(req.body);
        await usuario.save();
        res.status(200).send({ mensaje: "Usuario creado correctamente", usuario});
    }
    catch{error}
}

exports.consultarUsuarios = async(req, res) => {
    try {
        const dataUsuario = await usuarioModel.find()
        res.status(200).send(dataUsuario)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un problema al consultar los usuarios");
    }
}

exports.actualizarUsuario = async(req, res) => {
    try {
        const { nombre, apellido, estado, email, fecha_nacimiento, password } = req.body;
        let dataUsuario = await usuarioModel.findById(req.params.id)

        if(!dataUsuario){
			return res.status(404).send({msg: "usuario no encontrado"})
        }
        else{
			dataUsuario.nombre = nombre,
            dataUsuario.apellido = apellido,
            dataUsuario.estado = estado
            dataUsuario.email = email,
            dataUsuario.fecha_nacimiento = fecha_nacimiento,
            dataUsuario.password = password
            
			await generoModel.findByIdAndUpdate(req.params.id, dataGenero)
			return res.status(200).send({ mensaje: "Usuario actualizado", dataGenero })
		}
        
    } catch (error) {
        
    }
}

