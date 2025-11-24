function evaluarCompra(){
    let elementoRespuesta = document.getElementById("decision");

    let elementoPrecio = document.getElementById("textoPrecio");
    let precio = elementoPrecio.value;

    if(precio < 5){
        elementoRespuesta.textContent = "Compra dos cartones de leche";
    }else{
        if((precio >= 5) && (precio <= 8)){
            elementoRespuesta.textContent = "Compra solo un cartón de leche";
        }else{
            elementoRespuesta.textContent = "Huye, esa tienda es carísima";
        }
    }
}