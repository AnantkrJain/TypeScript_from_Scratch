// var declaration
var a = 10;
console.log('a:', a);

// var declaration inside a function
function f() {
   var message = "Hello, world!";

   return message;
}
console.log(f());

// let declaration
let employeeName = "John";
console.log('employeeName:', employeeName);

// const declaration
const numLivesForCat = 9;
console.log('numLivesForCat:', numLivesForCat);

// allowed - let declaration
employeeName = 'Bob';

// not allowed - const declaration
// error: Cannot assign to 'numLivesForCat' because it is a constant.
// numLivesForCat = 20;   
