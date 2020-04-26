// combine 2 arrays, return the combined one
// using generic function syntax
function combineArrays<T>(a1: T[], a2: T[]): T[] {
   return [...a1, ...a2];
}

// call the function with string arrays
const names = combineArrays<string>(
   ['hari', 'krish'],
   ['shiv', 'amar']
);
console.log(names);
// output: ["hari", "krish", "shiv", "amar"]

// names.push(100);
// error: Argument of type '100' is not assignable 
// to parameter of type 'string'.

// call the function with number arrays
const numbers = combineArrays(
   [10, 20, 30],
   [40, 50]
);
console.log(numbers);
// output: [10, 20, 30, 40, 50]

// numbers.push('ram');
// error: Argument of type '"ram"' is not assignable
// to parameter of type 'number'.
