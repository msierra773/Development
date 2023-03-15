var peopleArray = [
  { firstName: "Sarah", lastName: "Palin", age: 47 },
  { firstName: "Frank", lastName: "Zappa", age: 12 },
  { firstName: "Rick", lastName: "Sanchez", age: 78 },
  { firstName: "Morty", lastName: "Smith", age: 29 },
  { firstName: "Kyle", lastName: "Mooney", age: 27 },
  { firstName: "Pasha", lastName: "Datsyuk", age: 13 },
  { firstName: "Lev", lastName: "Tolstoy", age: 82 },
];

function sortedOfAge(arr) {
  const filtered = arr.filter((i) => i.age >= 18);
  const sorted = filtered.sort((a, b) => {
    if (a.lastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    }
    return 0;
  });
  console.log(sorted);

  var output = [];
  
  sorted.forEach((x) => {
    output.push("<li>" + x.firstName + " " + x.lastName + " is " + x.age + "</li>");
  });

  console.log(output);
}

sortedOfAge(peopleArray);

const numarr = [3,4,5]

let numarr2 = numarr.reduce((final,curr)=> final += curr,0)

console.log(numarr2)