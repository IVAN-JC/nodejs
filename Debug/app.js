const { Console } = require("console");

let arr = [
    {name : "ivan", age : "21", heiht: 83},
    {name : "Dmitriy", age : "21", heiht: 85},
    {name : "Andrey", age : "18", heiht: 75},
    {name : "Tyubic", age : "25", heiht: 50},
];
console.log("Исходный массив обЪектов :");
console.log(arr);
console.log("Осортируем массив : "); 
console.log(arr.sort((a,b) => a.heiht-b.heiht ));
console.log("Преобразовали массив в строку : ");
console.log(String(JSON.stringify(arr)));    // Воспользовались методом "String" и преобразовали массив данных в строку


