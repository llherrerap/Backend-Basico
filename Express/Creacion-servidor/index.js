//servidor
const config = require('./config.js');
const express = require('express');
const app = express();

const {infoCursos} = require('./cursos.js');//sintaxis de desestructuracion

//Routing  
app.get('/', (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send("<h1>Hola mundo!</h1>");
}); 
//informacion de todos los cursos
app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});
//informacion solo de los cursos de programacion
app.get('/api/cursos/programacion-web-backend', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacionWebBackend));
});
//informacion solo de los cursos de programacion
app.get('/api/cursos/programacion-web-frontend', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacionWebFrontend));
});

app.listen(config.PORT, config.HOST, function () {
    console.log(`El servidor se esta ejecutando en http://${config.HOST}:${config.PORT}`);
});