const http = require('http');
const server = http.createServer((req, res) => {
    
    if (req.method === 'GET' && req.url ==='/health'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ status: 'ok' }));
    }else if (req.method === 'GET' && req.url ==='/builds'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
        res.end(JSON.stringify([
            { id: 1, name: 'keeb', status: 'chillin' },
            { id: 2, name: 'chance', status: 'ok' }]));
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});
server.listen(3000, () => {
    console.log('Server is active');
});