//Se importa el curso.json
const curso = require("./curso.json");

console.log("------Importacion JSON---------");
console.log(curso);
console.log(typeof curso);//javascript convierte json como objeto 
console.log(curso.nombre);//puede acceder a el como si fuera un objeto

//De JavaScript a Json
console.log("------JavaScript a Json---------");
let infoCurso = {
    "nombre": "Curso de programacion web Backend",
    "numEstudiantes": 60,
    "descripcion": "Primer jason para el curso de Backend",
    "temas": [
        "javascript",
        "nodejs",
        "mongoDB"
    ]
}
console.log(typeof infoCurso);//validar que es un objeto de javaScript

//Objeto--> Cadena de caracteres
console.log("------cadena de caracteres en formato JSON---------");
let infoCursoJSON = JSON.stringify(infoCurso);
console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

console.log("------cadena de caracteres en formato JSON--------");
//Cadena de caracteres --> Objeto
let inforCursoObjeto = JSON.parse(infoCursoJSON);
console.log(inforCursoObjeto);
console.log(typeof inforCursoObjeto);