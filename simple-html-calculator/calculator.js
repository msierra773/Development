var addbtn = document.getElementById("addButton");
var subBtn = document.getElementById("subtractButton");
var multBtn = document.getElementById("multBtn");

addbtn.addEventListener("click", () => {
  add();
});
subBtn.addEventListener("click", () => {
  subtract();
});
multBtn.addEventListener("click", () => {
  multiply();
});

function add() {
  var addOne = document.getElementById("add1").value;
  var addTwo = document.getElementById("add2").value;
  var sum = parseInt(addOne) + parseInt(addTwo);
  var h1 = document.createElement("h1");
  h1.innerHTML = sum;
  document.getElementById("addBox").append(h1);
  document.getElementById("add1").value = "";
  document.getElementById("add2").value = "";
}

function subtract() {
  var sub1 = document.getElementById("sub1").value;
  var sub2 = document.getElementById("sub2").value;
  var sum = parseInt(sub1) - parseInt(sub2);
  var h1 = document.createElement("h1");
  h1.innerHTML = sum;
  document.getElementById("subBox").append(h1);
  document.getElementById("sub1").value = "";
  document.getElementById("sub2").value = "";
}

function multiply() {
  var mult1 = document.getElementById("mult1").value;
  var mult2 = document.getElementById("mult2").value;
  var product = parseInt(mult1) * parseInt(mult2);
  var h1 = document.createElement("h1");
  h1.innerHTML = product;
  document.getElementById("multBox").append(h1);
  document.getElementById("mult1").value = "";
  document.getElementById("mult2").value = "";
}
