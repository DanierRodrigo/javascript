/**
Dado el código HTML proporcionado, 
programar la función agregarEvento() del archivo index.js, 
que agregue un evento keydown al input miInput. 
Al disparar el evento, deberá validar que el usuario no pueda ingresar 
en el input la barra espaciadora si la presiona. 
El número keyCode de la barra espaciadora es 32.
 */

function agregarEvento() {
    const input = document.getElementById("miInput");

    input.addEventListener("keydown", function (evento) {
        if (evento.keyCode === 32) {
            evento.preventDefault();
        }
    });
}
//Así sería la forma actual, no deprecada
function agregarEvento() {
    const input = document.getElementById("miInput");

    input.addEventListener("keydown", function (event) {
        if (event.key === " ") {
            event.preventDefault();
        }
    });
}

agregarEvento();