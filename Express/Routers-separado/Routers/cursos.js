const express = require('express');
const { infoCursos } = require("../Datos/cursos.js");

const routerCursos = express.Router();

//informacion de todos los cursos
routerCursos.get('/', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});

module.exports = routerCursos;