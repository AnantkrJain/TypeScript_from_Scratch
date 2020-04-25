class Employee {
   readonly id: number;
   name: string;

   constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
   }
}

const emp: Employee = new Employee(100, 'Hari');
// emp.id = 200; // error - 'id' is a read-only property
emp.name = 'Krishna';
