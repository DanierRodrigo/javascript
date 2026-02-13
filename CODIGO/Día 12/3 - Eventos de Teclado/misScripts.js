let campo = document.getElementById("miCampo");


function verificarNumero(event){
    if(event.key < 48 || event.key > 57){
        event.preventDefault();
    };
};

campo.addEventListener('keydown', verificarNumero);

campo.addEventListener('keyup', function(event){
    console.log("Entrada del usuaro: " + event.target.value)
});

campo.addEventListener('keypress', function(event){
    console.log("Caracter ingresado: " + event.key)
});