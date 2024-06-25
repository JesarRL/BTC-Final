export class Producto {
  marca: string;
  modelo: string;
  year: number;
  combustible: number;
  cilindrada: number;
  potencia: number;
  torque: number;
  valvulas: number;
  consumo_promedio: number;
  dimensiones: string;
  precio: number;
  imagen: string;
  fecha_ingreso: number;
  fecha_finalizacion: number;

  constructor(marca: string, modelo: string, year: number, combustible: number, cilindrada: number, potencia: number, torque: number, valvulas: number, consumo_promedio: number, dimensiones: string, precio: number, imagen: string, fecha_ingreso: number, fecha_finalizacion: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
    this.combustible = combustible;
    this.cilindrada = cilindrada;
    this.potencia = potencia;
    this.torque = torque;
    this.valvulas = valvulas;
    this.consumo_promedio = consumo_promedio;
    this.dimensiones = dimensiones;
    this.precio = precio;
    this.imagen = imagen;
    this.fecha_ingreso = fecha_ingreso;
    this.fecha_finalizacion = fecha_finalizacion;
  }
}
