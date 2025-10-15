const express = require("express");
   
const app = express();
// устанавливаем автоматически парсинг тела запроса в json
app.use(express.json()); 
   
app.post("/user", function (request, response) {
    const user = request.body;
    console.log(user);
    if(!user) return response.sendStatus(400);
    const responseText = `Your name: ${user.name}  Your age: ${user.age}`;
    response.json({message: responseText}); // отправляем данные в формате json
});
   
app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html");
});
   
app.listen(3000);