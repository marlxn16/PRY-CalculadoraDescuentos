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
    
// SWITCH para el mensaje motivacional
    let mensaje = "";
    switch(cliente){
        case "estudiante":
            mensaje = "Sigue adelante con tus estudios vas por buen camino";
            break;
        case "adulto":
            mensaje = "Gracias por tu esfuerzo diario.";
            break;
        case "jubilado":
            mensaje = "Disfruta tus beneficios.";
            break;
        default:
            mensaje = "Gracias por su compra.";
            break;
    }

    // calculo final
    const precioFinal = precio - (precio * descuento / 100);

    // mostrar resultado
    txt_resultado.innerHTML = `
        <strong>Producto:</strong> ${producto}<br>
        <strong>Precio original:</strong> $${precio.toFixed(2)}<br>
        <strong>Descuento total:</strong> ${descuento}%<br>
        <strong>Precio final:</strong> $${precioFinal.toFixed(2)}<br><br>
        <strong>Mensaje:</strong> ${mensaje}
    `;
});