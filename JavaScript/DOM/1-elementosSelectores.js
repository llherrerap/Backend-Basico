/*Elementos
Los elementos hacen referencia a los elementos del documento HTML*/

//Devulve una coleccion de elementos que coincidan con el palametro

console.log("-----------Elementos----------------")

console.log(document.getElementsByTagName("li")); //Devuelve por nombre de etiqueta HTML
console.log(document.getElementsByClassName("imagen")); //Devuelve por nombre de clase

//Actualmente unicamente se utiliza el metodo .getElementById(), los metodos .getElementsByTagName() y .getElementsByClassName() fueron remplazados por los selectores.
console.log(document.getElementById("menu")); //Devuelve por nombre de id

/*Selectores
Se pueden utilizar para encontrar uno o más elementos. 
    -# se utiliza para buscar por id
    -. se utiliza para buscar por clase
    */

console.log("-----------Selectores----------------")

console.log(document.querySelector("#menu")); //Selecciona por id
//querySelector() trae unicamente el primer elemento que encuentre
console.log(document.querySelector("a"));
//Para traer todos los selectores que coincidan se utiliza querySelectorAll()
console.log(document.querySelectorAll("a"));
//Al devolver los elementos en forma de lista, se pueden usar las propiedades y metodos de los arreglos

console.log("------Propiedades selectores---------")

// length devuelve la cantidad de elementos.
console.log(`Hay ${document.querySelectorAll("a").length} enlaces en la pagina. Los enlaces son:`); 
//Tambien se puede recorrer la lista
document.querySelectorAll("a").forEach((link) => console.log(link));