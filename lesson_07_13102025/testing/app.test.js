const request = require("supertest");
const assert = require("assert");
 
const {app} = require("./app");
 
describe("User Router Tests", function() {
    
    it("should return user data with correct parameters", function(done) {
        request(app)
            .get("/name/gera/pet/murka.25?city=cher&obl=vol")
            .expect(200)
            .expect(function(response) {
                assert.deepStrictEqual(response.body, {
                    username: "gera",
                    pet_name: "murka",
                    age_age: "25",
                    city: "cher",
                    obl: "vol"
                });
            })
            .end(done);
    });

    it("should return user profile with correct parameters", function(done) {
        request(app)
            .get("/profile/name/gera/pet/murka.25?city=cher&obl=vol")
            .expect(200)
            .expect("Запрошенный данные: gera, 25, murka, cher, vol")
            .end(done);
    });

    it("should return user profile with default values when query params are missing", function(done) {
        request(app)
            .get("/profile/name/gera/pet/murka.25")
            .expect(200)
            .expect("Запрошенный данные: gera, 25, murka, не указан, не указана")
            .end(done);
    });

    it("should return 404 for non-existent route", function(done) {
        request(app)
            .get("/error")
            .expect(404)
            .end(done);
    });

    it("should return 404 for invalid user route", function(done) {
        request(app)
            .get("/user")
            .expect(404)
            .end(done);
    });
});