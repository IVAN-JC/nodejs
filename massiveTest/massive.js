
let arr = [
    {name : "ivan", age : "21", heiht: 83},
    {name : "Dmitriy", age : "21", heiht: 85},
    {name : "Andrey", age : "18", heiht: 75},
    {name : "Tyubic", age : "25", heiht: 50},
];

console.log("Исходный массив обЪектов :");
console.log(arr);

//let str = arr.join(",");
//console.log(str);
//console.log(String (arr));    // Воспользовались методом "String" и преобразовали массив данных в строку
/* Не получилось преобразовать массив объектов в строку 
в интернете к сожалению не нашел решение проблемы, только если писать какую-либо функцию
*/
let resultOne = arr.find(item => item.age==="18"); 
console.log("Выполнили поиск нашли Андрюшу : "); 
console.log(resultOne);    //Продемонстрировали поиск в массиве объектов с определенным условием

let arrOne = arr.concat({name : "Stas", age : "20", heiht: 150});
console.log("Новый, перевернутый, дополненный массив : ")
console.log(arrOne.reverse());  // Использовав метод "concat" создали новый массив и дополнили его еще одним объектом

//Вернем массив из всех элементов, которые удовлетворяют условию "height > 75"
let filterarr = arrOne.filter (function(item, index, array) {
    return item.heiht > 75;
});
console.log("Условие выполнено, нашли трёх тяжиков : ")
console.log(filterarr);

