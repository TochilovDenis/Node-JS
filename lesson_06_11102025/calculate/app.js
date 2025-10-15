const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static(__dirname));

app.post("/calculate", (req, res) => {
    const { param1, param2, operation } = req.body;
    
    let res1;
    if (operation === "add") {
        res1 = param1 + param2;
    } else if (operation === "sub") {
        res1 = param1 - param2;
    } else {
        res1 = "Неизвестная операция";
    }
    console.log('Результат: ', res1);
    res.json({ result: res1 });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
    console.log("Сервер запущен на http://localhost:3000");
});