var header = document.getElementById("header");

header.innerHTML = `<span><center><h1>JavaScript Made This</h1></center></span>
<span><center><h3><span style= "color: red;">Marco Sierra</span><span> wrote the Java Script</span></center></h3></span>`;

var messages = document.getElementsByClassName("message");
function loopElements(looping) {
  for (let index = 0; index < looping.length; index++) looping[index].innerHTML = "nice mesages only";
}
loopElements(messages);

var clearBtn = document.getElementById("clear-button");

clearBtn.addEventListener("click", () => {
  clearTxt(messages);
});

function clearTxt(param) {
  for (let i = 0; i < param.length; i++) param[i].innerHTML = null;
}

var rightMessages = document.getElementsByClassName("right");
var leftMessages = document.getElementsByClassName("left");
var dropDown = document.getElementById("theme-drop-down");

var leftMsg = document.getElementById("mone");
var rightMsg = document.getElementById("mone2");

function bgColorLeft(msg) {
  for (let i = 0; i < msg.length; i++) msg[i].style.backgroundColor = "black";
}

function bgColorRight(msg) {
  for (let i = 0; i < msg.length; i++) msg[i].style.backgroundColor = "red";
}
function bgColorLeft2(msg) {
  for (let i = 0; i < msg.length; i++) msg[i].style.backgroundColor = "brown";
}

function bgColorRight2(msg) {
  for (let i = 0; i < msg.length; i++) msg[i].style.backgroundColor = "blue";
}

function dropDownMenu() {
  if ((dropDown.value === "theme-two")) {
    bgColorLeft(leftMessages);
    bgColorRight(rightMessages);
  } else if ((dropDown.value === "theme-one")) {
    bgColorLeft2(leftMessages);
    bgColorRight2(rightMessages);
  }
}
dropDown.addEventListener("change", () => {
  dropDownMenu();
});

var smsInput = document.getElementById("input");

document.getElementById("send").addEventListener("click", (e) => {
  e.preventDefault();
  appendToSms();
});

function appendToSms() {
  var divi = document.createElement("div");
  divi.innerHTML = smsInput.value;
  divi.classList.add("right");
  divi.classList.add("message");
  document.getElementById("sms").appendChild(divi);
}
