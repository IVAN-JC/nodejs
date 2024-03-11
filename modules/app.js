const {square, cub, sum, arr} = require('./math.js');

console.log(square(5) + " " + cub(3) + " " + sum(8,5));
let sumheight = 0;
for(let i=0; i<arr.length; i++){
    sumheight = arr[i].height+sumheight;
   
}
console.log("Сложим вес людей :" + sumheight);