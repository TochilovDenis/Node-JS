// подключение express
const express = require("express");
const fs = require("fs");
// создаем объект приложения
const app = express();

app.get("/", function(_, response){
      
    response.send("<h1>Главная страница</h1>");
});
app.use("/about", function(request, response){
      
    const id = request.query.id;
    const userName = request.query.name;
    const userAge = request.query.age;
    
    response.send(`<h1>Информация</h1><p>id: ${id}</p><p>name: ${userName}</p></p><p>age: ${userAge}</p>`);
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);