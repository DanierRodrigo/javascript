/**
Declarar una variable socket, ç
que establezca una comunicación con el servidor ws://localhost:8080 
y a través del mismo, enviar el mensaje "¡Hola mundo!"
 */

let socket = new WebSocket('ws://localhost:8080');

socket.onopen = function () {
    socket.send("¡Hola mundo!");
};