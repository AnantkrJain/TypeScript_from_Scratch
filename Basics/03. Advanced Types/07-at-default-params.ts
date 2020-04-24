// default parameters
function buildName(firstName: string, lastName = "Smith"): string {
   return firstName + " " + lastName;
}

let result1 = buildName("Bob"); 			    // works correctly now, returns "Bob Smith"
let result2 = buildName("Bob", undefined); // still works, also returns "Bob Smith"
let result3 = buildName("Bob", "Adams");	 // ah, just right

console.log('result1:', result1); // result1: Bob Smith
console.log('result2:', result2); // result2: Bob Smith
console.log('result3:', result3); // result3: Bob Adams
