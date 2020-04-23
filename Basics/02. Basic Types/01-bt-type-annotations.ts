// Type annotation with variables
var age: number = 32;          // number variable
var empName: string = "John";  // string variable
var isUpdated: boolean = true; // boolean variable

// Type annotation with function parameters
function display(id: number, name: string) {
   console.log("Id = " + id + ", Name = " + name);
}

// Type annotation with object properties
var employee: {
   id: number;
   name: string;
};

employee = {
   id: 100,
   name: "John"
};

display(10, 'hari');
console.log('employee:', employee);