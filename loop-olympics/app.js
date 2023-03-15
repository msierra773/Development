var arrayOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const fruit = ["banana", "orange", "apple", "kiwi"];
const fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
var newFruit = [];
const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor",
  },
  {
    name: "Justin Bieber",
    occupation: "Singer",
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician",
  },
  {
    name: "Oprah",
    occupation: "Entertainer",
  },
];
var loopGrid = [];
var occupationsArray = [];
var names = [];


function loopGridFunk()
{
    for(let i = 0; i < 3 ; i++){
        for(let i = 0; i < 3; i++)
        {   loopGrid.push([]);
            for(let i = 0; i <3; i ++)
            {loopGrid.push(0)};
        }

    }
}


function loopEveryOtherName(param) {
    for (let i = 0; i < param.length; i+= 2) {
      names.push(param[i].name);
    }
  }

function loopNames(param) {
  for (let i = 0; i < param.length; i++) {
    names.push(param[i].name);
  }
}

function loopOccupations(param) {
  for (let i = 0; i < param.length; i++) {
    occupationsArray.push(param[i].occupation);
  }
}

function printFruits() {
  for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
  }
}

function loopingBackwards() {
  for (let i = arrayOfNumbers.length - 1; i >= 0; i--) {
    console.log(arrayOfNumbers[i]);
  }
}

function looping() {
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    console.log(arrayOfNumbers[i]);
  }
}

var push0_9 = [];
function pushNumbers() {
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    push0_9.push(arrayOfNumbers[i]);
  }
}

function evenNumbers() {
  for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

function pushFruits(param) {
  for (let i = 0; i < param.length; i += 2) {
    var pushedFruits = param[i];
    newFruit.push(pushedFruits);
  }
}
