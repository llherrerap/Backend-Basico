//servidor
const config = require('./config.js');
const express = require('express');
const app = express();


//Middleware
//__dirname hace alucion a la ruta configurada de manera dinamica tomara la ruta index.html
app.use(express.static(__dirname + "/public"));


//Routing   
app.get('/cursos', (req, res) => {
    res.send("Cursos de programacion web");
});
//Middlware para buscaflores
app.use(express.static(__dirname + "/public/buscaflores"));
//Middleware para 404, cualquie ruta que no este definida lanzara a 404
app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/public/404.html")
});


app.listen(config.PORT, config.HOST, function () {
    console.log(`El servidor se esta ejecutando en http://${config.HOST}:${config.PORT}`);
});