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
// descuento aplicando el IF - ELSE
let descuento = 0;
    if(cliente === "estudiante"){
        descuento = 20;
    }else if(cliente === "adulto"){
        descuento = 10;
    }else if(cliente === "jubilado"){
        descuento = 30;
    }
    // si paga en efectivo se le aplica el 5% de descuento adicional
    descuento += (pago === "efectivo") ? 5 : 0;