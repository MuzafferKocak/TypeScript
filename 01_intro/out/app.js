// console.log("Hello world");
// let x = 5 //* x ist 5
// //* Hello
// let y = "Hello"
// const z = (a,b,c)=> a+b
//? Type Annotation
// let a: number = 5;
// let b: string = "Hello";
// let c = false;
// c = true;
//? Data Type - Arrays
// let num: number[] = [1, 2, 3];
// let num2: Array<string> = ["a", "b",
//     "c"
// ]  //* Generic Array
// num.push(4)
let leerArray = []; //* Leer array deffinition
//? Tuples
// let myTuple: [string, number, boolean]
// myTuple = ["admin", 1, true, ]
// myTuple = ["circle", 3.14, false]
// myTuple.push(4) //* No error
// let myTuple2: [number, string]
// myTuple2 = [0, "user"]
// myTuple2.push(1)
// myTuple2.push("admin")
// myTuple2.push(false) //* error boolean ist nicht definiert
//? tuples array
let myTuple3;
myTuple3 = [[1, "john"], [2, "smith"]];
myTuple3.push(["jane", 4]); //* error
myTuple3.push([4, "jane"]); //* richtige definition muss die reihe auch stimmen
