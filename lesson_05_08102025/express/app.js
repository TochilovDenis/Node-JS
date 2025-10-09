// подключение express
const express = require("express");
const fs = require("fs");
// создаем объект приложения
const app = express();

app.use("/index",function (_, response) {
  response.redirect("https://metanit.com")
});

app.use("/home/bar",function (_, response) {
  response.redirect("about")
});

app.use("/home/about", function (_, response) {
  response.send("<h1>About</h1>");
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);