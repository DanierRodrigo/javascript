function recomendar(genero) {
    let elementoEdad = parseInt(document.getElementById("textoEdad").value);
    let elementoRespuesta = document.getElementById("peliculaRecomendada");

    switch (genero) {

        case 'accion':
            if (elementoEdad < 13) {
                elementoRespuesta.textContent = "Hook: El Capitán Garfio";
            } else if (elementoEdad < 16) {
                elementoRespuesta.textContent = "Too Fast Too Furious";
            } else {
                elementoRespuesta.textContent = "Django: Desencadenado";
            }
            break;

        case 'drama':
            if (elementoEdad < 13) {
                elementoRespuesta.textContent = "Solo en Casa";
            } else if (elementoEdad < 16) {
                elementoRespuesta.textContent = "Mi chica";
            } else {
                elementoRespuesta.textContent = "Atrápame si puedes";
            }
            break;

        case 'clasicos':
            if (elementoEdad < 13) {
                elementoRespuesta.textContent = "Mary Poppins";
            } else if (elementoEdad < 16) {
                elementoRespuesta.textContent = "El bueno, el feo y el malo";
            } else {
                elementoRespuesta.textContent = "Scarface";
            }
            break;

        case 'disney':
            if (elementoEdad < 13) {
                elementoRespuesta.textContent = "Toy Story";
            } else if (elementoEdad < 16) {
                elementoRespuesta.textContent = "El rey león";
            } else {
                elementoRespuesta.textContent = "Star Wars: La amenaza fantasma";
            }
            break;
    }
}
