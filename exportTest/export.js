let square = (a) => a*a;       //Создали стрелочную функцию 
let q = 5;
let arr = [
    {name : "ivan", age : "21", heiht: 83},
    {name : "Dmitriy", age : "21", heiht: 85},
    {name : "Andrey", age : "18", heiht: 75},
    {name : "Tyubic", age : "25", heiht: 50},
];
 function otbor(arr) {           //Создали функцию, которая фильтрует массив   
    let filterarr = arr.filter (function(item, index, array) {
        return item.heiht > 75;
    });
    return filterarr;
}
export {square, q, arr, otbor};
