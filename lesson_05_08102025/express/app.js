// подключение express
const express = require("express");
// создаем объект приложения
const app = express();
app.use(function(_, _, next){
     
    console.log("Middleware 1");
    next();
});
app.use(function(_, _, next){
     
    console.log("Middleware 2");
    next();
});
 
app.get("/", function(_, response){
     
    console.log("Route /");
    response.send("Hello");
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);