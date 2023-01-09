/*Las variables y constentes pueden tener como valor:
    -Cadenas de textos (string)
    -Números
    -Boolenanos
Las variables tambien pueden ser Undefined cuando no se les ha asignado ningun valor.
Vea las siguientes instrucciones de código.*/

/*Para definir una cadena de texto se puede hacer con comillas dobles o sencillas de la siguiente manera:
    -let / var / const = "cadena de texto"
    -let / var / const = 'cadena de texto'*/
let cadenaTexto = "Hola mundo!"
console.log(cadenaTexto)

//Las cadenas de texto se pueden concatenar en una variable con un +, de la siguiente manera.

let nombre = "Camilo"
cadenaTexto= "Hola!" + " Mi nombre es " + nombre
console.log(cadenaTexto)

/*Para definir un tipo número no se agregan comillas dobles ni sencillas. Como se ve a continuación*/

let edad=23
console.log(`${nombre} tiene ${edad} años`)

//Para definir booleanos se utilizan las palabras reservadas true o false según sea el caso.

let verdadero = true
console.log("El veradero se define con",verdadero)

//Cuando no se asigna ningun valor es de tipo undefined
let color
console.log(`Mi color favorito es ${color}`)