const fs = require("fs");

let file = "hello.txt";
fs.readFile(file, function(error,data){
    if(error) {  // если возникла ошибка
        return console.log(error);
    }
    console.log(data.toString());   // выводим считанные данные
});
console.log("Асинхронное чтение файлов");

let file1 = "hello1.txt";
const data = "Hello SOS";
fs.writeFile("hello2.txt", data, function(error){
    if(error){  // если ошибка
        return console.log(error);
    }
    console.log("Файл успешно записан");
});

 
// асинхронное добавление
fs.stat(file, (error, stats) => {  
    if (error)  return console.error(error);
    console.log(stats.isFile());        // true  
    console.log(stats.isDirectory());   // false  
    console.log(stats);
});


// fs.unlink(file, (error) => {
//   if (error) return console.log(error); // если возникла ошибка 
//   console.log("File deleted");
// });


fs.mkdir("test", (error) => {  
        if (error) return console.log(error);
        console.log("Folder created");
});


fs.readdir("test", (error, files) => {  
        if (error) return console.log(error);
        files.forEach((file) => console.log(file));
        console.log("Folder read");
});


fs.rmdir("test", (error) => {  
        if (error) return console.log(error);
        console.log("Folder deleted");
});