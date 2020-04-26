// combine 2 arrays, return the combined one
// using generic function syntax
function combineArrays<T>(a1: T[], a2: T[]): T[] {
   return [...a1, ...a2];
}

class Employee {
   constructor(public id: number, public name: string) { }
}

const hrEmployees: Employee[] = [
   new Employee(1, 'Bob'),
   new Employee(2, 'Ram')
];

const itEmployees: Employee[] = [
   new Employee(3, 'Alex'),
   new Employee(4, 'Shyam')
];

// call the function with arrays of Employee objects
const allEmployees = combineArrays<Employee>(
   hrEmployees, itEmployees
);
console.log(allEmployees);
