var array1 = [3, 6, 8, 2];
var animalsArr = ["dog", "wolf", "by", "family", "eaten", "camping"];
var arrOfPeople = [
  { name: "Angelina Jolie", member: true },
  { name: "Eric Jones", member: false },
  { name: "Paris Hilton", member: true },
  { name: "Kayne West", member: false },
  { name: "Bob Ziroll", member: true },
];

var arrOfPeopleAge = [
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 },
];

const arrayFiltered = array1.filter(i => i >= 5);
console.log(arrayFiltered);

const filterEven = array1.filter(i => i % 2 === 0);
console.log(filterEven);

const fiveCharOrLess = animalsArr.filter(i => i.length <= 5);
console.log(fiveCharOrLess);

const isMember = arrOfPeople.filter(i => i.member === true);
console.log(isMember);

const isOldEnough = arrOfPeopleAge.filter(i => i.age >= 18);
console.log(isOldEnough);
