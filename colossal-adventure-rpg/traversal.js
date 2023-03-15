document.addEventListener("keydown", (event) => {
    if (event.key === "w") {
      console.log("up");
      upTraversal();
    }
    if (event.key === "s") {
      console.log("down");
      downTraversal();
    }
    if (event.key === "a") {
      console.log("left");
      leftTraversal();
    }
    if (event.key === "d") {
      console.log("right");
      rightTraversal();
    }
  });
  
  var player = {
    grid: 1,
  }


  var stage = document.getElementById("grid-container");
  player.grid = document.getElementById("1");
  
  function downTraversal(event) {
    let current = player.grid.id;
    var parsed = parseInt(current, 10);
    var next = parsed + 15;
    console.log(next);
    player.grid.removeAttribute("class");
    player.grid = document.getElementById("" + next + "");
    player.grid.classList.toggle("active-tile");
    console.log(player.grid);
  }
  
  function rightTraversal() {
    let current = player.grid.id;
    var parsed = parseInt(current, 10);
    var next = parsed + 1;
    player.grid.removeAttribute("class");
    player.grid = document.getElementById("" + next + "");
    player.grid.classList.add("active-tile");
    console.log(player.grid);
  }
  
  function leftTraversal() {
    let current = player.grid.id;
    var parsed = parseInt(current, 10);
    var next = parsed - 1;
    player.grid.removeAttribute("class");
    player.grid = document.getElementById("" + next + "");
    player.grid.classList.add("other-acitve-tile");
    console.log(player.grid);
  }
  
  function upTraversal() {
    let current = player.grid.id;
    var parsed = parseInt(current, 10);
    var next = parsed - 15;
    player.grid.removeAttribute("class");
    player.grid = document.getElementById("" + next + "");
    player.grid.classList.add("other-active-tile");
    console.log(player.grid);
  }    