console.log("Hello");
function calculateArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "rectangle":
            return shape.width * shape.height;
        default:
            throw new Error("Invalid Shape");
    }
}
const myCircle = { kind: "circle", radius: 10 };
const myRect = { kind: "rectangle", width: 4, height: 5 };
console.log(calculateArea(myCircle));
console.log(calculateArea(myRect));
