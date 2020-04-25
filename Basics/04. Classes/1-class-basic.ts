class Book {
   name: string;
   author: string;

   constructor(name: string, author: string) {
      this.name = name;
      this.author = author;
   }

   show() {
      console.log(`Book name: ${this.name}`);
      console.log(`Author: ${this.author}`);
   }
}

let book1: Book = new Book(
   'Mind is your Business', 'Sadhguru'
);
book1.show();
