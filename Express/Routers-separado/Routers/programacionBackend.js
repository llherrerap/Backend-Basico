const express = require('express');

const { programacionWebBackend } = require("../Datos/cursos.js").infoCursos;

const routerBackend = express.Router();

//informacion solo de los cursos de programacion backend
routerBackend.get('/', (req, res) => {
    res.send(JSON.stringify(programacionWebBackend));
});

//Parametros url
routerBackend.get('/:titulo', (req, res) => {//se utilizan : para crear parametros url
    const titulo = req.params.titulo;// se recomienda que sea el mismo nombre que el parametro que definio
    const cursoConcreto = programacionWebBackend.filter(curso => curso.titulo === titulo);//filtro de javascript
    if (cursoConcreto.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${titulo}`);//codigo de estado 404(No se encontraron elementos), se debe retornar debido a que continuaria el codigo
    }

    //Parametros query (?ordenar=nivel)
    //Como esta ordenado se ordenara al reves
    if (req.query.ordenar === 'nivel') {
        return res.send(JSON.stringify(cursoConcreto.sort((a, b) => (b.nivel > a.nivel) ? 1 : (b.nivel < a.nivel) ? -1 : 0)));
    }
    //Parametros query (?ordenar=id)
    if (req.query.ordenar === 'id') {
        return res.send(JSON.stringify(cursoConcreto.sort((a, b) => b.id - a.id)));
    }

    res.send(JSON.stringify(cursoConcreto));
});

module.exports = routerBackend;