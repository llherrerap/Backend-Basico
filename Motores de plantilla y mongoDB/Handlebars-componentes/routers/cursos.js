var express = require('express');
var routerCursos = express.Router();

/* GET pagina de cursos. */
//Utilizacion de motores de plantillas para codigo dinamico
routerCursos.get("/", (req, res) => {
  const urls = [
      { titulo: "Desarrollo web backend", descripcion: "Curso de desarrollo web en backend", direccion: "cursos/backend" },
      { titulo: "Desarrollo web frontend", descripcion: "Curso de desarrollo web en frontend", direccion: "cursos/frontend" },
      { titulo: "Desarrollo web fullstack", descripcion: "Curso de desarrollo web en fullstack", direccion: "cursos/fullstack" },
  ]
  res.render("cursos", { nombre:"Cursos de programacion web", urls: urls });
});

module.exports = routerCursos;
