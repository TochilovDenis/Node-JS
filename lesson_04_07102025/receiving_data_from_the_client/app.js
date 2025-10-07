const http = require("http");
const fs = require("fs");
 
http.createServer(async (request, response) => {
     response.setHeader("Content-Type", "text/html; charset=utf-8;");
     if (request.url === "/user") {
         
        const buffers = []; // буфер для получаемых данных
 
        for await (const chunk of request) {
            buffers.push(chunk);        // добавляем в буфер все полученные данные
        }
 
        const data = Buffer.concat(buffers).toString();
        console.log(data);
        response.end("Данные успешно получены");
    }
    else{
        fs.readFile("index.html", (error, data) => response.end(data));
    }
}).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));