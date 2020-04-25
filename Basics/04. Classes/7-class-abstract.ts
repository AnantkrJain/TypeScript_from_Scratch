abstract class Animal {
   abstract makeSound(): void;
   move(): void {
      console.log("roaming the earth...");
   }
}

class Cat extends Animal {
   makeSound() {
      console.log('meow...');
   }
}

const c: Cat = new Cat();
c.makeSound();
c.move();

// error: Cannot create an instance
// of an abstract class
// const a: Animal = new Animal();
// a.move();
