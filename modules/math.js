function square(a){
    return a*a;
};      
 function cub(q) {
    return q*q*q;
};
function sum(b,d) {
    return b+d;
}

let arr = [
    {name : "ivan", age : "21", height: 83},
    {name : "Dmitriy", age : "21", height: 85},
    {name : "Andrey", age : "18", height: 75},
    {name : "Tyubic", age : "25", height: 50},
];

module.exports= {square, cub, sum, arr};