/**
Dada la clase Ciudad, agregue los métodos get y set para las propiedades nombre, pais y cantHabitantes.
 */

class Ciudad {
    constructor(nombre, pais, cantHabitantes) {
        this._nombre = nombre;
        this._pais = pais;
        this._cantHabitantes = cantHabitantes;
    }

    // Getter y Setter para nombre
    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    // Getter y Setter para pais
    get pais() {
        return this._pais;
    }

    set pais(nuevoPais) {
        this._pais = nuevoPais;
    }

    // Getter y Setter para cantHabitantes
    get cantHabitantes() {
        return this._cantHabitantes;
    }

    set cantHabitantes(nuevaCantidad) {
        this._cantHabitantes = nuevaCantidad;
    }
}