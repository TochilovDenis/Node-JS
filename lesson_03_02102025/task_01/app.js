const EventEmitter = require("events");
// определяем эмиттер событий
const emitter = new EventEmitter();
 
// Добавляем 15 обработчиков для события 'eventA'
for (let i = 0; i < 15; i++) {
    emitter.on('eventA', function() {
        console.log(`eventA`);
    });
}

// Добавляем 9 обработчиков для события 'eventB'
for (let i = 0; i < 9; i++) {
    emitter.on('eventB',  function() {
        console.log(`eventB`);
    });
}

// Добавляем 1 обработчик для события 'eventC'
emitter.on('eventC',  function() {
    console.log('eventC');
});

// Проверяем количество обработчиков для каждого события
console.log(emitter.listenerCount('eventA')); // Выведет: 15
console.log(emitter.listenerCount('eventB')); // Выведет: 9
console.log(emitter.listenerCount('eventC')); // Выведет: 1