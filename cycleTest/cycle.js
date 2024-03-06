function getDayName(day){
    day = day - 1;                 //Отнимаем единицу от первого дня т. к. массив нумеруется с 0
    let days = [
        "Mon",
        "Tues",
        "Wend",
        "Thurs",
        "Fri",
        "Sat",
        "Sun"
    ];
    if(days[day]){
        return days[day];
    } else {
        throw "DayNo_idi_rabotay";
    }
}
for(let i = 1; i<=8; i++){
    try {
        dayName = getDayName(i);      //Вызываем функцию с некорректным аргументом
    } catch(error){
        dayName = "unknown";
        console.log(error)
    }
    console.log (dayName);
}