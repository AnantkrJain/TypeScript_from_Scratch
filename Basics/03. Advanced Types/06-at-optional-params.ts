// optional parameters
function buildName(firstName: string, lastName?: string): string {
   if (lastName) {
      return `${firstName} ${lastName}`;
   }

   return `${firstName}`;
}

let result1 = buildName("Bob", "Adams");  // just right
let result2 = buildName("Bob");           // it works!
// let result3 = buildName("Bob", "Adams", "Sr.");  // error: Expected 2 arguments, but got 3.

console.log('result1:', result1);   // result1: Bob Adams
console.log('result2:', result2);   // result2: Bob
