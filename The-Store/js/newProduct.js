const nombre = document.getElementById("minombre");
const precio = document.getElementById("precio");
const inventario = document.getElementById("inventario");
const listInput = document.querySelectorAll(".form-input");
newProduct_ addEventListener("enviar", (e) => {
    mi.prevenirPredeterminado();
    let condicion = validacionForm();
    si(condición) {
        enviarFormulario();
    }
});

function validacionForm() {
    newProduct _ lastElementChild.HTML interno = "";
    let condicion = true;
    listaEntradas.paraCada((elemento) => {
        elemento _ lastElementChild.HTML interno = "";
    });
    if (nombre.value.length < 1 || nombre.value.trim() == "") {
        mostrarMensajeError("minombre", "Nombre no valido*");
        condición = falso;
    }
    if (precio.value.length < 1 || precio.value.trim() == "") {
        mostrarMensajeError("precio", "precio no valido*");
        condición = falso;
    }
    si(
        inventario _ valor _ longitud != 9 ||
        inventario _ valor _ recortar() == "" ||
        isNaN(inventario.valor)
    ) {
        mostrarMensajeError("inventario", "inventario no valido*");
        condición = falso;
    }