// any
let notSure: any = 4;
console.log('notSure:', notSure);

notSure = "maybe a string instead";
console.log('notSure:', notSure);

notSure = false;
console.log('notSure:', notSure);

notSure = { id: 1, name: 'Ram' };
console.log('notSure:', notSure);

let arr: any[] = ["John", 212, true];
console.log('arr:', arr);

arr.push("Smith");
console.log('arr:', arr); 
