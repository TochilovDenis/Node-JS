const express = require("express");
const app = express();

// определяем Router
const userRouter = express.Router();
const friendRouter = express.Router();
const petRouter = express.Router();

// userRouter
userRouter.use("/add_name", function(request, response){
  response.send("Добавление имени пользователя");
});
userRouter.use("/add_age", function(request, response){
  response.send("Добавление возраста пользователя");
});
userRouter.use("/add_description", function(request, response){
  response.send("Добавление описания пользователя");
});

userRouter.use("/", function(request, response){
  response.send("Список пользователей");
});

// friendRouter
friendRouter.use("/add_name", function(request, response){
  response.send("Добавление имени друга");
});
friendRouter.use("/add_age", function(request, response){
  response.send("Добавление возраста друга");
});
friendRouter.use("/add_description", function(request, response){
  response.send("Добавление описания друга");
});

friendRouter.use("/", function(request, response){
  response.send("Список друзей");
});

// petRouter
petRouter.use("/add_name", function(request, response){
  response.send("Добавление имени питомца");
});
petRouter.use("/add_age", function(request, response){
  response.send("Добавление возраста питомца");
});
petRouter.use("/add_description", function(request, response){
  response.send("Добавление описания питомца");
});

petRouter.use("/", function(request, response){
  response.send("Список питомцев");
});

// Подключаем роутеры
app.use("/user", userRouter);
app.use("/friend", friendRouter);
app.use("/pet", petRouter); // Исправлено: было userRouter

app.use("/", function (request, response) {
  response.send("Главная страница");
});

app.listen(3000);