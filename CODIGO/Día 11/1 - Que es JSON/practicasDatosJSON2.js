/**
Dado el archivo auxiliar datos.json, 
obtener los datos de dicho archivo utilizando XMLHttpRequest 
y asigne cada campo a la variable correspondiente ya declarada.
 */

let nombre;
let calle;
let ciudad;
let cantEstudiantes;
let estudiantes;

function obtenerDatos() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "datos.json", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const datos = JSON.parse(xhr.responseText);

            nombre = datos.nombre;
            calle = datos.direccion.calle;
            ciudad = datos.direccion.ciudad;
            cantEstudiantes = datos.cantEstudiantes;
            estudiantes = datos.estudiantes;

            // Opcional: verificar en consola
            console.log(nombre, calle, ciudad, cantEstudiantes, estudiantes);
        }
    };

    xhr.send();
}