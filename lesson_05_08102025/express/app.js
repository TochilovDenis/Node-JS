// подключение express
const express = require("express");

// создаем объект приложения
const app = express();

app.get("/name/:nam/pet/:pet.:age", function (request, response) {
    const pageName = request.params["name"];
    const pagePet = request.params["pet"];
    const pageAge = request.params["age"];
     response.send(`Имя:${pageName} Питомец:${pagePet}.${pageAge}`);
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);