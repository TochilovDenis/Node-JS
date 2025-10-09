// подключение express
const express = require("express");
const fs = require("fs");
// создаем объект приложения
const app = express();

// обработка запроса по адресу /about
app.get("/about", function(_, response){
     
    response.send("<h1>О сайте</h1>");
});
 
// обработка запроса по адресу /contact
app.use("/contact", function(_, response){
     
    response.send("<h1>Контакты</h1>");
});
 
// обработка запроса к корню веб-сайта
app.get("/", function(_, response){
     
    response.send("<h1>Главная страница</h1>");
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);