let globalVariable = "I am a global variable"

function myFunction(){
    console.log(globalVariable);

    let localVariable = "I am a local variable"
    console.log(localVariable);
}
function myOtherFunction(){
    console.log(globalVariable)
}

//myFunction();
//myOtherFunction();

//A function with a text as a parameter//

function greet(name){
    console.log("Hello," + name)
}

greet("Ryan");


//let names = ["Michal", "Professor", "NIck", "Kevin", "Paul"];

//for (let i = 0; i < names.length, i++){
//    greet(names[i]);
//}

//A function with numbers as a parameter//
/* Add Numbers num1 + num2*/

//function addNumbers(num1, num2){
//    let result = num1 + num2;
//   return result; 
//}

//let result1 = addNumbers(2, 3);
//console.log(result1)

/*Challange 1 = Double Number*/
function doubleNumbers(num){
    return num * 2; 
}

let result1 = doubleNumbers(2);
console.log(result1)
let result2 = doubleNumbers(9);
console.log(result2)
