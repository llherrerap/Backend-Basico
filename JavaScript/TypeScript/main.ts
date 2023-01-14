/*Al igual que en JavaScript tenemos let, var y const.
A diferencia de JavaScript se puede definir el tipo de dato que va a recibir la variable.
    -let a:string
    -let a:number
    -let a:boolean
    -let a:any
*/

//Variables

let hola:string = "Hola mundo!"
let a:number=6
let verdader:boolean=true
//Any es el tipo de dato en donde se puede meter cualquier dato
let cualquierValor:any="Variable que recibe cualquier dato"

// Constantes

const PI:number=3.1416

console.log(hola, a, PI)

//Arrays

let dias:string[]=["Lunes", "Martes", "Miercoles", "Viernes", "Sabado", "Domingo"]

//DOM
var $dias:HTMLElement=document.querySelector("#dias")

dias.forEach(dia => {
    const $li = document.createElement("li")
    $li.textContent = dia
    $dias.appendChild($li)
});