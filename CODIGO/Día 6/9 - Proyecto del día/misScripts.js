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

function promedio(){
    let sumatorioNotas = 0;

    for(x = 0; x < calificaciones.length; x++){
        sumatorioNotas = sumatorioNotas + calificaciones[x];
    }

    let resultado = sumatorioNotas / calificaciones.length;

    // Mostrar el promedio en el HTML
    document.getElementById("textoPromedio").textContent = resultado;
}

function notaMasAlta(){
    let i = 0;                 // índice para recorrer el array
    let mayor = 0;             // aquí guardamos la nota más alta

    while (i < calificaciones.length) {
        if (calificaciones[i] > mayor) {
            mayor = calificaciones[i];
        }
        i++;
    }

    // Mostrar el resultado en la página
    document.getElementById("textoNotaMasAlta").textContent = mayor;
}

function suspenso(){
    let i = 0;
    let haySuspenso = false;

    do {
        if(calificaciones[i] < 4){
            haySuspenso = true;
            break;
        }

        i++

    }while (i < calificaciones.length);

    // Mostrar el resultado (Sí / No)
    document.getElementById("textoSuspenso").textContent = haySuspenso ? "Sí" : "No";
}