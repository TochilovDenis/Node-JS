const { EventEmitter } = require('events');
const emitter = new EventEmitter();

// Создаем события с разным количеством слушателей
for (let i = 0; i < 15; i++) emitter.on('event1', function(){});
for (let i = 0; i < 9; i++) emitter.on('event2', function(){});
emitter.on('event3', function(){});

// Выводим все значения
console.log(`${emitter.listenerCount('event1')} ${emitter.listenerCount('event2')} ${emitter.listenerCount('event3')}`);