let boton = document.getElementById('miBoton');

function mostrarMensaje(){
    alert('El botón ha sido presionado');
};

function otroMensaje(){
    alert('Flotar');
}

boton.addEventListener('click', mostrarMensaje);

boton.addEventListener('mouseover', otroMensaje);