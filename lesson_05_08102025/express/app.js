// подключение express
const express = require("express");
const fs = require("fs");
// создаем объект приложения
const app = express();

app.get("/aaa/bbb/ccc/eee/ggg/ttt/rrr/yyy",function (_, response) {
  response.redirect("..")
});


app.get("/aaa/bbb", function (_, response) {
 response.redirect("..")
});


app.get("/ggg/ttt/rrr/yyy", function (_, response) {
 response.redirect("..")
});
 
 
app.get("/ggg/ttt/rrr/yyy/aaa/bbb/ccc", function (_, response) {
 response.redirect("..")
});
 
app.get("/", function(_, response){
     response.send(`Запрошенный данные: ${name},${age},${pet},${city},${obl}`);
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);