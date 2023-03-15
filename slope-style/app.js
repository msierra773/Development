var animalsArray = [];

function collectAnimals(...rest) {
  animalsArray.push(rest);
  console.log(animalsArray);
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");

function combineFruit(fruits, sweets, vegetables) {
  let fruity = {
    fruits: fruits,
    sweets: sweets,
    vegetables: vegetables,
  };
  return fruity;
}

var fruity = combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]);

console.log(fruity);

function parseSentence({ location, duration }) {
  return `We're going to have a good time in ${location} for ${duration}`;
}

var parsy = parseSentence({
  location: "Burly Idaho",
  duration: "2 weeks",
});

var things = [1, 2, 3];
var [a, b, c] = things;

console.log(parsy);

function returnFirstItem(param) {
  const firstItem = a;

  return firstItem;
}

console.log(returnFirstItem(things));

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
var [c, d, e, f, g] = favoriteActivities;

function returnFavorite(arr) {
  return `my top three favorite activities are ${c} ${d} ${e} `;
}

console.log(returnFavorite(favoriteActivities));

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

function combineAnimals(...params) {
  let final = params.reduce(flatten, []);
  function flatten(a, b) {
    return a.concat(b);
  }
  return final;
}

var final = combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);
console.log(final)


function product(...param){
  let final = param.reduce((acc,number)=>{
    return acc * number 
  },1)
   return final
}

function unshift(...param) {
  let result = param.reduce(flatten,[]);
  function flatten(a,b){
    return a.concat(b);
  }
  return result
}

var yabadoo = unshift(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

console.log(yabadoo);



function populateNames(names){
  return names.map((name)=>{
    let newName = name.split(" ")
    


  })
}








function splitNames(param){
  let final = param.split(" ");

  return final[0]
}

var marco = splitNames("marco Sierra")
 
console.log(marco)