class Circle {
   static PI: number = 3.14;

   static calculateArea(radius: number) {
      return Circle.PI * radius * radius;
   }
}

console.log('PI:', Circle.PI);   // PI: 3.14
console.log('Area of circle:', Circle.calculateArea(5));
                                 // Area of circle: 78.5
