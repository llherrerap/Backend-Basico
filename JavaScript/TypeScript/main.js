/*Al igual que en JavaScript tenemos let, var y const.
A diferencia de JavaScript se puede definir el tipo de dato que va a recibir la variable.
    -let a:string
    -let a:number
    -let a:boolean
    -let a:any
*/
//Variables
var hola = "Hola mundo!";
var a = 6;
var verdader = true;
//Any es el tipo de dato en donde se puede meter cualquier dato
var cualquierValor = "Variable que recibe cualquier dato";
// Constantes
var PI = 3.1416;
console.log(hola, a, PI);
//Arrays
var dias = ["Lunes", "Martes", "Miercoles", "Viernes", "Sabado", "Domingo"];
//DOM
var $dias = document.querySelector("#dias");
dias.forEach(function (dia) {
    var $li = document.createElement("li");
    $li.textContent = dia;
    $dias.appendChild($li);
});
