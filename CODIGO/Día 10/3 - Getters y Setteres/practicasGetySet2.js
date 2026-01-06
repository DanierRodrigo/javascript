/**
Dada la clase Colegio, agregue los métodos get y set para las propiedades nombre, direccion y cantAlumnos.
 */

class Colegio {
    constructor(nombre, direccion, cantAlumnos) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._cantAlumnos = cantAlumnos;
    }

    // Getter y Setter para nombre
    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    // Getter y Setter para direccion
    get direccion() {
        return this._direccion;
    }

    set direccion(nuevaDireccion) {
        this._direccion = nuevaDireccion;
    }

    // Getter y Setter para cantAlumnos
    get cantAlumnos() {
        return this._cantAlumnos;
    }

    set cantAlumnos(nuevaCantidad) {
        this._cantAlumnos = nuevaCantidad;
    }
}