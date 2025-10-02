const EventEmitter = require("events");
// определяем эмиттер событий
const emitter = new EventEmitter();
 
const eventName = "greet";

for(let i = 0; i < 15; i++){
    emitter.on('eventA', function(){
        console.log("15");
    });
}
console.log(emitter.listenerCount('eventA'));; // Выведет: 15

for(let i = 0; i < 9; i++){
    emitter.on('eventB', function(){
        console.log("9");
    });
}
console.log(emitter.listenerCount('eventB'));; // Выведет: 9

for(let i = 0; i < 1; i++){
    emitter.on('eventC', function(){
        console.log("1");
    });
}
console.log(emitter.listenerCount('eventC'));; // Выведет: 1