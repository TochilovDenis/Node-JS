const http = require("http");
 
http.createServer(function(request, response){
     
    console.log("Url:", request.url);
    console.log("Тип запроса:", request.method);
    console.log("User-Agent:", request.headers["user-agent"]);
    console.log("Все заголовки");
    console.log(request.headers);
     
    response.end("Hello METANIT.COM!");
}).listen(3000, function(){ console.log("Сервер запущен по адресу http://localhost:3000")});