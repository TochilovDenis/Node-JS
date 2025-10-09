// подключение express
const express = require("express");
const fs = require("fs");
// создаем объект приложения
const app = express();

app.use(express.static(__dirname + "/public")); 
 

app.use("/", function(_, response){
    response.send("<h1>Главная страница</h1>");
});


// начинаем прослушивать подключения на 3000 порту
app.listen(3000);