function recomendar(genero) {
    let elementoEdad = document.getElementById("edad").value;
    let elementoRespuesta = document.getElementById("peliculaRecomendada");

    switch (genero && edad < 13) {
        case 'accion':
            elementoRespuesta.textContent = "Hook: El Capitán Garfio";
            break;
        case 'drama':
            elementoRespuesta.textContent = "Solo en Casa";
            break;
        case 'clasicos':
            elementoRespuesta.textContent = "Mary Poppings";
            break;
        case 'disney':
            elementoRespuesta.textContent = "Toy Story";
            break;
    }

    switch (genero && (edad >= 13 && edad < 16)) {
        case 'accion':
            elementoRespuesta.textContent = "To Fast To Furious";
            break;
        case 'drama':
            elementoRespuesta.textContent = "Mi chica";
            break;
        case 'clasicos':
            elementoRespuesta.textContent = "El bueno, el feo y el malo";
            break;
        case 'disney':
            elementoRespuesta.textContent = "El rey león";
            break;
    }

    switch (genero && edad >= 16) {
        case 'accion':
            elementoRespuesta.textContent = "Django: Desencadenado";
            break;
        case 'drama':
            elementoRespuesta.textContent = "Atrápame si puedes";
            break;
        case 'clasicos':
            elementoRespuesta.textContent = "Scarface";
            break;
        case 'disney':
            elementoRespuesta.textContent = "Star Wars: La amenaza fantasma";
            break;
    }

    
}