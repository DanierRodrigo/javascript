/**
Dado el código HTML proporcionado, 
programar la función agregarEvento() del archivo script.js, 
que agregue un evento click al enlace miLink. 
Al dispararse el evento, se debe cancelar la funcionalidad asociada 
utilizando la variable event y la función preventDefault.
 */

function agregarEvento() {
    const link = document.getElementById("miLink");

    link.addEventListener("click", function(event) {
        event.preventDefault(); // Cancela la navegación
        console.log("Navegación cancelada");
    });
}

// Llamamos la función
agregarEvento();