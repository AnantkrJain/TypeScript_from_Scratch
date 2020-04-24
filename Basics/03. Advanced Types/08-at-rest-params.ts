// rest parameters
function greet(greeting: string, ...names: string[]): string {
   return greeting + ' ' + names.join(', ') + '!';
}

let result1 = greet('Hello', 'Hari', 'Ram', 'Krish');
let result2 = greet('Hello', 'Steve', 'Bill');
let result3 = greet('Hello');

console.log('result1:', result1); // result1: Hello Hari, Ram, Krish! 
console.log('result2:', result2); // result2: Hello Steve, Bill!
console.log('result3:', result3); // result3: Hello !
