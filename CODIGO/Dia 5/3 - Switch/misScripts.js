function consultarPrecio(){
    let elementoRespuesta = document.getElementById("textoPrecio");

    let elementoFruta = document.getElementById("numeroFruta");
    let fruta = elementoFruta.value;

    switch (fruta)
    {
        case "1": 
            elementoRespuesta.textContent = "2€";
            break;
        case "2": 
            elementoRespuesta.textContent = "1.58€";
            break;
        case "3": 
            elementoRespuesta.textContent = "2.10€";
            break;
        case "4": 
            elementoRespuesta.textContent = "1.33€";
            break;
        case "5": 
            elementoRespuesta.textContent = "5.41€";
            break;                
    }
}