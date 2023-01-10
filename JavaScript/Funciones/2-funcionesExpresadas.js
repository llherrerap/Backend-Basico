/*Funciones expresadas o anonimas.
Las funciones expresadas hacen parte del ámbito concreto del programa, es decir, estas funciones no existen hasta que la expresión que las genera es ejecutada. Se consideran una buena practica de programación para tener el código ordenado*/

console.log("--------------------Función Expresada-----------------------");
const funcionExpresada = function(){
    return console.log("Esta es una función expresada!");
}

funcionExpresada();

/*Funciones anonimas autoejecutables (IIFE).
Son funciones que se ejecutan al momento de crearlas. Su sintaxis es la siguiente:
(function (parametros){//contenido de la funcion})(parametros);
*/

console.log("----------Funciones anonimas autoejecutables (IIFE)-------------");

(function (){
    console.log("Mi primera funcion anonima autoejecutable (IIFE)");
})();

(function (c){
    c.log("Mi segunda funcion anonima autoejecutable (IIFE) con parametros");
})(console);