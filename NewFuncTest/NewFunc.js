function phoneFunc(phone) {
    phone.model = "Iphone"; 
    return phone.model + " " + phone.ram + " " + phone.number;
}

let myphone = {model: "Ксиоми", ram: "6", number: "15"};
//Написал функцию с аргументами, возвращающую значения
console.log(phoneFunc(myphone));

//Простое функциональное выражение
let sum = function(a, b) {
    return a + b;
};
let x = sum(50000,50000);
console.log(x + " " + "р.");
//Использовали многострочную стрелочную функцию
let ask = (yes, no) => {
    if (true) yes()
    else no();
  }
  
  ask(
    () =>  console.log("Вы согласились купить айфон в кредит."),
    () =>  console.log("Поздравляем, Вы адекватный человек.")
  );