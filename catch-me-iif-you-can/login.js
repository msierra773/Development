var subBtn = document.getElementById("submitBtn");
var unInput = document.getElementById("userName");
var pwInput = document.getElementById("password");

pwInput.addEventListener("keypress",
  (event) => {
    var name = event.key;
    var code = event.code;
    if (code === "Enter") {
      login();
    }
  },
  false
);



subBtn.addEventListener("click", () => {
  login();
});

function login() {
try{

  if (unInput.value === "msierra773" && pwInput.value === "password") {
    window.location.href = "landingPage.html";
  } else {
    throw "wrong credentials";
  }
}
catch(err)
{console.log(err + " there is the code")}
}
