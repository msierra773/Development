var arrayOfNumbers = [2, 5, 100];
var arrayOfNames = ["john", "JACOB", "jinGleHeimer", "schmidt"];
var arrayOfObjects = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
];

const newArr = arrayOfNumbers.map((num) => {
  return num * 2;
});

const stringifyArr = arrayOfNumbers.map((num) => {
  return num.toString();
});

const uppercasaestring = arrayOfNames.map((num) => {
  var letter = num.charAt(0).toUpperCase();
  var rest = num.slice(1).toLowerCase();
  return letter + rest;
});

const arrOfObjNames = arrayOfObjects.map((obj) => {
  let res = obj.name;
  return res;
});

console.log(arrOfObjNames);

const matrixAge = arrayOfObjects.map((num) => {
  if (num.age >= 18) {
    return num.name + "can go to the matrix";
  } else {
    return num.name + "is under age";
  }
});

console.log(matrixAge);

const h1h2Names = arrayOfObjects.map((num) => {
  var name = "<h1>" + num.name + "</h1>";
  var age = "<h2>" + num.age + "</h2>";
  return name + age;
});

console.log(h1h2Names);


