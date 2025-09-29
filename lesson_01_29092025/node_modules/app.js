const os = require("os");
const greeting = require("./greeting");
 
// имя текущего пользователя
const userName = os.userInfo().username;
 
console.log(`Дата запроса: ${greeting.date}`);
greeting.printMessage(userName);