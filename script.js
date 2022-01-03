

var op;
var result;

function calc(){
    var numOne = Number(document.getElementById("first-number").value);
    var numTwo = Number(document.getElementById("second-number").value);

    if ( op === '+') {
        result = numOne + numTwo
    }
    else if ( op === '-') {
        result = numOne - numTwo
    }
    else if ( op === '*') {
        result = numOne * numTwo
    }
    else if ( op === '/') {
        result = numOne / numTwo
    }
    document.getElementById("result").innerHTML = result;

}


























/*
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let mult= document.getElementById("mult");
let divide = document.getElementById("divide");
let equal = document.getElementById("equal");
let firstNumber = document.getElementById("first-number");
let secondNumber = document.getElementById("second-number");

let output = document.getElementById("out");

window.onload = plusNumbers;

function plusNumbers(firstNumber, secondNumber) {

    let result;
    result += firstNumber + secondNumber;
    console.log(result);

}
*/