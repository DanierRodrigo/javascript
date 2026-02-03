fetch("resumen.json")
    .then(response => response.json())
    .then(data => {

        // Accedemos a los campos con el punto (.)
        document.getElementById("banco").textContent = data.banco;
        document.getElementById("sucursal").textContent = data.sucursal;
        document.getElementById("titular").textContent = data.titular;
        document.getElementById("nro_cuenta").textContent = data.nro_cuenta;
        document.getElementById("cbu").textContent = data.cbu;
        document.getElementById("abierto").textContent = data.abierto;

        // Accedemos al array saldo y luego a sus campos
        document.getElementById("saldo_usd").textContent = data.saldo[0].monto;
        document.getElementById("saldo_eur").textContent = data.saldo[1].monto;

    });
