class Customer{

    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

let myCustomer = new Customer("Anant", "Jain");

// myCustomer.firstName = "Anant";
// myCustomer.lastName = "Jain";

console.log(`${myCustomer.firstName} ${myCustomer.lastName}`);