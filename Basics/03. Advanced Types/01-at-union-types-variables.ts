// union types
// variable declarations
let employeeId: string | number;

employeeId = 111; // works fine
console.log(`employeeId: ${employeeId}`);

employeeId = "E111"; // works fine
console.log(`employeeId: ${employeeId}`);

// error: Type 'true' is not assignable to 
// type 'string | number'
// employeeId = true;
