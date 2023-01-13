/*AJAX (Asynchronous JavaScript And XML).
Técnica que permite realizar la petición HTTP desde Javascript para obtener/añadir/modificar/borrar información de manera asíncrona. 
Métodos para realizar la comunicación con el servidor.
    -GET. Leer.
    -POST. Crear.
    -PUT. Actualizar.
    -DELETE. Borrar.
En esta practica se realizarán peticiones HTTP con XMLHttpRequest.

Para que la variable ajax funcione se requiere:
    1. La instancia del objeto XMLHttpRequest()
    2. Ejecutar un evento 
Al ejecutar el evento, el más utilizado es readystatechange. Para agregar el evento se utiliza el método addEventListener de la siguiente forma:
    addEventListener("evento", (evento) => {
        //Programación
    })
    3. Abrir la petición con open()
    4. Enviar la peticion con send()
*/

const ajax = new XMLHttpRequest() //Variable ajax que instancia del objeto XMLHttpRequest

//Asignación de los eventos que se vayan a manipular en la petición
ajax.addEventListener("readystatechange", (e) => { 
    //Lógica de la programación del evento

    /*Estados de la peticion:
        -0 No inicializado: El método open no ha sido llamado
        -1 Cargando: Se llama al método open()
        -2 Cargado: Se llama al método send() 
        -3 Interactivo: La propiedad responseText tiene datos parciales
        -4 Completado: La propiedad responseText tiene todos los datos pedidos.
    */

    if (ajax.readyState !== 4) return; //Cuando el estado sea diferente a 4 el programa no va a retornar ninguna información. Sin este condicional la logica de la programacion se imprimirá en cada cambio de estado

    /*Instancia del objeto XMLHttpRequest()*/

    console.log(ajax)

    console.log("-----------------Propiedades AJAX----------------------")

    /*Propiedades.
        -responseText: Devuelve la respuesta de la peticion como un texto.
        -responseURL: Devuelve la URL de la peticion.
        -readyState: Devuelve el estado de la peticion.
        -status: Devuelve un código de estado enviado por el servidor que indica la respuesta dada a la peticion
            -Status 200: respuesta correcta.
            -Status 404: no encontrado.
            -Status 500: error interno del servidor.
    */
    console.log("-----------------responseText----------------------")
    console.log(ajax.responseText)
    console.log("---------------------------------------------------")
    console.log(`La URL de la peticion es: ${ajax.responseURL}`)
    console.log(`El estado de la peticion es: ${ajax.readyState}`)
    console.log(`Estado de respuesta HTTP: ${ajax.status}`)
});

/*Instrucción que abre la petición con el método GET.*/
ajax.open("GET", "https://jsonplaceholder.typicode.com/users/1");
/*Instruccion que envia la peticion send()*/
ajax.send();