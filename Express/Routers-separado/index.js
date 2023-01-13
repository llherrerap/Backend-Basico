//servidor
const config = require('./config.js');
const express = require('express');
const app = express();

//Routing  
app.get('/', (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send("<h1>Hola mundo!</h1>");
});


//Routers
const routerCursos = require('./Routers/cursos');
const routerBackend = require('./Routers/programacionBackend');
const routerFrontend = require('./Routers/programacionFrontend');
app.use('/api/cursos', routerCursos);
routerCursos.use('/programacion-web-backend', routerBackend);
routerCursos.use('/programacion-web-frontend', routerFrontend);

app.listen(config.PORT, config.HOST, function () {
    console.log(`El servidor se esta ejecutando en http://${config.HOST}:${config.PORT}`);
});