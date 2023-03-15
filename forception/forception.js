var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];

var alphabet = "abcdefghijklmnopqrstuvwxyz";

function forception(param1, param2) {
  var names = param1;
  var splitted = param2.split("");
  var output = [];
  for (let i = 0; i < names.length; i++) {
    output.push(names[i]);
    for (let n = 0; n < 1; n++) {
      output.push(splitted);
    }
  }
  return output;
}

var forception = forception(people, alphabet);

console.log(forception);

// var splitted = alphabet.split("");
// console.log(splitted);
