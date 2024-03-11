
let express = require('express');
 let app = express();
 let server = app.listen(4000, listening);
// Добавим функцию прослушивания
function listening() {
    console.log("Listening...");
}
const path = require('path');   // используем библиотеку
app.get('/test', (req, res) => {
    const filePath = path.join(__dirname, 'index/index.html');
    res.sendFile(filePath);
});