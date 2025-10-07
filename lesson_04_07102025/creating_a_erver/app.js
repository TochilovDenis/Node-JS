const http = require("http");
 
http.createServer(function(request, response){
     
    console.log("Url:", request.url);
    console.log("Тип запроса:", request.method);
    console.log("User-Agent:", request.headers["user-agent"]);
    console.log("Все заголовки");
    console.log(request.headers);

    response.setHeader("UserId", 12);   // установка кастомного заголовка
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    response.write("<h2>Привет мир</h2>");
    response.end();
    
}).listen(3000, function(){ console.log("Сервер запущен по адресу http://localhost:3000")});