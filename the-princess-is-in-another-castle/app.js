const readline = require("readline-sync");

let player = makeChar();

console.log(player);
readline.question("");
letsPlay();

function letsPlay() {
  process.stdout.write("\033c");
  console.log(player);
  readline.question("");
  let randInt = randomNumber();
  if (randInt === 0) {
    gotHit();
    letsPlay();
  }
  if (randInt === 1) {
    gotPoweredUp();
    letsPlay();
  }
  if (randInt === 2) {
    addCoin();
    letsPlay();
  } else {
    letsPlay();
  }
}

function gotPoweredUp() {
  if (player.status === "small") {
    player.status = "big";
  }
  if (player.status === "big") {
    player.status = "poweredUp";
  }
  if (player.status === "poweredUp") {
    player.status === "poweredUp";
  }
}

function addCoin() {
  player.totalCoins = player.totalCoins + 1;
}

function makeChar() {
  class Player {
    constructor(name, totalCoins, status, hasStar) {
      this.name = name;
      this.totalCoins = totalCoins;
      this.status = status;
      this.hasStar = hasStar;
    }
  }
  let name = chooseChar();
  let player = new Player(name, 0, "small", false);
  return player;
}

function randomNumber() {
  return Math.floor(Math.random() * 3);
}

function gotHit() {
  if (player.status === "poweredUp") {
    console.log("you have been damaged");
    player.status = "big";
  }
  if (player.status === "big") {
    console.log("you have been damaged");
    player.status = "small";
  }

  if (player.status === "small") {
    deathMessage();
  }
}

function totalCoins() {
  let coins = readline.question("");
}

function chooseChar() {
  process.stdout.write("\033c");
  let name = readline.question("choose mario or luigi : ");
  if (name === "mario") {
    return "Mario";
  }
  if (name === "luigi") {
    return "luigi";
  } else {
    process.stdout.write("\033c");
    console.log("please choose mario or luigi");
    readline.question("");
    chooseChar();
  }
}

function deathMessage() {
  console.log("YOU HAVE DIED..your corpse will rot in the dark woods and no one will know  ");
  console.log(
    " ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠛⠛⠛⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⢀⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣄⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣿⣿⣶⣤⣤⠀⠀⣤⣤⣶⣿⣿⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠿⣿⡿⠟⠋⢸⣆⠙⠻⢿⣿⠟⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⣀⣀⠠⠀⠀⠙⠛⠃⠀⠀⣀⣀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢀⠀⠀⡀⢀⡀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
  );
  console.log(
    "\n _____   ___  ___  ___ _____   _____  _   _ ___________ \n |  __ \\ / _ \\ |  \\/  ||  ___| |  _  || | | |  ___| ___ \\ \n | |  \\// /_\\ \\| .  . || |__   | | | || | | | |__ | |_/ / \n | | __ |  _  || |\\/| ||  __|  | | | || | | |  __||    / \n | |_\\ \\| | | || |  | || |___  \\ \\_/ /\\ \\_/ / |___| |\\ \\ \n -\\____/\\_| |_/\\_|  |_/\\____/   \\___/  \\___/\\____/\\_| \\_| \n "
  );

  readline.question("");
  process.exit(1);
}
