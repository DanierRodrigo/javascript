/**
Dado el archivo auxiliar datos.json, 
obtener los datos de dicho archivo utilizando fetch 
y asigne cada campo a la variable correspondiente ya declarada.
 */

let titulo;
let director;
let lanzamiento;
let duracion;
let actores;
let premioOscar;

function obtenerDatos() {
    fetch("datos.json")
        .then(response => response.json())
        .then(data => {
            titulo = data.titulo;
            director = data.director;
            lanzamiento = data.lanzamiento;
            duracion = data.duracion;
            actores = data.actores;
            premioOscar = data.premioOscar;

            // Opcional: comprobar en consola
            console.log(titulo, director, lanzamiento, duracion, actores, premioOscar);
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
        });
}