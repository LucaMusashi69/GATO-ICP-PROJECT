const http = require('http');

// Función de manejo de solicitudes
const requestHandler = (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('¡Hola mundo desde Node.js!\n');
};

// Crear el servidor HTTP
const server = http.createServer(requestHandler);

// Escuchar en el puerto 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`ufff el Servidor se corriendo en http://localhost:${PORT}/`);
});


