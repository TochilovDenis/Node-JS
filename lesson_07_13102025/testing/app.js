const express = require("express");
const app = express();

const userRouter = express.Router();

userRouter.get("/name/:gera/pet/:murka.:age", function (req, res) {
    const name = req.params.gera;
    const pet = req.params.murka;
    const age = req.params.age;
    const city = req.query.city;
    const obl = req.query.obl;

    res.send({
        username: name,
        pet_name: pet,
        age_age: age,
        city: city,
        obl: obl,
    });
});//localhost:3000/name/gera/pet/murka.25?city=cher&obl=vol

userRouter.get("/profile/name/:name/pet/:pet.:age", function (req, res) {
    const name = req.params.name;
    const pet = req.params.pet;
    const age = req.params.age;
    const city = req.query.city || "не указан";
    const obl = req.query.obl || "не указана";
    res.send(`Запрошенный данные: ${name}, ${age}, ${pet}, ${city}, ${obl}`);
}); //localhost:3000/profile/name/gera/pet/murka.25?city=cher&obl=vol

app.use("/", userRouter); 

module.exports.app = app;

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});