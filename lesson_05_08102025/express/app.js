// подключение express
const express = require("express");

// создаем объект приложения
const app = express();

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
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);