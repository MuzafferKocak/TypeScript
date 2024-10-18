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

// let leerArray: string[] = [] //* Leer array deffinition

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

// let myTuple3 : [number, string][]

// myTuple3 = [[1, "john"], [2, "smith"]]

// myTuple3.push(["jane", 4]) //* error
// myTuple3.push([4, "jane"]) //* richtige definition muss die reihe auch stimmen

//? Enum

// const enum Color {
//     Red, //0
//     Green,//1
//     Blue,//2
// }
//  let selectedColor : Color = Color.Green

//  console.log(selectedColor); //output 1

/* //? ohne const js
 var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let selectedColor = Color.Green;
console.log(selectedColor); //output 1
 */

// enum Tshirt {
//     Small ="S",
//     Medium = "M",
//     Large = "L"
// }

// let userSize : Tshirt = Tshirt.Small
// console.log(userSize);

// enum StatusCodes {
//     NotFound = 404,
//     Success = 200,
//     Accepted = Success +2,
//     BadRequest = NotFound - 4,
//     ServerErrors
// }

// console.log(StatusCodes.ServerErrors);

//? Any Type

// let d: any = 4;
// d = "Hello";
// d = false;

// let anyArray: any[] = [1, "Hello"];

// anyArray.push(true);

// let e: boolean = d;

//? Unknown

// let notSure: unknown = 4
// notSure = "Hello"

// console.log((notSure as string).length); //*allias
// console.log((<string>notSure).length); //* generic

//? void Type (Funktion ohne rückgabe)

// let f : number = 100
// function increase () : void{
//     f++
// }
// increase()

//? Never Type (Funktion die nie zurück gibt)

// function endlessLoop () : never {
//     while(true){
//         console.log("Hello");
//     }
// }

//? union Type

// let g : string | number = 100

// g = "Hello"

// g = true  //* Compiler error

//! Type Narrowing

// function checkNumber(n: string | number): void {

// if(typeof n == "number"){
//     //* n ist hier number
//     console.log(n**2);
// }else{
//     //* n ist hier string
//     console.log(n.length);
// }
// }
// checkNumber(2)
// checkNumber("TypeScript")

//! Type Aliases

// type neuType = number | string

// let h:neuType = 3

// h = "Hello"
// h = false //* Error

// let k: neuType = "hello"

//? Objects

// const car:{
//     make: string,
//     model:string,
//     year: number
//     readonly lastKm: number
//     features:string[]

// } = {
//     make : "Toyata",
//     model : "Corolla",
//     year : 2020,
//     lastKm : 10000,
//     features:["sunroof", "A/C"]
// }

// car.make = "Audi"
// car.make = false //* Error

// car.year = 2021
// car.lastKm = 11000 //* Error (nicht änderbar)

// type Car2 = {
//     make: string,
//     model:string,
//     year: number

// }

// const neuWagen : Car2 = {
//     make : "Audi",
//     model : "Q5",
//     year : 2020,
// }

//! String Literals

// type Car3 = "Fiat" | "BMW" | "Mercedes" | 2000

// let Car4: Car3 = "Fiat"
// let Car5: Car3 = "BMW"
// let Car6: Car3 = "Audi" //* Error
// let Car7: Car3 = 2000

//! Intersection

// type Book = {
//     book_id: number,
//     book_name: string
// }

// type Author = {
//    readonly auther_id : number,
//     author_name: string
// }
// type Product = Book & Author

// const book1:Product = {
//     book_id : 1234,
//     author_name : "Tolkien",
//     book_name : "Silmarillion",
//     auther_id : 123,
// }

// book1.book_id = 1234
// book1.auther_id =12345 //*Error

//! Functionen

// function gruß (nachricht:string, name: string):string {
//     return `${nachricht + " " + name}`
// }
// console.log(gruß("Guten Morgen", "Markus"));

// gruß("Markus") //*Error
// gruß("Hallo", "Markus") //* Error
// gruß(123, "Markus") //*Error

//? Arrow functions
// let multiply = (x: number, y: number): number => {
//   return x * y;
// };

//? Optional parameters
// function gruß2 (nachricht:string, name?: string):string {

//     if(!name){
//         name: "user"
//     }
//     return `${nachricht + " " + name}`
// }
// console.log(gruß2("Guten Morgen", "Markus"));
// console.log(gruß2("Guten Morgen"));

// function gruß3 (nachricht:string, name: string = "user"):string {

//     return `${nachricht + " " + name}`
// }
// console.log(gruß3("Guten Morgen", "Markus"));
// console.log(gruß3("Guten Morgen"));

//? Overloading

// function greet(name: string): string;
// function greet(name: string, age: number): string;

// function greet(name: string, age?: number): string {
//   if (age !== undefined) {
//     return `Hello my name is ${name} and I am ${age} years old.`;
//   } else {
//     return `Hello my name is ${name}.`;
//   }
// }
// console.log(greet("Mark"));
// console.log(greet("Mark", 40));
// console.log(greet("Mark", 40, 45)); //* Error

//? Rest Parameters

// function gruß5(nachricht: string, ...namen: string[]): string {
//   return `${nachricht + " " + namen.join(", ") + "!"}`;
// }

// console.log(gruß5("Hello"));
// console.log(gruß5("Hello", "Markus"));
// console.log(gruß5("Hello", "Markus", "Micheal"));


// function add(num1: number, ...numbers:number[]){
//     let total = num1
//     numbers.forEach(num=> total += num)
//     console.log(total);
// }

// add(5, "Hello") //* Error
// add(5)
// add(5,6)
// add(5,6,7,8,9,10)