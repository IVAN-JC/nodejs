const fs = require('fs');

fs.readFile('./appTest/app.txt', (error, data) => {
    // Вывели данные из файла на консоль
    console.log(data.toString());
    fs.mkdirSync('./appTest/files', () => {} );    //Создали папку
    fs.writeFileSync('./appTest/files/app2.txt', `${data} \n Update file`, () => { });   //Создали файл в созданной папке и записали в него строки

    //Создали и записали данные в новый файл и добавили новую строку
    // При повторном запуске новый файл не создастся
    fs.writeFile('./appTest/app1.txt', `${data} \n Update file`, () => {    
    });
});

setTimeout(() => {
    if (fs.existsSync('./appTest/files')) {   // Проверка на наличие папки
    fs.rmdir('./appTest/files', () => {});   // Удаление непосредственно самой папки с задержкой в 4 секунды
    }
}, 4000);

