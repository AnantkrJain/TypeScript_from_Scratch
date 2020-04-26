// interface User {
//    name: string;
// }

// function greet(user: User) {
//    console.log('Hello ' + user.name);
// }

// function show(user: User) {
//    console.log('Name:', user.name);
//    // show other user details
// }

// const user = {
//    name: 'Hari',
//    age: 25
// };

// const customer = {
//    name: 'Krish'
// };

// // Following calls to greet() and show() 
// // work as expected because user and customer 
// // objects passed as argument contain name property
// greet(user);		// Hello Hari
// show(customer);	// Name: Krish

// const customer1 = {
//    firstName: 'Shiv'
// };

// // Compile-time Error: 
// // Argument of type '{ firstName: string; }' is not 
// // assignable to parameter of type 'User'.
// // Property 'name' is missing in type '{ firstName: string; }' 
// // but required in type 'User'.
// // greet(customer1);		// Hello undefined
