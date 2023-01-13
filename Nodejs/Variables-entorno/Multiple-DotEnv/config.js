// config.js
const dotenv = require('dotenv');
const path = require('path'); // el objecto path permitira cargar el archivo .env que necesitemos de acuerdo al entorno deseado.

dotenv.config({
  path: path.resolve(__dirname, process.env.NODE_ENV + '.env')
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'desarrollo',
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 3000
}