let http = require('http');

http.createServer(function (req,res){
    if((req.method === 'GET') && (req.url === '/test')) {
        res.write('GET /test');
    } else {
        res.write('Hello World!');
    }

    res.statusCode = 200;
    res.end();
}).listen(8080);