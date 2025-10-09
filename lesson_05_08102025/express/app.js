// подключение express
const express = require("express");

// создаем объект приложения
const app = express();

//1 параметры маршрута получить из запроса
app.get("/name/:nam/pet/:pet.:age", function (request, response) {
    const pageName = request.params["name"];
    const pagePet = request.params["pet"];
    const pageAge = request.params["age"];
    response.send(`Имя:${pageName} Питомец:${pagePet}.${pageAge}`);
}); //localhost:3000/name/gera/pet/murka.25

//2 middleware и методы use получить в глобальные объекты параметры маршрута и параметры строки запроса
app.use("/name/:name/pet/:pet.:age", function (request, response,next) {
  console.log("Middleware:", request.params, request.query);
  pageName = request.params["name"];
  pagePet = request.params["pet"];
  pageAge = request.params["age"];
  pageCity = request.query.city || "none";
  pageObl = request.query.obl || "none";
  next()
});

app.get("/name/:name/pet/:pet.:age", function (_, response) {
  response.send(`Запрошенный данные: ${pageName}, ${pageAge}, ${pagePet}, ${pageCity}, ${pageObl}`);
}); //localhost:3000/name/gera/pet/murka.25?city=cher&obl=vol

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);