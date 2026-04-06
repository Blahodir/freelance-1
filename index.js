const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('FjordStep API is Running v1.0\n');
});
server.listen(3000, () => console.log('Server on port 3000'));
