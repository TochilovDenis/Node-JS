const host = process.argv[2];
const post = process.argv[3];
console.log(host + ":" + post);

const http = require("http");
http.createServer(function(request,response){
     
    response.end("Hello NodeJS!");
     
}).listen(post,host, function(){
    console.log("Сервер начал прослушивание запросов на порту 3000");
});