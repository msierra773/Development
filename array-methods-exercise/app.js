var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

var poppedVeggies = vegetables.pop();

console.log("remove last Item: " + poppedVeggies);

console.log(vegetables);

var shiftedFruit = fruit.shift();

console.log(fruit);

var orangeFind = fruit.indexOf("orange");
console.log("index of Orange: " + orangeFind);

fruit.push(orangeFind);

console.log(fruit);

var fruitLength = fruit.length;
console.log("Fruit Array length: " + fruitLength);

var vegieLength = vegetables.length;
vegetables.push(vegieLength);

var food = fruit.concat(vegetables);
console.log("Food Array: " + food);

food.splice(4, 2);
console.log(food);

var reverseFood = food.reverse();
console.log(reverseFood);

var joinedFood = food.join();
console.log("stringedArray " + joinedFood);
