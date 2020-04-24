// union types
// function parameters
function padLeft(value: string, padding: string | number) {
   return `${padding}${value}`;
}

let indentedString;
indentedString = padLeft("123", 0); // works fine
console.log(`indentedString: ${indentedString}`);

indentedString = padLeft("456", "*"); // works fine
console.log(`indentedString: ${indentedString}`);

// error: Argument of type 'true' is not assignable  
// to parameter of type 'string | number'.
// indentedString = padLeft("100", true);
