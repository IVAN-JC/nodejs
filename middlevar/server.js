console.log("server is starting...");

const express = require('express');

const fs = require("fs");
 
let app = express();

app.listen(3000);

// с помощью объекта request получаем различную информацию о запросе и добавляем ее в файл server.log, используя модуль fs
app.use(function(request, response, next){
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const log = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} ${request.get("user-agent")}`;
    console.log(log);
    fs.readFile('server.log', (error, data) => {
        fs.writeFileSync("server.log", `${data} \n` + log);
     });
    next();

});

app.get("/", function(_, response){
    response.send("Hello");
});

//Добавили обработку ошибок
app.use((req, res) =>{
    res.status(404)
    console.log('ERROR');    
});