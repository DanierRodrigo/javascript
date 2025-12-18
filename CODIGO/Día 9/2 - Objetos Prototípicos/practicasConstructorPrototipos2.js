/**
Crea un constructor Restaurante, con las propiedades nombre, 
direccion y ciudad. Luego se solicita crear la instancia restaurante1 
utilizando el constructor Restaurante antes declarado. 

Y por último, crea otra instancia restaurante2, pero ahora 
utilizando como objeto prototipo restaurante1 para poner en práctica 
el funcionamiento de la cadena de prototipos.
 */

function Restaurante(nombre, direccion, ciudad) {
    this.nombre = nombre,
    this.direccion = direccion,
    this.ciudad = ciudad 
}

let restaurante1 = new Restaurante;
let restaurante2 = Object.create(restaurante1);