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