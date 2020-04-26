// app.ts

/// <reference path="username-validator.ts" />
/// <reference path="pincode-validator.ts" />

const v1 = new Validation.UsernameValidator();
console.log('Username Validator: ', v1.isValid('hari krishna'));

const v2 = new Validation.PincodeValidator();
console.log('Pincode Validator: ', v2.isValid('560001'));

// output
// Username Validator: false
// Pincode Validator: true
