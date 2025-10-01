const EventEmitter = require("events");
// определяем эмиттер событий
const emitter = new EventEmitter();
 
// имя события, которое будет обрабатываться
const eventName = "greet";

// регистрируем три обработчика для события "greet"
emitter.on(eventName, function(){
    console.log("Hello World!");
});
emitter.on(eventName, function(){
    console.log("Привет мир!");
});
emitter.on(eventName, function(){
    console.log("Hallo Welt!");
});

console.log("start emit")

// генерируем событие greet
emitter.emit(eventName);