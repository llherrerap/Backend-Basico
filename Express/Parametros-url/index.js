//servidor
const config = require('./config.js');
const express = require('express');
const app = express();

const { infoCursos } = require('./cursos.js');//sintaxis de desestructuracion

//Routing  
app.get('/', (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send("<h1>Hola mundo!</h1>");
});
//informacion de todos los cursos
app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});
//informacion solo de los cursos de programacion backend
app.get('/api/cursos/programacion-web-backend', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacionWebBackend));
});
//informacion solo de los cursos de programacion frontend
app.get('/api/cursos/programacion-web-frontend', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacionWebFrontend));
});

//Parametros url
app.get('/api/cursos/programacion-web-backend/:titulo', (req, res) => {//se utilizan : para crear parametros url
    const titulo = req.params.titulo;// se recomienda que sea el mismo nombre que el parametro que definio
    const cursoConcreto = infoCursos.programacionWebBackend.filter(curso => curso.titulo === titulo);//filtro de javascript
    if (cursoConcreto.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${titulo}`);//codigo de estado 404(No se encontraron elementos), se debe retornar debido a que continuaria el codigo
    }
    res.send(JSON.stringify(cursoConcreto));
});


app.listen(config.PORT, config.HOST, function () {
    console.log(`El servidor se esta ejecutando en http://${config.HOST}:${config.PORT}`);
});