fetch("datos.json")
    .then(response => response.json())
    .then(data => {

        document.getElementById("banco").textContent = data.banco;
        document.getElementById("sucursal").textContent = data.sucursal;
        document.getElementById("titular").textContent = data.titular;
        document.getElementById("nro_cuenta").textContent = data.nro_cuenta;
        document.getElementById("cbu").textContent = data.cbu;
        document.getElementById("abierto").textContent = data.abierto;

        // Buscar los saldos por moneda
        const saldoUSD = data.saldo.find(s => s.moneda === "USD");
        const saldoEUR = data.saldo.find(s => s.moneda === "EUR");

        document.getElementById("saldo_usd").textContent = saldoUSD.monto;
        document.getElementById("saldo_eur").textContent = saldoEUR.monto;
    })
    .catch(error => {
        console.error("Error al cargar el JSON:", error);
    });
