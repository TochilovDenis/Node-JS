// подключение express
const express = require("express");
const fs = require("fs");
// создаем объект приложения
const app = express();
app.use(function(request, response, next){
     
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} ${request.get("user-agent")}`;
    console.log(data);
    fs.appendFile("server.log", data + "\n", function(error){
        if(error) return console.log(error); // если возникла ошибка    
        console.log("Запись файла завершена");
    });
    next();
});

app.get("/", function(_, response){ 
    console.log("Route /");
    response.send("Hello");
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);