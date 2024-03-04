console.log("Начало программы");

async function Function() {                 //Объявим асинхронную функцию
    try {
        const result = await new Promise((resolve, reject) => {   //С помощью оператора "await" ожидается разрешение промисса
            setTimeout(() => {
                resolve ("Выполнено!");
                console.log("сработала пауза ");
            }, 2000);   // пауза в 2 секунды
        });
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
Function();

console.log("Будет пауза 2 секунды : ");
