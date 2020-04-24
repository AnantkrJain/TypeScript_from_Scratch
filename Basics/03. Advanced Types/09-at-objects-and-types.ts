// objects and types
let person: { name: string, age: number } = {
   name: 'Hari',
   age: 25
};

console.log('person:', person);

person = {			// this works
   name: 'Krish',
   age: 20
};

console.log('person:', person);

// person = {};   // error - Type '{}' is missing the following properties
//                // from type '{ name: string; age: number; }': name, age
