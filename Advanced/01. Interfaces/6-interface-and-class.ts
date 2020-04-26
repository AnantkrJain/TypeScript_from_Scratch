interface Person {
   firstName: string;
   lastName: string;
   age?: number;

   display(): void;
}

class Customer implements Person {
   firstName: string = 'Hari';
   lastName: string = 'Krishna';
   age: number = 25;

   // the class can also have additional properties
   // and methods of its own
   city: string = 'Bengaluru';

   display() {
      console.log(`Customer Name: ${this.firstName} ${this.lastName}`);
      console.log(`Age: ${this.age}`);
      console.log(`City: ${this.city}`);
   }
}

const c: Customer = new Customer();
c.display();
