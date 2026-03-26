/**
Dado el código HTML proporcionado, programar la función agregarEvento() del archivo index.js, 
que agregue un evento mouseout al boton miBoton. 
Al disparar el evento, deberá imprimir en consola el mensaje: Mouse por fuera de botón
 */

function agregarEvento() {
    const boton = document.getElementById("miBoton");

    boton.addEventListener("mouseout", function() {
        console.log("Mouse por fuera de botón");
    });
}