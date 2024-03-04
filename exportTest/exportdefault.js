let cub = (a) => a*a*a;       //Создали стрелочную функцию 
let w = 5;
let arrOne = [
    {name : "ivan", age : "21", heiht: 83},
    {name : "Dmitriy", age : "21", heiht: 85},
    {name : "Andrey", age : "18", heiht: 75},
    {name : "Tyubic", age : "25", heiht: 50},
];
 function otbor1(arrOne) {           //Создали функцию, которая фильтрует массив   
    let filterarr1 = arrOne.filter (function(item, index, array) {
        return item.heiht > 75;
    });
    return filterarr1;
}
export default {arrOne,cub, w, otbor1};
    