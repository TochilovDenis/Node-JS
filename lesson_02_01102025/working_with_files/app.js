const fs = require("fs");

let file = "hello.txt";
fs.readFile(file, function(error,data){
    if(error) {  // если возникла ошибка
        return console.log(error);
    }
    console.log(data.toString());   // выводим считанные данные
});
console.log("Асинхронное чтение файлов");