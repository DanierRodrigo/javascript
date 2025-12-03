/**Haciendo uso de lo visto en la clase anterior, 
implementar la función automatizarSuma() 
que debe calcular y guardar el resultado de sumar 
el contenido de los inputs en la variable sumaTotal. 
Para ello, hacer uso de la propiedad children vista 
y tener en cuenta que la estructura de elementos 
en nuestra página HTML es la siguiente:

<div id="contenido">

<p>
    <label>
    <input> 
*/

let sumaTotal = 0;

function automatizarSuma() {

    sumaTotal = 0; // Reiniciar antes de sumar

    let contenedor = document.getElementById("contenido");

    // Recorrer todos los <p> que son hijos directos de "contenido"
    for (let i = 0; i < contenedor.children.length; i++) {

        let parrafo = contenedor.children[i];       // <p>
        let input = parrafo.children[1];            // el <input> dentro del <p>

        let valor = Number(input.value);            // obtener valor numérico
        sumaTotal += valor;                         // acumular
    }
}