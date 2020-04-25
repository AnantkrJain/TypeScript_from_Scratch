class Animal {
   protected name: string; // access modifier

   constructor(name: string) {
      this.name = name;
   }

   speak() {
      console.log(this.name +
         ' makes a noise.');
   }
}

class Dog extends Animal {
   private color: string; // subclass property

   constructor(name: string, color: string = 'white') {
      super(name);   // call to superclass constructor
      this.color = color;
   }

   speak() {
      console.log(this.name + ' barks.');
   }

   describe() {   // subclass method
      console.log(`${this.name} is ${this.color} in color.`);
   }
}

class Lion extends Animal {
   speak() {
      super.speak(); // call to superclass method
      console.log(this.name + ' roars.');
   }
}

let a = new Animal('Cooper');
a.speak();     // output: Cooper makes a noise.

let d = new Dog('Snowy');
d.speak();     // output: Snowy barks.
d.describe();  // output: Snowy is white in color.

let l = new Lion('Leo');
l.speak();     // output: Leo makes a noise.
               //         Leo roars.
