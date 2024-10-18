// console.log("Hello world");
let selectedColor = 1 /* Color.Green */;
console.log(selectedColor); //output 1
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
var Tshirt;
(function (Tshirt) {
    Tshirt["Small"] = "S";
    Tshirt["Medium"] = "M";
    Tshirt["Large"] = "L";
})(Tshirt || (Tshirt = {}));
let userSize = Tshirt.Small;
console.log(userSize);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["ServerErrors"] = 401] = "ServerErrors";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.ServerErrors);
