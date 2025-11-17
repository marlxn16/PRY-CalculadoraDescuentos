// capturamos elementos
const btnCalcular = document.getElementById('btn_calcular_precio');
let txt_resultado = document.getElementById('txt_resultado');

// evento click
btnCalcular.addEventListener('click', function() {

    // capturamos valores
    const producto = document.getElementById('txt_producto').value;
    const precio = parseFloat(document.getElementById('txt_precio').value);
    const cliente = document.getElementById('sel_tipo_cliente').value;
    const pago = document.getElementById('sel_forma_pago').value;

    // alerta para que todos los campos sean llenados antes de ejecutar el calculo
    if(!producto || !precio || !cliente || !pago)
    { alert("Complete los campos."); return; }
});