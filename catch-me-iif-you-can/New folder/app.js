// write a function (oneWordOnly) that takes an array of strings, and
// returns an array of just the strings with one word in them

function oneWordOnly(words) {
  const output = words.filter((i)=> i.indexOf(" ") === -1 )  
  return output;
}

console.log(oneWordOnly(["bird", "bird dog", "humming bird", "dog"])); //=>["bird", "dog"]
console.log(oneWordOnly(["house", "tiny mansion", "humming bird", "fish", "word"])); //=>["house", "fish", "word"]
