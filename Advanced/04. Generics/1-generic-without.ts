// combine 2 arrays, return the combined one
function combineArrays(a1: any[], a2: any[]): any[] {
   return [...a1, ...a2];
}

// call the function with string arrays
const names = combineArrays(
   ['hari', 'krish'],
   ['shiv', 'amar']
);
console.log(names);
// output: ["hari", "krish", "shiv", "amar"]

// call the function with number arrays
const numbers = combineArrays(
   [10, 20, 30],
   [40, 50]
);
console.log(numbers);
// output: [10, 20, 30, 40, 50]

names.push(100);
console.log(names);
// output: ["hari", "krish", "shiv", "amar", 100]

numbers.push('ram');
console.log(numbers);
// output: [10, 20, 30, 40, 50, "ram"]
