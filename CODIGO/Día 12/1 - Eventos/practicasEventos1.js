/**
Dado el código HTML proporcionado, programar la función agregarEvento() del archivo script.js, 
que agregue un evento click al boton miBoton. 
Al disparar el evento, deberá imprimir en consola el mensaje: Boton presionado
 */

let boton = document.getElementById('miBoton');

function agregarEvento () {
    console.log('Boton presionado');
}

boton.addEventListener('click', agregarEvento);