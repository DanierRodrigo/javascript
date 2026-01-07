class Animal {
    constructor(nombre, peso, edad) {
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }

    informacion() {
        return `${this.nombre} - ${this.peso} kg - ${this.edad} años`;
    }
}

class Perro extends Animal {
    constructor(nombre, peso, edad, raza) {
        super(nombre, peso, edad);
        this.raza = raza;
    }

    informacion() {
        return `Perro - ${this.nombre} - ${this.peso} kg - ${this.edad} años - ${this.raza}`;
    }
}

class Gato extends Animal {
    constructor(nombre, peso, edad, sexo) {
        super(nombre, peso, edad);
        this.sexo = sexo;
    }

    informacion() {
        return `Gato - ${this.nombre} - ${this.peso} kg - ${this.edad} años - ${this.sexo}`;
    }
}

class Conejo extends Animal {
    constructor(nombre, peso, edad, color) {
        super(nombre, peso, edad);
        this.color = color;
    }

    informacion() {
        return `Conejo - ${this.nombre} - ${this.peso} kg - ${this.edad} años - Color: ${this.color}`;
    }
}

// Instancias de animales
let perro1 = new Perro("Firulais", 12, 5, "Labrador");
let gato1 = new Gato("Michi", 4, 3, "Macho");
let conejo1 = new Conejo("Bunny", 2, 2, "Blanco");

// Array con todos los animales
let animales = [perro1, gato1, conejo1];

function mostrarAnimales() {
    let lista = document.getElementById("lista-animales");

    // Limpiar la lista antes de mostrarla nuevamente
    lista.innerHTML = "";

    for (let animal of animales) {
        let li = document.createElement("li");
        li.textContent = animal.informacion();
        lista.appendChild(li);
    }
}