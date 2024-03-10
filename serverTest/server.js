console.log("server is starting...");

let express = require('express');

let app = express();
let server = app.listen(3000, listening);
// Добавим функцию прослушивания
function listening() {
    console.log("Listening...");
}

app.use(express.static('website'));
let arr = [
    {name : "ivan", age : "21", heiht: 83},
    {name : "Dmitriy", age : "21", heiht: 85},
    {name : "Andrey", age : "18", heiht: 75},
    {name : "Tyubic", age : "25", heiht: 50},
];

// Осуществили запрос с параметрами
app.get('/api/sum/:a&:b', (req, res) => {
    console.log(5+8);
    res.writeHead(200, {'Content-Type' : 'Text/Plain' });
    res.write(parseInt(req.params.a) + parseInt(req.params.b) + "=" + "a+b");
    res.end();
});

app.get('/api/razn', (req, res) => {
    console.log(5+8);
    res.writeHead(200, {'Content-Type' : 'Text/Plain' });
    res.write(9-2 + "=" + "9-2");
    res.end();
});
app.get('/api/massive', (req, res) => {
    console.log(5+8);
    res.writeHead(200, {'Content-Type' : 'Text/Plain' });
    res.write(String(JSON.stringify(arr)));
    res.end();
});



