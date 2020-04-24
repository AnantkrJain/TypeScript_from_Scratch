// function types
// function type declaration
let add: (x: number, y: number) => number;

// same parameter names
add = function (x: number, y: number): number {
   return x + y;
};

console.log(add(10, 10));

// different parameter names, it works!
// note: parameter type is important, not the name
add = function (num1: number, num2: number): number {
   return num1 + num2;
};

console.log(add(20, 20));
