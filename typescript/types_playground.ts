let x:[number, string];

x = [28, 'Arslan'];

console.log(`Age: ${x[0]}`);
console.log(`Name: ${x[1]}`);

console.log(`Age / 2: ${x[0]/2}`);
console.log(`Name(Substring(3)): ${x[1].substring(3)}`);

enum Color {Red = 100, Green, Blue};
let c: Color = Color.Green;
console.log(`Color: ${c}`);

var some : number = 0b100100;
console.log(`My Number: ${some}`);