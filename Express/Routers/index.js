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


//Routers
const routerCursos = express.Router();
app.use('/api/cursos', routerCursos);
const routerBackend = express.Router();
routerCursos.use('/programacion-web-backend', routerBackend);
const routerFrontend = express.Router();
routerCursos.use('/programacion-web-frontend', routerFrontend);

//informacion de todos los cursos
routerCursos.get('/', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});
//informacion solo de los cursos de programacion backend
routerBackend.get('/', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacionWebBackend));
});
//informacion solo de los cursos de programacion frontend
routerFrontend.get('/', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacionWebFrontend));
});

//Parametros url
routerBackend.get('/:titulo', (req, res) => {//se utilizan : para crear parametros url
    const titulo = req.params.titulo;// se recomienda que sea el mismo nombre que el parametro que definio
    const cursoConcreto = infoCursos.programacionWebBackend.filter(curso => curso.titulo === titulo);//filtro de javascript
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



app.listen(config.PORT, config.HOST, function () {
    console.log(`El servidor se esta ejecutando en http://${config.HOST}:${config.PORT}`);
});