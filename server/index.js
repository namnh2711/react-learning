const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.write('Node on...\n');

    res.end();
});

server.listen(6789);