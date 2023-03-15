var goombaInput = document.getElementById("goombas-input");
var bombInput = document.getElementById("bob-omb-input");
var cheepInput = document.getElementById("cheep-cheep-input");

var goombaBtn = document.getElementById("goombaBtn");
var bombBtn = document.getElementById("bombBtn");
var cheepBtn = document.getElementById("cheepBtn");

var gTotal = "";
var bTotal = "";
var cTotal = "";

goombaInput.addEventListener("change", () => {
  let numberToPin = goombaInput.value * 5;
  document.getElementById("goomba-coin-count").innerHTML = "Coins\n " + numberToPin;
  gTotal = numberToPin;
  total();
});

bombInput.addEventListener("change", () => {
  let numberToPin = bombInput.value * 7;
  document.getElementById("bomb-coin-count").innerHTML = "Coins\n " + numberToPin;
  bTotal = numberToPin;
  total();
});

cheepInput.addEventListener("change", () => {
  let numberToPin = cheepInput.value * 11;
  document.getElementById("cheep-coin-count").innerHTML = "Coins\n " + numberToPin;
  cTotal = numberToPin;
  total();
});

function total() {
  let total = gTotal + bTotal + cTotal;
  let stringTotal = total + " Coins";
  document.getElementById("totalPin").innerHTML = stringTotal;
}
