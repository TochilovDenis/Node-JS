const express = require("express"); // получаем модуль express
// создаем приложение express
const app = express();
 
// устанавливаем обработчик для маршрута "/"
app.get("/", function(_, response){
 
    response.end("Hello Denis!");
});
// начинаем прослушивание подключений на 3000 порту
app.listen(3000, function(){ console.log("Сервер начал принимать запросы по адресу http://localhost:3000")});