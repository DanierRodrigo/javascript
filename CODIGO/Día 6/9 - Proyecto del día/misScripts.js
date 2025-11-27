let calificaciones = [7, 9, 4, 10, 6];

function listarCalificaciones() {
    // Seleccionamos el UL donde vamos a escribir
    let lista = document.getElementById("textoCalificaciones");

    // Recorremos el array
    for (let nota of calificaciones) {
        // Creamos un elemento LI
        let elementoNota = document.createElement("li");

        // Le ponemos el texto
        elementoNota.textContent = nota;

        // Lo agregamos al UL
        lista.appendChild(elementoNota);
    }
}