var b4Count = localStorage.getItem("count");
var clickCount = parseInt(b4Count);
var clickCountBtn = document.getElementById("click-count")
var resetBtn = document.getElementById("reset");
var countContainer = document.getElementById("count")
countContainer.innerHTML = clickCount

resetBtn.addEventListener("click", ()=>{
    clickCount = 0
    countContainer.innerHTML = clickCount
    localStorage.setItem("count",clickCount)
})

clickCountBtn.addEventListener("click", ()=>{
    clickCount = clickCount + 1;
    countContainer.innerHTML = clickCount
    localStorage.setItem("count",clickCount)
})





  


