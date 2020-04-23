// type assertion

// angle bracket syntax
let code: any = 123;
let empCode = <number>code;
console.log(`typeof code: ${typeof code}`);
console.log(`typeof empCode: ${typeof empCode}`);

// 'as' syntax
let id: any = 250;
let productId = id as number;
console.log(`typeof id: ${typeof id}`);
console.log(`typeof productId: ${typeof productId}`);
