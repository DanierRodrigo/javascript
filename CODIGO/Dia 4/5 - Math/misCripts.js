function calcularPotencia(){
            var base = Number(document.getElementById("textoBase").value);
            var exponente = Number(document.getElementById("textoExponente").value);

            var resultado = Math.pow(base, exponente);

            document.getElementById("textoResultadoPotenciar").textContent =
                base + " elevado a " + exponente + " = " + resultado;
        }

function calcularCircunferencia(diametro){
var diametro = Number(document.getElementById("textoDiametro").value);

    var resultado = Math.PI*(diametro);

    document.getElementById("textoResultadoCircunferencia").textContent =
            "El área de la cirfunferencia de diámetro " + diametro + " = " + resultado;
}

function numeroRandom(){
    var resultado = Math.floor(Math.random() * 50) + 1;

    document.getElementById("textoResultadoNumeroRandom").textContent =
            "Número random resultante es = " + resultado;
}

