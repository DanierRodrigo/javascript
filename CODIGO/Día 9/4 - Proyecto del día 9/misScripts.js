function Automovil(marca, modelo, color, anio, titular) {
  this.marca = marca;
  this.modelo = modelo;
  this.color = color;
  this.anio = anio;
  this.titular = titular;
}


// Crear instancias
let auto1 = new Automovil("Toyota", "Corolla", "Rojo", 2018, "Juan Pérez");
let auto2 = new Automovil("Ford", "Fiesta", "Azul", 2020, "María Gómez");
let auto3 = new Automovil("Honda", "Civic", "Negro", 2022, "Carlos López");

// Array que contiene los automóviles
let automoviles = [auto1, auto2, auto3];