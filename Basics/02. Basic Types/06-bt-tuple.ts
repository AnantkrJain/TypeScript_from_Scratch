// tuple
let employee: [number, string] = [1, "Steve"];
let person: [number, string, boolean] = [1, "Steve", true];

let user: [number, string, boolean, number, string]; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable

console.log('employee:', employee);
console.log('person:', person);
console.log('user:', user);

// accessing tuple elements using index, similar to arrays
console.log('employee[0]:', employee[0]);
console.log('person[2]:', person[2]);
console.log('user[4]:', user[4]);

// error: Tuple type '[number, string]' of length '2' 
// has no element at index '2'.
// console.log(employee[2]);
