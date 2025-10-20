const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());

const operations = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    multiply: (a, b) => a * b, // Исправлена опечатка
    division: (a, b) => {
        if (b == 0) {
            throw new Error("Деление на ноль невозможно");
        }
        return a / b;
    }
};

app.post("/calculate", (req, res) => {
    try {
        const { param1, param2, operation } = req.body;

        // Проверка наличия всех необходимых параметров
        if (param1 === undefined || param2 === undefined || !operation) {
            return res.status(400).json({ error: "Не все параметры предоставлены" });
        }

        // Проверка валидности чисел
        if (isNaN(param1) || isNaN(param2)) {
            return res.status(400).json({ error: "Неверные числовые параметры" });
        }

        const operationFunction = operations[operation];

        if (operationFunction) {
            const result = operationFunction(Number(param1), Number(param2));
            console.log('Результат: ', result);
            res.json({ result: result });
        } else {
            res.status(400).json({ error: "Неизвестная операция" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html")); // Исправлено
});

app.listen(3000, () => {
    console.log("Сервер запущен на http://localhost:3000");
});