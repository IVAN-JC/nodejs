const http = require('http');
const fs = require('fs');
const path = require('path');

function onRequest(req, res) {
    switch (req.url) {
        case "/style.css" :
            res.writeHead(200, {"Content-Type": "text/css"});
            fs.createReadStream(path.resolve(__dirname, 'public/style.css')).pipe(res)
            break;
        case "/camel.png" :
            res.writeHead(200, {"Content-Type": "image/png"});
            fs.createReadStream(path.resolve(__dirname, 'public/camel.png')).pipe(res)  
            break;  
        default :    
            res.writeHead(200, {"Content-Type": "text/html"});
            fs.createReadStream(path.resolve(__dirname, 'public/index.html')).pipe(res)
    };
}

http.createServer(onRequest).listen(3000);
