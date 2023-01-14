//servidor
const config = require('./config.js');
const express = require('express');
const { create } = require("express-handlebars");//importacion de handelbars

const app = express();

//Routers
const routerHome = require('./Routers/home');
const routerAuth = require('./Routers/autentificacion');
const routerCursos = require('./Routers/cursos');


const hbs = create({//recibe las configuraciones de express
    extname: ".hbs",//facilita el uso de la extension, dandole notacion .hbs
    partialsDir: ["views/components"],//componetes
});

app.engine(".hbs", hbs.engine);//define motor de plantilla
app.set("view engine", ".hbs");//define la extension
app.set("views", "./views");//define la ubicacion del motor de plantilla

//Routing
app.use('/', routerHome);
app.use('/login', routerAuth);
app.use('/cursos', routerCursos);
//Middleware
//__dirname hace alucion a la ruta configurada de manera dinamica tomara la ruta index.html
app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/public/404.html")
});


app.listen(config.PORT, config.HOST, function () {
    console.log(`El servidor se esta ejecutando en http://${config.HOST}:${config.PORT}`);
});