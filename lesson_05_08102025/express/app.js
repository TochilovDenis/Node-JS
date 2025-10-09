// подключение express
const express = require("express");
const fs = require("fs");
// создаем объект приложения
const app = express();

//localhost:3000/aaa/bbb/ccc/eee/ggg/ttt/rrr/yyy
app.get("/aaa/bbb/ccc/eee/ggg/ttt/rrr/yyy", function (_, response) {
  response.redirect("../../../../../")
  //localhost:3000/aaa/bbb
});

//localhost:3000/aaa/bbb
app.get("/aaa/bbb", function (_, response) {
  response.redirect("../../ggg/ttt/rrr/yyy")
  //localhost:3000/ggg/ttt
});

//localhost:3000/ggg/ttt
app.get("/ggg/ttt/rrr/yyy", function (_, response) {
  response.redirect("./yyy/aaa/bbb/ccc")
  //localhost:3000/ggg/ttt/rrr/yyy/aaa/bbb/ccc
});

//localhost:3000/ggg/ttt/rrr/yyy/aaa/bbb/ccc
app.get("/ggg/ttt/rrr/yyy/aaa/bbb/ccc", function (_, response) {
  response.redirect("/")
  //localhost:3000/aaa/bbb/ccc
});

app.get("/", function (_, response) {
  response.send("<h1>Hello</h1>");
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);