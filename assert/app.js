function divide(a, b) {
    console.assert(b !== 0, "Ошибка : нельзя делить на ноль");
    return a / b;
}

console.log(divide(10, 2));
// Вывод: утверждение не выполнено: ошибка: невозможно разделить на ноль
console.log(divide(10, 0));