var arrOfNumbers = [1, 2, 3];
var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

const summedUp = arrOfNumbers.reduce((final, num) => {
  final += num;
  return final;
});

console.log(summedUp);

const stringedUp = arrOfNumbers.reduce((final, num) => {
  final + toString(num);
  return final;
});

console.log(stringedUp);

var longString = "";

arrOfNumbers.forEach((num) => {
  longString = longString.concat(num);
});

console.log(longString);

const voterCount = voters.reduce(
  (final, i) => {
    if (i.voted) {
      final.voted++;
    } else {
      final.notVoted++;
    }
    return final;
  },
  { voted: 0, notVoted: 0 }
);

console.log(voterCount);

var voterCountObj = { didVote: 0, didNotVote: 0 };

function voterCountfunk(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].voted) {
      voterCountObj.didVote = voterCountObj.didVote + 1;
    } else {
      voterCountObj.didNotVote++;
    }
  }
}

voterCountfunk(voters);
console.log(voterCountObj);

var wishLSummed = wishlist.reduce((final, i) => {
  final += i.price;
  return final;
}, 0);
console.log(wishLSummed);

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

const concatArrays = arrays.reduce((final, i) => {
  final = final.concat(i);
  return final;
}, []);

console.log(concatArrays);

var voterData = {
  youngVotes: 0,
  youngPeople: 0,
  midVotes: 0,
  midPeople: 0,
  oldVotes: 0,
  oldPeople: 0,
};

const voterDataSort = voters.reduce((final, i) => {
  if (i.age >= 18 && i.age <= 25) {
    voterData.youngPeople++;
    if (i.voted === true) {
      voterData.youngVotes++;
    }
  }
  if (i.age >= 26 && i.age <= 36) {
    voterData.midPeople++;
    if (i.voted === true) {
      voterData.midVotes++;
    }
  }
  if (i.age >= 36 && i.age <= 55) {
    voterData.oldPeople++;
    if (i.voted === true) {
      voterData.oldVotes++;
    }
  }
});

console.log(voterData);
