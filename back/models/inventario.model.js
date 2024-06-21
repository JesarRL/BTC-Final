const mongoose = require("mongoose");

const inventarioSchema = mongoose.Schema({
    marca: {
        type: String,
        required: true
    }, modelo: {
        type: String,
        required: true,
    }, year: {
        type: Number,
        required: true,
    }, combustible: {
        type: String,
        required: true,
    }, cilindrada: {
        type: Number,
        required: true,
    }, potencia: {
        type: Number,
        required: true,
    }, torque: {
        type: Number,
        required: true,
    }, valvulas: {
        type: Number,
        required: true,
    }, consumo_promedio: {
        type: Number,
        required: true,
    }, dimensiones: {
        type: String,
        required: true,
    }, precio: {
        type: Number,
        required: true,
    }, imagen: {
        type: String,
        required: false,
    }, fecha_ingreso: {
        type: Date,
        default: Date.now,
    }, fecha_finalizacion: {
        type: Date,
        default: Date.now,
        required: false,
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("inventario", inventarioSchema)