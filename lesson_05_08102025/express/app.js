// подключение express
const express = require("express");

// создаем объект приложения
const app = express();

pageName = ""; pagePet = ""; pageAge = ""; pageCity = ""; pageObl = "";
app.get("/name/:name/pet/:pet.:age", function (request, response) {
  console.log(1)
  pageName = request.params["name"];
  pagePet = request.params["pet"];
  pageAge = request.params["age"];
  pageCity = request.query.city;
  pageObl = request.query.obl;
  console.log(2)
  response.redirect("/")
});

app.get("/", function (_, response) {
  console.log(3)
  response.send(`Запрошенный данные: ${pageName},${pageAge},${pagePet},${pageCity},${pageObl}`);
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);