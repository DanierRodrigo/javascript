/**
Dado el archivo auxiliar datos1.json, 
obtener los datos de dicho archivo utilizando fetch
y asigne cada campo a la variable correspondiente ya declarada.
 */

let nombre;
let calle;
let ciudad;
let cantEstudiantes;
let estudiantes;

function obtenerDatos() {
    fetch("datos1.json")
        .then(response => response.json())
        .then(data => {
            nombre = data.nombre;
            calle = data.direccion.calle;
            ciudad = data.direccion.ciudad;
            cantEstudiantes = data.cantEstudiantes;
            estudiantes = data.estudiantes;

            console.log(nombre);
            console.log(calle);
            console.log(ciudad);
            console.log(cantEstudiantes);
            console.log(estudiantes);
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
        });
}