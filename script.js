// // Task 1
// // code is working because of hoisting
// // and because it's using function definition, not expression
// printLines();


// function printLines() {
//   // result is undefined, because hoisting works
//   // only with declaration
//   // (variable is just declared, not initialized)
//   console.log(secondLine);

//   // result is content of variable
//   // because variable is declared and initialized

//   var firstLine = "I'm your first line!";
//   console.log(firstLine);

//   // result is content of variable
//   // because variable is declared and initialized

//   var secondLine = "I'm your second line!";
//   console.log(secondLine);
// }

// var printLines = function printLines() {
//   console.log(secondLine);

//   var firstLine = "I'm your first line!";
//   console.log(firstLine);

//   var secondLine = "I'm your second line!";
//   console.log(secondLine);
// }

// hoisting isn't working for function expression

// printLines();

// const printLines = function printLines() {
// //   console.log(secondLine);

//   let firstLine = "I'm your first line!";
//   console.log(firstLine);

//   let secondLine = "I'm your second line!";
//   console.log(secondLine);
// };

// it works when function is called after function definiton 

// const printLines = function printLines() {
// //   console.log(secondLine);

//   let firstLine = "I'm your first line!";
//   console.log(firstLine);

//   let secondLine = "I'm your second line!";
//   console.log(secondLine);
// };

// printLines();

// // Task 2

// // it works because with let we can overwrite content of variable

// const madeOfGlass = function() {
//     let thing = 'window';
//     thing = 'glass';

//     console.log(thing);
// }

// madeOfGlass();

// // it doesn't work because we can't assign new value to const

// const madeOfGlass = function() {
//     const thing = 'window';
//     thing = 'glass';

//     console.log(thing);
// }

// madeOfGlass();

// // Task 3

const arrayOne = ['one', 'two', 'three'];
const arrayTwo = ['three', 'four', 'five'];

const arrayMachine = function(arrayOne, arrayTwo) {
    let finalArray = arrayOne.concat(arrayTwo);
    finalArray = [...new Set(finalArray)];
    // finalArray = Array.from(finalArray);
    console.log(finalArray);
    finalArray.sort();
    console.log(finalArray);
    finalArray.reverse();
    console.log(finalArray);
}
arrayMachine(arrayOne, arrayTwo);
