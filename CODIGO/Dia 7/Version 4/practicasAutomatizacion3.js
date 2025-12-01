/*Adapta la función generarContenido, 
para que utilizando el parámetro numero, 
el input que se genera (y su correspondiente label asociado) 
utilice este parámetro para definir su ID. 

Es decir, que si el parámetro numero es 3, 
el ID del input generado deberá ser txtInput3 
y además el label se debe asociar a ese ID del input 
y el texto que muestra debe decir Label 3.

El objetivo de esto, sería que luego se pueda generar código 
de forma repetitiva como se vio en la última clase 
y que los nombres de los campos se generen de forma dinámica*/

function generarContenido(numero) {
    let content = document.getElementById("contenido");

    //Creamos un ID dinámico en base al parámetro número
    let idInput = "txtInput" + numero;
    
    //Modificamos la creación del label
    let label = document.createElement("label");
    label.setAttribute("for", idInput);
    label.innerText = "Label " + numero;
    
    //Modificamos la creación del input
    let input = document.createElement("input");
    input.setAttribute("id", idInput);
    input.setAttribute("type", "number");
    input.setAttribute("value", 0);
    
    content.appendChild(label);
    content.appendChild(input);
    
    return content;
}

