// Array para almacenar empleados
const empleados = [];

// Constructor de Empleado
class Empleado {
    constructor(nombre, apellido, edad, departamento, salario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.departamento = departamento;
        this.salario = salario;
    }
}

//Agregar Empleados
document.getElementById('agregar').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const departamento = document.getElementById('departamento').value;
    const salario = document.getElementById('salario').value;


    const nuevoEmpleado = new Empleado(nombre, apellido, edad, departamento, salario);
    empleados.push(nuevoEmpleado);


    alert('Empleado agregado correctamente');
});