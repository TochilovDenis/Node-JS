const http = require("http");
 
http.createServer(function(request, response){
     
    console.log("Url:", request.url);
    console.log("Тип запроса:", request.method);
    console.log("User-Agent:", request.headers["user-agent"]);
    console.log("Все заголовки");
    console.log(request.headers);
    response.write("Text 1\n");
    response.write("Text 2\n");
    response.end("End");
}).listen(3000, function(){ console.log("Сервер запущен по адресу http://localhost:3000")});