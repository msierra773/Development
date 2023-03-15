var words = { array: ["$hello!", "%%^%%", "test!"], character: "!" };
var words2 = { array: ["#3", "$$$", "C%4!", "Hey!"], character: "!" };
var words3 = { array: ["yellow", "green", "^up^", "down", "dog"], character: "h" };
var arrayOne = [6, 13, 250, 3];
var arrayTwo = [3, 5, 2, 8, 1];
var arrayThree = [-13, 40, 3, 0, 19, 22];
var button = document.getElementById("button");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var checkDivisible = document.getElementById("cd-button");
var num1Input = document.getElementById("num1");
var num2Input = document.getElementById("num2");

button7.addEventListener("click", () => {
  document.location.reload();
});

button4.addEventListener("click", () => {
  checkArrays(words.array, words.character);
});
button5.addEventListener("click", () => {
  checkArrays(words2.array, words2.character);
});
button6.addEventListener("click", () => {
  checkArrays(words3.array, words3.character);
});

button.addEventListener("click", () => {
  findLargest(arrayOne);
});
button2.addEventListener("click", () => {
  findLargest(arrayTwo);
});
button3.addEventListener("click", () => {
  findLargest(arrayThree);
});
checkDivisible.addEventListener("click", () => {
  let input1 = num1Input.value;
  let input2 = num2Input.value;
  isDivisible(input1, input2);
});


function findLargest(array) {
  let maximum = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maximum) {
      maximum = array[i];
    }
  }

  console.log(maximum);
  return maximum;
}

function checkArrays(array, character) {
  for (let i = 0; i < array.length; i++) {
    let string = array[i];
    if (string.includes(character)) console.log(string);
  }
}

function isDivisible(num1, num2) {
  if (num1 % num2 === 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}
