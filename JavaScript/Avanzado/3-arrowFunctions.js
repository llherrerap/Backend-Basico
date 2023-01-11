/*Arrow Functions.
Nueva forma de definir funciones anonimas que sean expresadas.
    -Estas funciones pueden ser escritas en una sola línea de código.
    -No es necesario escribir la palabra reservada function.
    -No es necesario escribir la palabra reservada return.
    -No necesitas escribir las llaves
*/

//Ejemplo funcion expresada

console.log("-----------Ejemplo función expresada----------------")

const saludar=function(){
    return "Hola!"
}
console.log(saludar())

/*Arrow functions
Su sintaxis es la siguiente:
    const nombreFuncion=(parametros)=>{
        //código función
    }
Cuando la función es de una linea se pueden omitir los corchetes
    const nombreFuncion=()=> //código función
*/

console.log("-----------Ejemplos arrow functions----------------")

const despedir=()=>{ 
    console.log("Adios!") 
}
despedir();

const recibir=()=> console.log("Recibido!");
recibir();

//Parametros dentro de los parentesis o se pueden dejar sin los parentesis si es un solo parametro

const bienvenida=(nombre)=> console.log(`Bienvenido(a) ${nombre}`);
bienvenida("Luna");

const despedida=nombre=> console.log(`Hasta luego ${nombre}`);
despedida("Luna");

//Tambien se evita poner return cuando es solo una linea
const sumar = (a,b) => a+b;
console.log(sumar(8,9));

console.log("-----------Arrow functions en ciclos----------------")

const numeros=[1,2,3,4,5,6]

//Para recorrer el anterior arreglo sin arrow functios se puede hacer de la siguiente manera

console.log("-----------Ejemplo sin Arrow functions---------------")

numeros.forEach(function(num, index){
    console.log(`El elemento ${num} esta en la posicion ${index}`)
})

//Lo anterior se puede transformar en una arrow function

console.log("-----------Ejemplo con Arrow functions---------------")

numeros.forEach((num, index)=>console.log(`El elemento ${num} esta en la posicion ${index}`))