
function mostrarResultado(valor) {
    document.getElementById("resultado").value = valor;
}

// Operaciones básicas
function sumar() {
    let n1 = +document.getElementById("numero1").value;
    let n2 = +document.getElementById("numero2").value;
    mostrarResultado(n1 + n2);
}

function restar() {
    let n1 = +document.getElementById("numero1").value;
    let n2 = +document.getElementById("numero2").value;
    mostrarResultado(n1 - n2);
}

function multiplicar() {
    let n1 = +document.getElementById("numero1").value;
    let n2 = +document.getElementById("numero2").value;
    mostrarResultado(n1 * n2);
}

function dividir() {
    let n1 = +document.getElementById("numero1").value;
    let n2 = +document.getElementById("numero2").value;
    if (n2 === 0) {
        mostrarResultado("Error: división por 0");
    } else {
        mostrarResultado(n1 / n2);
    }
}

// Otras operaciones
function potencia() {
    let n1 = +document.getElementById("numero1").value;
    let n2 = +document.getElementById("numero2").value;
    mostrarResultado(Math.pow(n1, n2));
}

function raiz() {
    let n1 = +document.getElementById("numero1").value;
    mostrarResultado(Math.sqrt(n1));
}

function absoluto() {
    let n1 = +document.getElementById("numero1").value;
    mostrarResultado(Math.abs(n1));
}

function random() {
    mostrarResultado(Math.random());
}

function round() {
    let n1 = +document.getElementById("numero1").value;
    mostrarResultado(Math.round(n1));
}

function floor() {
    let n1 = +document.getElementById("numero1").value;
    mostrarResultado(Math.floor(n1));
}

function ceil() {
    let n1 = +document.getElementById("numero1").value;
    mostrarResultado(Math.ceil(n1));
}
