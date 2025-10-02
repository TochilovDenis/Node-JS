const fs = require("fs");
  
const writeableStream = fs.createWriteStream("hello.txt");
writeableStream.write("Привет мир!\n");
writeableStream.write("Продолжение записи\n");
writeableStream.end("Завершение записи\n");
 
  
writeableStream.on('finish', () => {
  console.log('Данные были записаны в файл.');

  const readableStream = fs.createReadStream("hello.txt");
  readableStream.on("data", function (chunk) {
    console.log(chunk.toString());
  });
});