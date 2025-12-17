/**
Crea un constructor Empleado, con las propiedades nombre, 
antiguedad y sueldo. Luego se solicita crear la instancia empleado1 
utilizando el constructor Empleado antes declarado. 

Y por último, crea otra instancia empleado2, pero ahora utilizando 
como objeto prototipo empleado1 para poner en práctica 
el funcionamiento de la cadena de prototipos.
*/

function Empleado(nombre, antiguedad, sueldo) {
    this.nombre = nombre,
    this.antiguedad = antiguedad,
    this.sueldo = sueldo 
}

let empleado1 = new Empleado;
let empleado2 = Object.create(empleado1);