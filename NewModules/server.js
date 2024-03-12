let http = require("http");
const path = require('path'); 
const fs = require("fs");
function onRequest(request, response){
    response.writeHead(200, {'Content-Type' : 'Text/Plain' });
    response.write('Hello Leti');
    // использовали встроенный модуль 'fs'
    fs.readFile("hello.txt", function(error,data){  

        if(error) {  // если возникла ошибка
            return console.log(error);
        }
        console.log(data.toString());   // выводим считанные данные
    });
    console.log("Асинхронное чтение файлов");
    response.end();

}
http.createServer(onRequest).listen(8000);
