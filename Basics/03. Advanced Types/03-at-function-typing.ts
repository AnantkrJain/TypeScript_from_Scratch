// Named function
// --------------
// js version
// function add1(x, y) {
//    return x + y;
// }

// ts version
function add1(x: number, y: number): number {
   return x + y;
}

console.log('add1():', add1(10, 10));

// Anonymous function
// ------------------
// js version
// let add2 = function (x, y) { 
//    return x + y; 
// };

// ts version
let add2 = function (x: number, y: number): number {
   return x + y;
};

console.log('add2():', add2(20, 20));

// Arrow function
// --------------
// js version
// let add3 = (x, y) => x + y;

// ts version
let add3 = (x: number, y: number): number => x + y;

console.log('add3():', add2(30, 30));
