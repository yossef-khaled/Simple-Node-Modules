var rectangle = require('./rectangle');

function solveRect(length, width) {
    rectangle(length, width, (err, rect) =>{
        if(err) {
            console.log(`ERROR: ${err.message}`);
            console.log("------------------------------------------");
        }   
        else {
            console.log(`Solving the rectangle with dimensions of l = ${length} and b = ${width}`);
            console.log(`The perimeter of the rectangle is ${rect.perimeter()}`);
            console.log(`The area of the rectangle is ${rect.area()}`);
            console.log("------------------------------------------");
        }
    });
}
console.log("This statement is written in the end of the code, but shown in the log first");

solveRect(2, 4);
solveRect(-6, -1);
solveRect(0, 5);
