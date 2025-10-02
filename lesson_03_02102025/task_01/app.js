/*1 практическая работа. Сделать так чтобы emitter.listenerCount(eventName) вывел значения:
15
9
1*/

/*
2 задача использовать только один eventName  "console.log( emitter.listenerCount(eventName)"
*/ 

const { EventEmitter } = require('events');
const emitter = new EventEmitter();

const eventName = 'event';

// Добавляем слушатели, которые автоматически удаляются после первого вызова
for (let i = 0; i < 15; i++) {
    emitter.on(eventName, function(){});    
}
console.log(emitter.listenerCount(eventName)); // 15

const listeners = emitter.listeners(eventName);
for (let i = 0; i < 6; i++) {
    emitter.removeListener(eventName, listeners[i]); // Удаляем 6 оставшихся слушателей, оставляя 9
}
console.log(emitter.listenerCount(eventName)); // Выводим 9 (15 - 6)

const listeners1 = emitter.listeners(eventName);
for (let i = 0; i < 8; i++) {
    emitter.removeListener(eventName, listeners1[i]); // Удаляем 8 оставшихся слушателей, оставляя 1
}

// Выводим 1
console.log(emitter.listenerCount(eventName));