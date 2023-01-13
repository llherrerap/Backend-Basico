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

/*Guardar elementos del DOM en variables / constantes.
Para hacer más facil el desarrollo se pueden guardar elementos del dom en variables y constantes.
Se recomienda la siguiente nomenclatura: 
const / let $nombre=document.querySelector()*/

const $dom=document.getElementById("dom")
let textDom=`
Con DOM, podemos acceder y manipular fácilmente etiquetas, ID, clases, atributos o elementos de HTML utilizando comandos o métodos proporcionados por el objeto del documento.`

$dom.textContent = textDom; //Propiedad que permite agregar contenido a un elemento, no es necesario agregar la etiqueta.

const $domArbol=document.getElementById("dom-arbol")
let textArbol=`
<p>
El DOM representa el documento HTML como un árbol de tres nodos.
</p>`

$domArbol.innerHTML = textArbol; //Propiedad que permite remplazar el contenido que tenga la etiqueta o selector por contenido HTML.

//Tambien existe la propiedad outerHTML que permite remplazar el contenido y la etiqueta por el contenido HTML que se le indique.

/*Metodos
    -setAttribute()
    -appendChild()
    -document.write()
    -document.createElement() */

const $figure = document.createElement("figure"), //Método que crea un elemento HTML
  $img = document.createElement("img"), //Método que crea un elemento HTML de tipo img
  $imagenes = document.querySelector(".imagenes"), //Selector de la clase imagenes en HTML
  $figure2 = document.createElement("figure"); //Crea otro elemento figure

$img.setAttribute("src", "https://placeimg.com/200/200/animals"); //Metodo que accede a los Atributos de los elementos
$img.setAttribute("alt", "Animals");

$figure.appendChild($img); //Para incorporar elementos hijos a elementos padres.
//elementoPadre.appendChild(elementoHijo)
$imagenes.appendChild($figure);

//Otra forma de crear un elemento puede ser utilizando la propiedad innerHTML y agregar el nodo
$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>Personas</figcaption>
`;

$imagenes.appendChild($figure2);//Al elemento padre imagenes se le agrega el elemento hijo nuevo figure2

//Creando elementos 

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul"); //Creando el elemento ul para listas

//document.write() permite escribir una cadena de texto dentro del HTML
document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul); //Agregando al elemento body el elemento ul

estaciones.forEach((elemento) => { //Por cada elemento del arreglo agregar un li para agregarlo dentro del ul
  const $li = document.createElement("li");
  $li.textContent = elemento; //el contenido de texto de la etiqueta li va a ser el elemento del arreglo
  $ul.appendChild($li); //Agregar los li al elemento ul
});

/*Métodos que permiten insertar contenido de acuerdo a una posicion
  -insertAdjacentHTML(posicion,html)
  -insertAdjacentElement(posicion,elemento)
  -insertAdjacentText(posicion,texto)
Las posiciones son:
  -beforebegin(nodo anterior)
  -afterbegin(primer nodo)
  -beforeend(ultimo nodo)
  -afterend(nodo siguiente)
*/

const $selectorImagenes = document.querySelector(".imagenes"),
  $nuevaImagen = document.createElement("figure");

let $contenidoHTML = `
  <img src="https://placeimg.com/200/200/any" alt="any">
  <figcaption></figcaption>
`;
$nuevaImagen.classList.add("imagen");

//Método que inserta contenido HTML dependiendo una posicion
$nuevaImagen.insertAdjacentHTML("afterbegin", $contenidoHTML);
//Método que inserta un elemento dependiendo una posicion
$selectorImagenes.insertAdjacentElement("beforeend", $nuevaImagen);
//Método que inserta texto dependiendo una posicion
$nuevaImagen.querySelector("figcaption").insertAdjacentText("afterbegin", "Fig. Descripción");