//servidor
const config = require('./config.js');
const express = require('express');
const { create } = require("express-handlebars");//importacion de handelbars

const app = express();


const hbs = create({//recibe las configuraciones de express
    extname: ".hbs",//facilita el uso de la extension, dandole notacion .hbs
});

app.engine(".hbs", hbs.engine);//define motor de plantilla
app.set("view engine", ".hbs");//define la extension
app.set("views", "./views");//define la ubicacion del motor de plantilla

//Routing 
app.get("/", (req, res) => {
    res.render("home", { titulo: "Página de inicio" });
});
app.get("/login", (req, res) => {
    res.render("login");
});
app.get('/cursos', (req, res) => {
    res.send("Cursos de programacion web");//no se renderiza
});
//Utilizacion de motores de plantillas para codigo dinamico
app.get("/cartas", (req, res) => {
    const urls = [
        { titulo: "Desarrollo web backend", descripcion: "Curso de desarrollo web en backend", direccion: "cartas/backend" },
        { titulo: "Desarrollo web frontend", descripcion: "Curso de desarrollo web en frontend", direccion: "cartas/frontend" },
        { titulo: "Desarrollo web fullstack", descripcion: "Curso de desarrollo web en fullstack", direccion: "cartas/fullstack" },
    ]
    res.render("cartas", { nombre:"Cursos de programacion web", urls: urls });
});

//Middleware
//__dirname hace alucion a la ruta configurada de manera dinamica tomara la ruta index.html
app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/public/404.html")
});


app.listen(config.PORT, config.HOST, function () {
    console.log(`El servidor se esta ejecutando en http://${config.HOST}:${config.PORT}`);
});