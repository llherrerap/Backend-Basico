/* En JavaScript se pueden declarar variables con las palabras reservadas var o let
    -let se usa para ambito de bloque o local.
    -var se usa para ambitos globales
El ambito de bloque de manera sencilla es todo lo que esta encerrado por corchetes {}.
*/

//Definición variable global
var pelicula="Interestelar"
//Para concatenar el texto con una variable / constante se utiliza la coma, como se ve a continuación
console.log("Variable película antes del bloque:", pelicula)

//Definición variable local.
let musica="Rock"
console.log("Variable música antes del bloque:", musica)

//esto es un bloque
{
    var pelicula="Matilda"
    console.log("Variable película en el bloque:", pelicula)

    let musica="Salsa"
    console.log("Variable música en el bloque:", musica)
}

console.log("Variable película despues del bloque:", pelicula)
console.log("Variable música despues del bloque:", musica)