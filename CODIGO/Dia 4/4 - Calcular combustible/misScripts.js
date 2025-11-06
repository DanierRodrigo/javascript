function calcularLitros(){
            var elementoKm = document.getElementById("textoKm");
            var textoKm = elementoKm.value;
            var cantKm = Number(textoKm);

            var cantLitros = cantKm * 0.07;

            var resultado = document.getElementById("textoResultado");
            resultado.textContent = "Carga " + cantLitros.toFixed(2) + " litros de combustible."
        }