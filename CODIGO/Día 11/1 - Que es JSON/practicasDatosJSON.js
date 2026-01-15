/**
Dado el archivo auxiliar datos.json, 
obtener los datos de dicho archivo utilizando XMLHttpRequest 
y asigne cada campo a la variable correspondiente ya declarada.
 */

let titulo;
let director;
let lanzamiento;
let duracion;
let actores;
let premioOscar;

function obtenerDatos() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "datos.json", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const datos = JSON.parse(xhr.responseText);

            titulo = datos.titulo;
            director = datos.director;
            lanzamiento = datos.lanzamiento;
            duracion = datos.duracion;
            actores = datos.actores;
            premioOscar = datos.premioOscar;

            // Opcional: comprobar resultados en consola
            console.log(titulo, director, lanzamiento, duracion, actores, premioOscar);
        }
    };

    xhr.send();
}