const EventEmitter = require("events");
// определяем эмиттер событий
const emitter = new EventEmitter();
 
// имя события, которое будет обрабатываться
const eventName = "greet";

emitter.on(eventName, function(username){
    console.log("Прив", username);
});

console.log("start emit")

class User{
    constructor(username, emitter){
        this.name = username;
        this.emitter = emitter;
    }
    sayHi() {
        console.log("Привет. Меня зовут", this.name);
    this.emitter.emit(eventName, this.name);    // генерируем событие, передаем обработчику имя
    }
}

const dex = new User("Dex", emitter);
dex.sayHi();