/*AJAX (Asynchronous JavaScript And XML).
Técnica que permite realizar la petición HTTP desde Javascript para obtener/añadir/modificar/borrar información de manera asíncrona. 
Métodos para realizar la comunicación con el servidor.
    -GET. Leer.
    -POST. Crear.
    -PUT. Actualizar.
    -DELETE. Borrar.
En esta practica se realizarán peticiones HTTP con XMLHttpRequest
*/

const ajax = new XMLHttpRequest(), //Variable ajax que instancia del objeto XMLHttpRequest
  $lista = document.getElementById("lista"), //variable que hace referencia al nodo ol del HTML id="lista"
  $fragmento = document.createDocumentFragment(); //Fragmento en donde se guardaran las listas

/*Para que la variable ajax funcione se requiere:
    1. La instancia del objeto XMLHttpRequest()
    2. Ejecutar un evento 
Al ejecutar el evento, el más utilizado es readystatechange. Para agregar el evento se utiliza el método addEventListener de la siguiente forma:
    addEventListener("evento", (evento) => {
        //Programación
    })
    3. Abrir la petición con open()
    4. Enviar la peticion con send()
*/

//Asignación de los eventos que se vayan a manipular en la petición
ajax.addEventListener("readystatechange", (e) => { 
    //Lógica de la programación

    /*Estados de la peticion:
        -0 No inicializado: El método open no ha sido llamado
        -1 Cargando: Se llama al método open()
        -2 Cargado: Se llama al método send() 
        -3 Interactivo: La propiedad responseText tiene datos parciales
        -4 Completado: La propiedad responseText tiene todos los datos pedidos.
    */


   /*Propiedades AJAX:
    -La propiedad readyState trae el estado de la peticion.
   
   */
    if (ajax.readyState !== 4) return; //Cuando el estado sea diferente a 4 el programa no va a retornar ninguna información. Esta practica se realiza para hacer la manipulación de la información que trae el servidor en el DOM

    console.log(ajax.responseText)
    console.log(ajax.responseURL)
    console.log(ajax.readyState)
    console.log(ajax.status)

    if (ajax.status >= 200 && ajax.status < 300) {
        let json = JSON.parse(ajax.responseText);

        json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragmento.appendChild($li);
        });

        $lista.appendChild($fragmento);
    } else {
        let message = ajax.statusText || "Ocurrió un error";
        $lista.innerHTML = `Error ${ajax.status}: ${message}`;
    }
});

/*Instrucción que abre la petición con el método GET.
    open("metodo", "recursoPeticion")*/
ajax.open("GET", "https://jsonplaceholder.typicode.com/users");
/*Instruccion que envia la peticion send()*/
ajax.send();