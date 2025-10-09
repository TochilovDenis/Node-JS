const http = require("http");
const fs = require("fs");

http
    .createServer(async (request, response) => {
        if (request.url == "/user") {

            let body = "";   // буфер для получаемых данных
            // получаем данные из запроса в буфер
            for await (const chunk of request) {
                body += chunk;
            }

            // для параметра name
            let fileName = "";

            let temp = "<form action=\"user\" method=\"post\"><p><label>Название файла:</label><br><input name=\"file_name\" /></p><input type=\"submit\" value=\"Отправить\" /></form>"

            // разбиваем запрос на параметры на имя и значение
            const [paramName, paramValue] = body.split("=");

            if (paramName == "file_name") fileName = paramValue;
            console.log(paramValue, paramValue)
            //fs.createReadStream(fileName + '.html').pipe(response);

            fs.readFile(fileName + ".html", function (error, data) {
                if (error) {
                    response.statusCode = 404;
                    response.end("Resourse not found!");
                }
                else {
                    response.end(data.toString().replace(/{temp}/g, temp));
                }
            });
        }
        else {
            fs.readFile("index.html", (_, data) => response.end(data));
        }
    })
    .listen(3000, () => 
        console.log("Сервер запущен по адресу http://localhost:3000")
    );       