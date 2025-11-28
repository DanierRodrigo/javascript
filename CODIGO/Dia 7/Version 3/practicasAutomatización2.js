/*En el archivo script.js, 
programe la función generarContenido() 
que agregue elementos HTML mediante código JavaScript. 
Se debe agregar, en el div con ID contenido, 
una etiqueta <label> con el texto "Label 1" 
y una etiqueta <input> con el ID txtInput. 
El label debe contar con el atributo for 
que lo vincule con txtInput y al input agregarle 
el atributo type igual a number y un atributo valor igual a 0.*/

function generarContenido() {
    //Obtener el div contenedor
    let contenedor = document.getElementById("contenido");

    //Creamos el label
    let label = document.createElement("label");
    label.textContent = "Label 1";

    //Creamos el input
    let input = document.createElement("input");

    //Agregamos los atributos
    input.setAttribute("id","txtInput");
    input.setAttribute("type","number");
    input.setAttribute("value", 0);

    //Conectar el label con el input mediante su ID
    label.setAttribute("for", "txtInput");

    //Agregar el label al div
    contenedor.appendChild(label);
    contenedor.appendChild(input);
}

