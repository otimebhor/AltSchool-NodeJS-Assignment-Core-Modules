const http = require('http');

const HOSTNAME = 'localhost';
const PORT = 8000;

const server = http.createServer( function (req, res){
    res.writeHead(200);
    console.log('Hello World');
    res.write('Hello World');
    res.end();
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server started successfully at http://${HOSTNAME}:${PORT}`)
});