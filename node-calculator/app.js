var readlineSync = require("readline-sync");

var num1a = readlineSync.question("please enter your first number");
var num1 = parseInt(num1a);
console.log(num1);
var num2a = readlineSync.question("please enter your second number");
var num2 = parseInt(num2a);
console.log(num2);

operator();

function operator() {
  const operator = readlineSync.question("please enter an operation to perform [add, sub, mul, div] ");
  if (operator === "add") {
    var answer = num1 + num2;
  }
  if (operator === "sub") {
    var answer = num1 - num2;
  }
  if (operator === "mul") {
    var answer = num1 * num2;
  }
  if (operator === "div") {
    var answer = num1 / num2;
  }
  console.log("the result is [" + answer + "]");
}
