// enum
enum Color1 { Red, Green, Blue }
let c1: Color1 = Color1.Green;

console.log('c1:', c1);  // 1

enum Color2 { Red = 10, Green, Blue }
let c2: Color2 = Color2.Green;

console.log('c2:', c2);  // 11

enum Color3 { Red = 150, Green = 250, Blue = 350 }
let c3: Color3 = Color3.Green;

console.log('c3:', c3);  // 250
