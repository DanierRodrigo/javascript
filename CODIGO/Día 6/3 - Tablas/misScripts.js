function multiplicar(){
    //Obtener el número
    let elementoTextoTabla = document.getElementById("textoTabla");
    let textoNumeroTabla = elementoTextoTabla.value;
    let numeroTabla = Number(textoNumeroTabla);

    //Obtener la tabla
    let elementoTablaMultiplicar = document.getElementById("listaTabla");

    //Producir y mostrar resultados
    for(x=1; x<11; x++){
        //Calcular el resultado
        let numeroResultado = numeroTabla * x;

        //Construir String con el resultado
        let textoResultado = numeroTabla + " por " + x + " es igual a " + numeroResultado;

        //Crear un elemento de la lista
        let itemLista = document.createElement("li");
        itemLista.innerText = textoResultado;
        elementoTablaMultiplicar.appendChild(itemLista);
    }
}