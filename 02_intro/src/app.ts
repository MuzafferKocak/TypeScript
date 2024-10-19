console.log("Hello");

//! Classes Beispiel

// class Employee {
//   empCode: number;
//   empName: string;

//   constructor(code: number, name: string) {
//     this.empCode = code;
//     this.empName = name;
//   }
// }
// let emp1 = new Employee(1, "Markus")

// console.log(emp1);

//! Interface

// interface Point {
//     x:number
// }
// interface Point {
//     y: number
// }
// const point1: Point = {
//     x:30,
//     y:50
// }

interface Shape {
  kind: "circle" | "rectangle";
}

interface Circle extends Shape {
  kind: "circle";
  radius: number;
}

interface Rectangle extends Shape {
  kind: "rectangle";
  width: number;
  height: number;
}

function calculateArea(shape: Circle): number;
function calculateArea(shape: Rectangle): number;
function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * (shape as Circle).radius ** 2;
    case "rectangle":
      return (shape as Rectangle).width * (shape as Rectangle).height;
    default:
     throw new Error("Invalid Shape");
  }
}

const myCircle: Circle = {kind: "circle", radius:10}
const myRect: Rectangle = {kind: "rectangle", width:4, height:5}

console.log(calculateArea(myCircle));
console.log(calculateArea(myRect));
