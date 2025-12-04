function crearTiendas(contenedorID, min, cantidadTiendas){
    //Encontrar contenedor por su id
    let elementoContenedor = document.getElementById(contenedorID);

    //Loop para crear tantas tiendas como se desee
    for(let contadorTiendas = 1; contadorTiendas <= cantidadTiendas; contadorTiendas++){

        //Crear el texto de label para poder llamar a la función
        let textoEtiqueta = "Tienda " + contadorTiendas;

        //Crear tiendas con crearParrafoTienda
        let parrafoTienda = crearParrafoTienda(textoEtiqueta, min);

        //Agregar el párrafo al contenedor
        elementoContenedor.appendChild(parrafoTienda);
    }
}

function crearParrafoTienda(textoLabel, valorMin){
    //Crear las atiquetas <p>
    let elementoParrafo = document.createElement("p");

    //Crear la etiqueta label
    let elementoEtiqueta = document.createElement("label");
    elementoEtiqueta.innerText = textoLabel + ": ";

    //Conectar con el input
    elementoEtiqueta.setAttribute("for", textoLabel);

    //Crear el input
    let elementoInput = document.createElement("input");

    //Establecer atributos de input
    elementoInput.setAttribute("type","number");
    elementoInput.setAttribute("id", textoLabel);
    elementoInput.setAttribute("min", valorMin);
    elementoInput.setAttribute("value", 0);

    //Añadir label e input al párrafo
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);

    //Devolver el párrafo completo
    return elementoParrafo;
}

function extraerNumeroDesdeElemento(elemento){
    let miTexto = elemento.value;
    let miNumero = Number(miTexto);

    return miNumero;
}

function calcular(){
    let ventas = [];
    let posicionVentas = 0;
    let elementosVentas = document.getElementById("itemsTiendas");

    //Nos vamos a fijar en todos los párrafos que tiene el div usando (.children)
    for(let item of elementosVentas.children){
        //Llamamos el 1 porque es el hijo segundo del párrafo que queremos, pues el 0 es el label
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);
        ventas[posicionVentas] = valorVenta;
        posicionVentas = posicionVentas + 1;
    }

    // Declaramos el loop for...of para iterar sobre todos los párrafos
    let mayorVenta = -Infinity;  // Inicializamos con un valor muy bajo
    let menorVenta = Infinity;  // Inicializamos con un valor muy alto

    for (let item of elementosVentas.children) {
        // Almacenamos el input (está en el índice 1 dentro del párrafo)
        let inputElemento = item.children[1];  // El input está en el índice 1

        // Extraemos el valor del input
        let valor = extraerNumeroDesdeElemento(inputElemento);

        // Comparamos el valor de cada input para encontrar el mayor y el menor
        if (valor > mayorVenta) {
            mayorVenta = valor;
        }
        if (valor < menorVenta) {
            menorVenta = valor;
        }
    }

    // Ahora calculamos el total de ventas
    let totalVentas = sumarTotal(ventas);

    // Mostrar solo el total de ventas
    let mensajeSalida = "Total Ventas: " + totalVentas;
    let elementoSalida = document.getElementById("parrafoSalida");
    elementoSalida.textContent = mensajeSalida;

    // Asignar la clase al input de la mayor venta
    for (let item of elementosVentas.children) {
        let inputElemento = item.children[1];
        let valor = extraerNumeroDesdeElemento(inputElemento);

        if (valor === mayorVenta) {
            inputElemento.classList.add('mayor-venta');
        }
        if (valor === menorVenta) {
            inputElemento.classList.add('menor-venta');
        }
    }

}

function sumarTotal(array){
    let total = 0;

    for(let venta of array){
        total = total + venta;
    }

    return total;
}

function calcularMayor(array){
    let maximo = array[0];

    for(let venta of array){
        if(venta > maximo){
            maximo = venta;
        }
    }

    return maximo;
}

function calcularMenor(array){
    let minimo = array[0];

    for(let venta of array){
        if(venta < minimo){
            minimo = venta;
        }
    }

    return minimo;
}