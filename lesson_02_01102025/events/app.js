const EventEmitter = require("events");
// определяем эмиттер событий
const emitter = new EventEmitter();
 
// имя события, которое будет обрабатываться
const eventName = "greet";

// регистрируем цикла обработчика для события "greet"
for (let i = 0; i < 5; i++) {
    emitter.on(eventName, function(){
        console.log("Hello World!");
    });
}




console.log("start emit")

// генерируем событие greet
emitter.emit(eventName);