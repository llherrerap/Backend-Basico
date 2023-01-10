/*Funcion declarada.
Son funciones que forman parte del ámbito global del programa, que para que se ejecuten se debe hacer un llamado a la función, independientemente de donde se declaren se pueden ser llamadas desde cualquier parte del código.
*/

//Funcion declarada sin parametros y sin valor de retorno

console.log("-----------------------------------------------------")

function estoEsUnaFuncion(){
    console.log("Uno")
    console.log("Dos")
    console.log("Tres")
}

//Ivocacion de la funcion

estoEsUnaFuncion();

//Funcion declarada con parametros y valor de retorno

console.log("-----------------------------------------------------")

function saludar(nombre, edad){
    return `Hola mi nombre es ${nombre} y mi edad es ${edad}`
}

console.log(saludar("Amparo", 39));

//Asignación de valores por defecto a una funciones

console.log("-----------------------------------------------------")

function carrera(nombre="desconocido", carrera="desconocido"){
    return console.log(`Hola, mi nombre es ${nombre} y estudié ${carrera}`)
}

carrera("Juan", "desarrollo de web")
carrera(); //Cuando no se agrega parametro muestra el valor asignado en la funcion