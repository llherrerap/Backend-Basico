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
    -AppendChild()
    -document.write()
    -document.createElement()
    -insertAdjacentHTML()
    -insertAdjacentElement()
    -insertAdjacentText() */

const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaptionText = document.createTextNode("Animals"),
  $imagenes = document.querySelector(".imagenes"),
  $figure2 = document.createElement("figure");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figure.appendChild($img);
$imagenes.appendChild($figure);

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`;
$figure2.classList.add("card");

$imagenes.appendChild($figure2);

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
  $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);

//Modificando elementos.

const $selectorImagenes = document.querySelector(".imagenes"),
  $nuevaImagen = document.createElement("figure");

let $contenCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption></figcaption>
`;
$nuevaImagen.classList.add("imagen");

$nuevaImagen.insertAdjacentHTML("afterbegin", $contenCard);
$selectorImagenes.insertAdjacentElement("beforeend", $nuevaImagen);
$nuevaImagen.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");