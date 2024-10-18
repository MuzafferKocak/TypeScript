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
