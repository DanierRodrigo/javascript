function agregarEvento() {
    const input = document.getElementById("miInput");

    input.addEventListener("keypress", function (event) {
        console.log(event.key);
    });
}