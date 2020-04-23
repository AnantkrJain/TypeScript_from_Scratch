// arrays
// syntax #1
let list1: number[] = [1, 2, 3];
console.log('list1:', list1);

// syntax #2
let list2: Array<number> = [1, 2, 3];
console.log('list2:', list2);

// declare and initialize separately
let fruits: Array<string>;
fruits = ['Apple', 'Orange', 'Banana'];

// accessing array elements
console.log('fruits:', fruits);
console.log(`index 0 - ${fruits[0]}`);
console.log(`index 1 - ${fruits[1]}`);
console.log(`index 2 - ${fruits[2]}`);
console.log(`index 3 - ${fruits[3]}`);

// using for...in loop for accessing array elements
console.log('for...in loop');
for (let i in fruits) {
   console.log(`  ${i}: ${fruits[i]}`);
}

// using for loop for accessing array elements
console.log('for loop');
for (let j = 0; j < fruits.length; j++) {
   console.log(`  ${j}: ${fruits[j]}`);
}
