var http = require("http");
function onRequest(request, response){
    response.writeHead(200, {'Content-Type' : 'Text/Plain' });
    response.write('Hello Leti');
    response.end();

}
http.createServer(onRequest).listen(8000);