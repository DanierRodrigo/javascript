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

// Método para vender el automóvil
Automovil.prototype.venderAutomovil = function(nuevoTitular) {
  this.titular = nuevoTitular;
};

// Método para ver la información del auto
Automovil.prototype.verAuto = function() {
  return this.marca + " " + this.modelo + " - " + this.anio + " - " + this.titular;
};

// Método para encender el automóvil
Automovil.prototype.enceder = function() {
  alert("El automovil esta en marcha");
};

function mostrarAutos() {
  let lista = document.getElementById("listaAutos");

  // Limpiar la lista antes de volver a mostrarla
  lista.innerHTML = "";

  // Recorrer el array con For Of
  for (let auto of automoviles) {
    const item = document.createElement("li");
    item.textContent = auto.verAuto();
    lista.appendChild(item);
  }
}
