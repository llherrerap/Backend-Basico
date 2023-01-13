const http = require("http");

const PUERTO = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Hola mundo!</h1>");
});

server.listen(PUERTO, () => {
    console.log(`El servidor esta corriendo en el puerto ${PUERTO}`);
});