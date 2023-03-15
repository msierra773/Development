var arrayOfnumbers = [1, 3, 5, 2, 90, 20];
var arrOfStrings = ["dog", "wolf", "by", "family", "eaten"];

var byAgeAray = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

arrayOfnumbers.sort((a,b)=> b-a);
arrayOfnumbers.sort((a,b)=> b-a);

arrOfStrings.sort((a,b)=> a.length -b.length);

arrOfStrings.sort();

byAgeAray.sort((a,b)=> a.age-b.age)

