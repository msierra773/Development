var loginBtn = document.getElementById("loginbtn");
loginBtn.addEventListener("click", ()=>
{console.log("hello")
    window.location.href = "login.html"

})


try {sum(9,"8");
function sum(x,y){
if(typeof x  === "number" && typeof y === "number" )
{return x+y}
else { throw "please use only numbers " }


}


}
catch(err){   
console.log(err);
}
finally {console.log( "i am running anyway")}


var x = 6

console.log(typeof x)