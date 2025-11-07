function calcularLitros(){
            var elementoKm = document.getElementById("textoKm");
            var textoKm = elementoKm.value;
            var cantKm = Number(textoKm);

            var cantLitros = Math.ceil(cantKm * 0.07);   //Redondeo hacia arriba
                                                         // .floor hacia abajo
                                                         // .round según el 0.5

            var resultado = document.getElementById("textoResultado");
            resultado.textContent = "Carga " + cantLitros + " litros de combustible."
        }