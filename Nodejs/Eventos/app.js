//simular una factura
const EventEmitter = require('events');//se importa el modulo eventos

var emisorProductos = new EventEmitter();

//definicion de las funciones manejadoras del evento 
emisorProductos.on('error', () =>{console.log(new Error('Fallo la compra'))});
//funciones con varios parametros
emisorProductos.on('imprimir', (total, nombre) => {
    console.log(`Se realizo una compra por un valor de $${total}cop a nombre de ${nombre} el dia ${new Date().toLocaleDateString()}`);
});

//emicion de la funcion error
emisorProductos.emit('error');
//emicion de la funcion imprimir
emisorProductos.emit('imprimir',5000,"Amparo");
