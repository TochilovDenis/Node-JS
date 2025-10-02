const EventEmitter = require("events");
// определяем эмиттер событий
const emitter = new EventEmitter();
 
// имя события, которое будет обрабатываться
const eventName = "greet";

emitter.on(eventName, function(data){
    console.log(data);
});

console.log("start emit")

class User extends EventEmitter {
    constructor(username){
        super();    // вызываем конструктор EventEmitter
        this.name = username;
    }
    sayHi() {
        console.log("Привет. Меня зовут", this.name);
    this.emit(eventName, this.name);    // генерируем событие, передаем обработчику имя
    }
}

const tom = new User("Dex");
// добавляем к объекту tom обработку события "greet"
// обработчик ожидает получить через параметр имя пользователя
tom.on(eventName, function(username){
    console.log("Привет,", username);
});
// при выполнении метода генерируется событие "greet"
tom.sayHi();