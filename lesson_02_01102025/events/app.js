const EventEmitter = require("events");
// определяем эмиттер событий
const emitter = new EventEmitter();
 
// имя события, которое будет обрабатываться
const eventName = "greet";

emitter.on(eventName, function(data){
    console.log(data);
});

console.log("start emit")

// генерируем событие greet
emitter.emit(eventName, "Привет пир!");