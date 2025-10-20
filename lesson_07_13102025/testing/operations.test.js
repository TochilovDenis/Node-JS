const assert = require("assert");
const operations = require("./operations");

describe("Operations Tests", function () {
    it("should multiply two numbers", function () {
        const expected = 10;
        const result = operations.multply(2, 5);
        assert.strictEqual(result, expected); 
        if(result!==expected){
            throw new Error(`Expected ${expected}, but got ${result}`);
        }   
    });

    it("should add two numbers", function () {
        const expected = 16;
        const result = operations.add(9, 7);
        assert.strictEqual(result, expected);
        if(result!==expected){
            throw new Error(`Expected ${expected}, but got ${result}`);
        }  
    });

    it("should subtract two numbers", function () {
        const expected = 5;
        const result = operations.subtr(10, 5);        
        assert.strictEqual(result, expected);
        if(result!==expected){
            throw new Error(`Expected ${expected}, but got ${result}`);
        }  
    });

    it("should divide two numbers", function () {
        const expected = 6;
        const result = operations.division(12, 2);
        assert.strictEqual(result, expected);
        if(result!==expected){
            throw new Error(`Expected ${expected}, but got ${result}`);
        }          
    });

    const mas_2 = [
        [3, 4, 1, 7, -189],
        [9, 3, 4, 6, -87],
        [6, 7, 3, 5, -148],
        [9, 2, 4, 6, -55]
    ];

    mas_2.forEach((el, num) => {
        it("test_function num: " + num, function () {
            const expected = el[4];
            const result = operations.funct_abch(el[0], el[1], el[2], el[3]);
            assert.strictEqual(result, expected);
        });
    });
});