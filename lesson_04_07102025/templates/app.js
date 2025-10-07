const http = require("http");
const fs = require("fs");
  
http.createServer(function(_, response){
      
    fs.readFile("index.html", function(error, data){
                  
        if(error) {
            response.statusCode = 500;
            response.end("Server error");
        }
        else{
            const message = "Изучаем Node.js"; 
            const header = "Главная страница";
            const dataText = data.toString().replace(/{header}/g, header).replace(/{message}/g, message);
            response.end(dataText);
        }
    })
}).listen(3000, function(){
    console.log("Сервер запущен по адресу http://localhost:3000");
});