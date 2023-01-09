/* Operador de asignación.
El operador de asignación se representa con el simbolo =. Se utiliza para asignar valores a constantes y variables.
*/

//Asignación del valor a las variables x y z
console.log("----------------------Asignación---------------------------")
let x=12
let z=16

console.log(`El valor de x es ${x} y el valor de z es ${z}`)

/* Operadores de incremento y decremento.
Operadores que se utilizan comúmente para incrementar o decrementar una variable en una unidad.
    -Incremento ++
    -Decremento --
*/

console.log("-------------------Incremento y decremento---------------------")
x++ //Incremento en una unidad al valor de x
z-- //Decremento en una unidad al valor de z
console.log(`El valor de x incrementado es ${x} y de z con decremento es ${z}`)

/* Operadores lógicos.
Los operadores lógicos se se utilizan para la toma de decisiones en los algoritmos de acuerdo a ciertas condiciones que se le den. El valor que devuelven estos operadores siempre es booleano.
    -Negación ! 
    -AND &&
    -OR ||
*/

console.log("------------------Operadores lógicos-----------------------")

let valorUno=true
let valorDos=false

//Negación: devuelve el valor contrario de una variable booleana.

console.log("Negación.", !valorDos)

//AND. Devuelve verdadero siempre y cuando las dos variables se cumplan (true).

console.log("AND.", (valorUno && valorDos))

//OR. Devuelve verdadero siempre que una variable se cumpla (true).

console.log("OR.", (valorUno || valorDos))
/* Operadores mátematicos.
Permiten realizar operaciones matemáticas. Los operadores que se utilizan más comúnmente son: 
    -Suma (+)
    -Resta (-)
    -Multiplicación (*) 
    -División (/)
*/

console.log("-----------------Operadores mátematicos----------------------")

let a=9,
    b=56

//Se pueden declarar varias variables utilizando una sola vez la palabra reservada let o var, separandolos por comas

let suma = a+b, 
    resta=a-b,
    multiplicacion=a*b,
    division=a/b

console.log(`El valor de la suma es ${suma}
El valor de la resta es ${resta}
El valor de la multipliacion es ${multiplicacion}
El valor de la división es ${division}`)

/* Operadores de comparación.
Son los operadores que comparan el valor de variables numéricas para devolver un valor booleano. Estos operadores son los mismos que se ven comúnmente en matemáticas:
    -Mayor que (>)
    -Menor que (<)
    -Mayor o igual (>=)
    -Menor o igual (<=)
    -Igual que (==)
    -Distinto de (!=)
*/

console.log("-----------------Operadores comparación----------------------")

let mayor=a>b,
    menor=a<b,
    mayorIgual=a>=b,
    menorIgual=a<=b,
    igual=a==b,
    distinto=a!=b

console.log(`La variable ${a} es mayor que ${b}: ${mayor}
La variable ${a} es menor que ${b}: ${menor}
La variable ${a} es mayor o igual que ${b}: ${mayorIgual}
La variable ${a} es menor o igual que ${b}: ${menorIgual}
La variable ${a} es igual que ${b}: ${igual}
La variable ${a} es distinta que ${b}: ${distinto}`)