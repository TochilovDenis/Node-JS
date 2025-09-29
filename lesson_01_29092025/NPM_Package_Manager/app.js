const lodash = require("lodash")
 
const people = ["Tom", "Sam", "Bob"];
const employees = ["Tom", "Alice", "Sam"];
 
// объединение массивов - в результате только уникальные значения
const result1 = lodash.union(people, employees);
console.log(result1);    // [ "Tom", "Sam", "Bob", "Alice" ]
 
// пересечение массивов - в результате только общие значения
const result2 = lodash.intersection(people, employees);
console.log(result2);    // [ "Tom", "Sam" ]