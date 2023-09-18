const chalk = require("chalk");
const http = require("http");

const host = "localhost";
const port = 8000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  const respuesta = {
    Nombre: "Wilmer Chacon",
    Mensaje: "Hola, esta es mi practica de servidor con NodeJS",
  };

  res.end(JSON.stringify(respuesta, null, 2));
});
server.listen(port, () => {
  console.log(chalk.green(`Ruta del servidor: http://${host}:${port}`));
});
