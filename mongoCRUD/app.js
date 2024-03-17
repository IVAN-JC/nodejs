const MongoClient = require('mongodb').MongoClient;
 
MongoClient.connect("mongodb://localhost:27017/newdatabase", function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
  
});
const rectangle = { 
  length: 25, 
  width: 20, 
  area: function () { 
      return this.length * this.width 
  } 
} 
// Создание
const square = new Object(); 
square.side = 10; 
square.area = function () { 
  return this.side * this.side 
}; 
square.side = 20; 
console.log(rectangle, "area: " + rectangle.area()); 
console.log(square, "area: " + square.area());

//чтение
const { length } = rectangle 
console.log("Rectangle length: " + length); 
console.log("Rectangle width: " + rectangle['width']); 
console.log("Rectangle area: " + rectangle.area());

// Обновление
console.log("Исходный объект: " + rectangle.area()); 
//Обновленные данные 
rectangle.length = 50;              
rectangle['width'] = 40;           
console.log("Исходный объект: " + rectangle.area());

// Удаление
const obj = { 
  name: 'Alex', 
  age: 52, 
  city: 'Saint-Petersburg'
} 
console.log("Исходный объект: ", obj);  
const { age, ...newObj } = obj; 
console.log("Новый объект без возраста: ", newObj); 
delete obj.city; 
console.log("Исходный объект после удаления города: ", obj);
