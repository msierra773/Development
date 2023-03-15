



const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log("hello " + name + " you are trapped in a locked room you need to use you skills to get out ");

room();
function room() {
  console.log(
    "You get up form the floor after the remote controlled shackles open. In fron of you there is a  is a door with a hole that you cannot see inside of next to it you have the choice of looking around for the key or trying the door or sticking your hand in the hole.  "
  );
  const action = readline.question("try the door, look for the key , put hand in hole ? :");
  console.log("you chose to " + action);
  if (action === "put hand in hole") {
    console.log("you are now dead");
    const next = readline.question("press enter to try again");
    room();
  }
  if (action === "look for the key") {
    lookForKey();
    return;
  }

  if (action === "try the door") {
    const tryDoor = readline.question("you tried to open the door but it is locked");
    room();
  } else {
    const tryAgain = readline.question(" please try again");
    room();
  }
}

function lookForKey() {
  var choose = readline.question("where will you look, under the bed, in the night stand, on the shelf :");
  if (choose == "under the bed") {
    const next = readline.question("you look under the bed and find nothing : ");
    lookForKey();
  }

  if (choose === "in the night stand") {
    const nothingFound = readline.question("you chose to look in the night stand and you found nothing");
    lookForKey();
  }

  if (choose === "on the shelf") {
    console.log("you choose to look on the shelf and you find and old rusty skeleton key");
    foundKey();
  }
}

function foundKey() {
  console.log("you have found the key");
  const read = readline.question("will you , try the door or put hand in hole : ");
  if (read === "try the door") {
    console.log("congratualtions you have escaped the room and you are awesome");
    return;
  }

  if (read === "put hand in hole") {
    const tryAgain = readline.question("you are now dead : ");
    foundKey();
  }
}
