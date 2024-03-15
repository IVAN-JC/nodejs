const express = require("express");
 
const app = express();
 //Чтобы установить Handlebars в качестве движка
app.set("view engine", "hbs");
 //Передадим массив данных
app.use("/contact", function(_, response){
     
    response.render("contact.hbs", {
        title: "Мои контакты",
        emailsVisible: true,
        emails: ["ohrimenkoivan57@gmail.com", "ohrimenko030@mail.com"],
        phone: "8(981)899-93-00"
    });
});
app.use("/", function(_, response){
     
    response.send("Главная страница");
});
app.listen(3000);