//Objeto con informacion de los cursos
//simulacion de una base de datos
let infoCursos = {
    programacionWebBackend: [
        {
            if: 1,
            titulo: "javascript",
            descripcion: "Curso de javascript",
            nivel: "basico"
        },
        {
            if: 2,
            titulo: "javascript",
            descripcion: "Curso de javascript",
            nivel: "intermedio"
        },
        {
            if: 3,
            titulo: "nodejs",
            descripcion: "Curso de nodejs",
            nivel: "basico"
        },
        {
            if: 4,
            titulo: "nodejs",
            descripcion: "Curso de nodejs",
            nivel: "intermedio"
        }
    ],
    programacionWebFrontend: [
        {
            if: 1,
            titulo: "css",
            descripcion: "Curso de css",
            nivel: "basico"
        },
        {
            if: 2,
            titulo: "css",
            descripcion: "Curso de css",
            nivel: "intermedio"
        },
        {
            if: 3,
            titulo: "react",
            descripcion: "Curso de react",
            nivel: "basico"
        },
        {
            if: 4,
            titulo: "react",
            descripcion: "Curso de react",
            nivel: "intermedio"
        }
    ]
}

module.exports.infoCursos = infoCursos; //exportacion de los cursos