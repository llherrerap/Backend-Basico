/*Arreglos (Arrays)
Son una colección de elementos o cosas. se definen con corchetes [] o creando una instancia de Array*/

console.log("-----------------Creación de arreglos----------------------")

const a=[] //Arreglo vacio
const b=[1,2,3,4]//Arreglo con 4 elementos
const c=[1,true,"Hola",["A","B","C"]] //Arreglo mixto
const d= new Array('a', 'b', 'c')//Arreglo creando con una instancia de Array

console.log(a)
console.log(b)
console.log(c)
console.log(d)

/*Para acceder a un elemento de un arreglo se puede hacer de la siguiente manera:
nombreArreglo[posicionElemento]
La posicion del elemento siempre comienza desde 0*/

console.log("-----------------Acceder a un arreglo----------------------")

console.log(b[2])//Se accede a la posicion del elemento con corchetes y el numero
console.log(`La segunda letra del abecedario es ${d[1]}`)
console.log(c[3][1])//Así se accede al elemento de un arreglo dentro de otro arreglo

/*Para recorrer todos los elementos de un arreglo se puede hacer con el ciclo for*/

console.log("-----------------Recorrer un arreglo----------------------")

let numeros=[10,20,30,40,50,60,70,80,90]

//for

console.log("-----------------For----------------------")

/*length es una propiedad de los arreglos con la que se puede obtener la cantidad de elementos que tiene un arreglo. Se puede usar de la siguinete manera:
nombreArreglo.length*/

for (let i = 0; i < numeros.length; i++) {
    console.log(`El for va por el ${numeros[i]}`)
}

//forEach

console.log("-----------------ForEach----------------------")

numeros.forEach(numero => { //imprimir los elementos de un array
    console.log(`El forEach of va por el ${numero}`)
});

//for of

console.log("-----------------For Of---------------------")

for (const item of numeros) {
    console.log(`El for of va por el ${item}`)
}