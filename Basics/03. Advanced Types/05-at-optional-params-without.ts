// optional parameters
function buildName(firstName: string, lastName: string): string {
   return `${firstName} ${lastName}`;
}

let result1 = buildName("Bob", "Adams");  // just right
// let result2 = buildName("Bob");                  // error: Expected 2 arguments, but got 1.
// let result3 = buildName("Bob", "Adams", "Sr.");  // error: Expected 2 arguments, but got 3.

console.log('result1:', result1);   // result1: Bob Adams
