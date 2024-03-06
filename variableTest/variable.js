
let q = 42.1525;
let w = false;
let e = null;
let r;
let t = 5;
let Man = {
    name: "Ivan",
    age: 20,
    comment: "I have 900 score on chess.com"
}

let x = "5";
function myfunc() {
    return parseInt(x, 6);
}
console.log("Продемонстрировали работу операторов : "); 
console.log(q+t); 
console.log(q-t); 
console.log(t/q); 
console.log(q%t); 
console.log(q/e);    //Получим бесконечность   
console.log(q + "\n" + w + "\n" + e + "\n" + r + "\n" + Man.name + " " + Man.age + " " + Man.comment);
console.log ("мы перевели строку в число из шестиричной системы счисления благодаря функции parseInt и получили " + myfunc());
