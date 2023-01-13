/*jQuery.
La estrucutra basica de seleccion de elementos HTML con jQuery
$("ElementoHTML").metodo()

Es importante poner la funcion que ejecuta los jQuery cuando el documento HTML termina de cargar. Su estrcutura es la siguiente
    $(function(){
        //código jQuery
    })
*/
$(function(){
    /*Al igual que en el DOM, con jQuery podemos seleccionar elementos HTML por su etiqueta, id (#) o clase (.).
    Algunos de los métodos que se pueden utilizar en jQuery son:
        -html()
        -insertAfter()
        -insertBefore()
        -hasClass()
        -addClass()
        -attr()
        -clone()
        -hide()
        -show()
        -remove()
        -text()
    Para ver más metodos revise el siguiente enlace https://norfipc.com/codigos/jquery-todos-selectores-eventos-metodos-funciones.php*/

    console.log("-----------------Métodos----------------------")
    console.log($("H1").html()) //Método que muesta el contenido HTML de un elemento
    $("<h2>Libreria jQuery</h2>").insertAfter("H1") //Metodo que insa elementos HTML despues de un elemento. insertBefore() para insertar antes de un elemento.
    console.log($("button").hasClass("mostrar")) //Método que comprueba si un elemento tiene un nombre de clase especifico.
    $("H2").addClass("subtitulo") //Metodo que agrega una clase a un elemento.
    $(".mostrar").clone().insertAfter(".mostrar").attr("class", "eliminar").text("Eliminar") //Clona el boton mostrar y lo inserta despues de este. Cambia el nombre de la clase con el metodo attr() y sustituye el cotenido de texto con el metodo text()

    $(".esconder").click(function(){ //Evento click realiza una accion al dar click en el elemento.
        $("#segundo").hide() //Metodo qee esconde elemento seleccionado
    })
    $(".mostrar").click(function(){
        $("#segundo").show() //Método que muestra el elemento seleccionado
    })
    $(".eliminar").click(function(){
        $("#primero").remove() //Método que elimina el elemento seleccionado
    })
})