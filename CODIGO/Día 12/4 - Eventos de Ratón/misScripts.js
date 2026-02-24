let menu = document.getElementById('miMenu');
let boton = document.getElementById('miBoton');

boton.addEventListener('mouseover', function(){
    menu.style.display = 'block'
});

boton.addEventListener('mouseout', function(){
    menu.style.display = 'none'
});

document.addEventListener('mousemove', function(event){
    console.log("Posición x: " + event.clientX + " - Posición y: " + event.clientY)
})