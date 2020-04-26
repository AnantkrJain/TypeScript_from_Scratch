// app.ts
interface StringValidator {
   // returns true if the input parameter is valid,
   // false otherwise
   isValid(s: string): boolean;
}

class PincodeValidator implements StringValidator {
   // returns true if the input parameter is 6 character long,
   // false otherwise
   isValid(s: string): boolean {
      return s.length === 6;
   }
}

class UsernameValidator implements StringValidator {
   // returns true if the input parameter has no spaces,
   // false otherwise
   isValid(s: string): boolean {
      return s.indexOf(' ') < 0;
   }
}

const v1 = new UsernameValidator();
console.log('Username Validator:', v1.isValid('hari krishna'));

const v2 = new PincodeValidator();
console.log('Pincode Validator:', v2.isValid('560001'));

// output
// Username Validator: false
// Pincode Validator: true