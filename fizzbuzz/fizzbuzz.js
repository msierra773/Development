
var button = document.getElementById("fizzbuzz");
button.addEventListener("click", ()=>{fizzbuzz()});


var tally = {
    fizzbuzz: 0 ,
    fizz: 0,
    buzz: 0
}


function fizzbuzz() {
  for (let i = 1; i < 101; i++) {

    if (i % 3 === 0) {
      console.log("fizz")
      tally.fizz ++;
    }
    if (i % 5 === 0) {
      console.log("buzz")
      tally.buzz ++;
    }
        if(i%5===0 && i%3 ===0){
        console.log("fizzbuzz")
        tally.fizzbuzz ++ ;}
     else {
      console.log(i);
    }
  }
  console.log(tally)
}

