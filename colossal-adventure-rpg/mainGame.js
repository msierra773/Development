const readline = require("readline-sync");
/* #region junk */
var goldChain = {
  name: "gold chain",
  type: "junk",
  cost: 200,
};

var diamondOre = {
  name: "diamond ore",
  type: "junk",
  cost: 120,
};

var silverSpoon = {
  name: "silver spoon",
  type: "junk",
  cost: 30,
};

var silverFork = {
  name: "silver fork",
  type: "junk",
  cost: 15,
};

var ruby = {
  name: "ruby",
  type: "junk",
  cost: 35,
};

var rolex = {
  name: "rolex",
  type: "junk",
  cost: 115,
};

var junkArray = [goldChain, diamondOre, silverSpoon, silverFork, ruby, rolex];

/* #endregion */

/* #region Weapons */

var debugSword = {
  name: "debug sword",
  type: "weapon",
  power: 400,
  cost: 100,
};

var sword = {
  name: "sword",
  type: "weapon",
  power: 20,
  cost: 100,
};

var crossbow = {
  name: "crossbow",
  type: "weapon",
  power: 30,
  cost: 120,
};

var bow = {
  name: "bow",
  type: "weapon",
  power: 15,
  cost: 100,
};
var unarmed = {
  name: "fists",
  type: "weapon",
  power: 10,
  cost: 0,
};

var claws = {
  name: "claws",
  type: "weapon",
  power: 20,
  cost: 35,
};

var blunderbus = {
  name: "blunderbus",
  type: "weapon",
  power: 40,
  cost: 190,
};

var bite = {
  name: "bite",
  type: "weapon",
  power: 15,
  cost: 0,
};

var knife = {
  name: "knife",
  type: "weapon",
  power: 10,
  cost: 20,
};

var hatchet = {
  name: "hatchet",
  type: "weapon",
  power: 15,
  cost: 35,
};

var weaponsArray = [sword, bow, claws, blunderbus, hatchet, knife, crossbow];

/* #endregion */

/* #region  Armor set */

var leather_armor = {
  name: "leather armor",
  type: "armor",
  dr: 10,
  cost: 90,
};
var steel_armor = {
  name: "steel armor",
  type: "armor",
  dr: 20,
  cost: 200,
};
var no_armor = {
  name: "no armor",
  type: "armor",
  dr: 0,
  cost: 0,
};

var thickHide = {
  name: "thick hide armor",
  type: "armor",
  dr: 10,
  cost: 90,
};

var armorArray = [leather_armor, steel_armor, thickHide];

/* #endregion */

/* #region Characters */
var player = {
  name: "player",
  level: 1,
  health: 100,
  armor: steel_armor,
  weapon: debugSword,
  purse: 0,
  xp: 0,
  inventory: [silverFork, silverSpoon],
};

var bandit = {
  name: "Bandit",
  level: 1,
  health: 100,
  weapon: unarmed,
  armor: no_armor,
  inventory: [sword],
  purse: 36,
};

var lion = {
  name: "lion",
  level: 2,
  health: 100,
  weapon: claws,
  armor: no_armor,
  inventory: [leather_armor],
  purse: 67,
};

var deserter = {
  name: "desserter",
  level: 2,
  health: 100,
  weapon: sword,
  armor: leather_armor,
  inventory: [],
  purse: 21,
};

var unarmedDeserter = {
  name: "unarmed desserter",
  level: 2,
  health: 100,
  weapon: unarmed,
  armor: leather_armor,
  inventory: [],
  purse: 98,
};

var troll1 = {
  name: "Troll1",
  level: 2,
  health: 150,
  weapon: claws,
  armor: thickHide,
  inventory: [thickHide],
  purse: 76,
};

var knight = {
  name: "Knight",
  level: 3,
  health: 190,
  weapon: sword,
  armor: steel_armor,
  inventory: [steel_armor],
  purse: 54,
};

var horseMan = {
  name: "horseMan",
  level: 1,
  health: 120,
  weapon: sword,
  armor: thickHide,
  inventory: [thickHide],
  purse: 89,
};

var wolf1 = {
  name: "wolf1",
  level: 1,
  health: 80,
  weapon: claws,
  armor: thickHide,
  inventory: [thickHide],
  purse: 76,
};

var wolf2 = {
  name: "wolf2",
  level: 1,
  health: 80,
  weapon: claws,
  armor: thickHide,
  inventory: [thickHide],
  purse: 35,
};

var wolf3 = {
  name: "wolf3",
  level: 1,
  health: 80,
  weapon: claws,
  armor: thickHide,
  inventory: [thickHide],
  purse: 96,
};

var troll = {
  name: "Troll",
  level: 2,
  health: 150,
  weapon: claws,
  armor: thickHide,
  inventory: [thickHide],
  purse: 76,
};

var goblin = {
  name: "goblin",
  level: 2,
  health: 150,
  weapon: bow,
  armor: thickHide,
  inventory: [thickHide],
  purse: 156,
};

var allEnemines = [bandit, wolf1, wolf2, wolf3, knight, unarmedDeserter, deserter, lion, horseMan, troll, troll1, goblin];


//------------------------------------------
var CharacterTemplate = {
  name: "Template",
  level: 1,
  health: 100,
  weapon: unarmed,
  armor: no_armor,
  inventory: [],
  purse: 0,
};
//-----------------------------------------

var enemyArrayL1 = [];
var enemyArrayL2 = [];
var enemyArrayL3 = [];

sortEnemies();
function sortEnemies() {
  for (let i = 0; i < allEnemines.length; i++) {
    if (allEnemines[i].level === 1) {
      enemyArrayL1.push(allEnemines[i]);
    }
    if (allEnemines[i].level === 2) {
      enemyArrayL2.push(allEnemines[i]);
    }
    if (allEnemines[i].level === 3) {
      enemyArrayL3.push(allEnemines[i]);
    }
  }
}

// var enemyArray = [unarmedDeserter];
/* #endregion */

debug();
greeting();

/*--------------------------------------------------------------------------------NOTES-----------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

- the formula to calculate the attack damage is------> base Attack damage(10) x character level x weapon power  / 10 <---------------

- purchased item needs to be added to the players inventory and the coin that the item costed needs to be subtracted from the purse

- there is a type in the message after you win a fight where it tell you how much money that you won

- after the player equips a new weapon the weapon that was equiped needs to be returned to the inventory 

- after the enemies where sorted into leveled arrays the fucncction to pick a random enemy needs to be re written so that it picks a enemie according to level 

- there needs to be xp awarded after the player wins the battle

- after the player kills the knight there should be a message that tell them that they won and thatthe game is over before terminating the app

----------------------------------------------------------------------------------NOTES-----------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

function debug() {
  process.stdout.write("\033c");
  let enter = readline.question(" debug y/n : ");
  if (enter === "y") {
    console.log(
      "\n 1 - hotel\n 2 - inventory\n 3 - greeting\n 4 - trekthewoods\n 5 - enterStore \n 6 - choose enemy \n 7 - enemy encounter \n 8 - enemy fight\n 9 - deathMessage\n 10- random junk loot\n 11 - winMessage(); "
    );
    let nav = readline.question(" choose a function for debugging  number: ");
    if (nav === "1") {
      hotel();
    }
    if (nav === "2") {
      inventory();
    }
    if (nav === "3") {
      greeting();
    }
    if (nav === "4") {
      trekTheWoods();
    }
    if (nav === "5") {
      enterStore();
    }
    if (nav === "6") {
      chooseEnemy();
    }
    if (nav === "7") {
      enemyEncounter();
    }
    if (nav === "8") {
      enemyFight();
    }
    if (nav === "9") {
      deathMessage();
    }
    if (nav === "10") {
      randomJunkLoot();
    }
    if (nav === "11") {
      winMessage();
    }
  } else {
    return;
  }
}

function equiped() {
  process.stdout.write("\033c");
  console.log(player);
  console.log("::::::::::::::::::::::::::::::::::::::::::PLAYER EQUIPED:::::::::::::::::::::::::::::::::::::::::::");

  if (player.armor.name != "no armor") {
    console.log(player.armor);
  }
  if (player.weapon.name != "fists") {
    console.log(player.weapon);
  }

  var choice = readline.question("\n\n\n\ntype the name of the item you want to select type exit to go back\n\nHERE: ");

  if (choice === player.weapon.name) {
    var choice1 = readline.question("what would you like to do with the " + player.weapon.name + "\n\n <discard> <unequip> \n\nHERE: ");

    if (choice1 === "discard") {
      player.weapon = unarmed;
      equiped();
    }
    if (choice1 === "unequip") {
      player.inventory.push(player.weapon);
      player.weapon = unarmed;
      equiped();
    } else {
      equiped();
    }
  }

  if (choice === player.armor.name) {
    var choice1 = readline.question("what would you like to do with the " + player.armor.name + "\n\n <discard> <unequip> \n\nHERE: ");

    if (choice1 === "discard") {
      player.armor = no_armor;
      equiped();
    }
    if (choice1 === "unequip") {
      player.inventory.push(player.armor);
      player.armor = no_armor;
      equiped();
    }
  }

  if (choice === "exit") {
    inventory();
  } else {
    process.stdout.write("\033c");
    readline.question(" you need to makea choice from the selection");
    equiped();
  }
}

function hotel() {
  process.stdout.write("\033c");
  console.log(player);
  console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
  console.log("welcome to the hotel here you can have a full nights rest and your health will boosted by 50 points ");
  console.log("\n\n\n\n\n");
  var input = readline.question(
    "              WOULD YOU LIKE TO PAY 50 COIN FOR A FULL NIGHTS REST ? \n                         <yes>  <no>  <exit> \n\n\n                    type here : "
  );
  if (input === "exit") {
    townSquare();
  }
  if (input === "yes") {
    if (player.purse > 50) {
      var newPurse = player.purse - 50;
      player.purse = newPurse;
      var BolsteredPlayerHealth = player.health + 50;
      player.health = BolsteredPlayerHealth;
      readline.question("you awake well rested : press enter to exit");
      townSquare();
    } else {
      readline.question("you do not have enough coin to pay for this press enter");

      hotel();
    }
  }
  if (input === "no") {
    readline.question(" then what are you doing here please get out of here ");
    townSquare();
  } else {
    readline.question(" please make a choice from the options above");
    hotel();
  }
}

function inventory() {
  process.stdout.write("\033c");
  console.log(player);
  console.log("::::::::::::::::::::::::::::::::::::::::::PLAYER INVENTORY:::::::::::::::::::::::::::::::::::::::::");

  var selectItem = readline.question(
    "          Type the name of the item you wish to select \n\n          type exit to leave\n\n          type equiped to see equiped \n\n          Item:"
  );
  var itemSelected = "";
  if (selectItem === "print") {
    process.stdout.write("\033c");
    console.log("\n\n");
    console.log("                                        Player status");
    console.log("\n\n\n\n\n");
    console.log(player);
    readline.question("");
    inventory();
  }

  if (selectItem === "equiped") {
    equiped();
  }
  if (selectItem === "exit") {
    townSquare();
  }

  var arrayOfInvStrings = [];
  for (let i = 0; i < player.inventory.length; i++) {
    arrayOfInvStrings.push(player.inventory[i].name);
  }

  var searchInv = arrayOfInvStrings.filter(function (param) {
    return param === selectItem;
  });
  if (searchInv.length > 0) {
    for (let i = 0; i < player.inventory.length; i++) {
      if (player.inventory[i].name === selectItem) {
        itemSelected = player.inventory[i];
      }
    }
    doWith();
    function doWith() {
      console.log("\n\n");
      console.log("                      what would you like to do with the " + itemSelected.name);
      console.log("                             <equip>          <discard>          ");
      console.log("\n");
      var q1 = readline.question("                                Choice: ");

      if (q1 === "equip") {
        if (itemSelected.type === "weapon") {
          if(player.weapon.name != "fists")
          {player.inventory.push(player.weapon);}
          player.weapon = itemSelected;
        }
        if (itemSelected.type === "armor") {
          if(player.armor.name != "no armor")
          {player.inventory.push(player.armor)}
          player.armor = itemSelected;
        }
        inventory();
      }

      if (q1 === "discard") {
        for (let i = 0; i < player.inventory.length; i++) {
          if (player.inventory[i].name === itemSelected.name) {
            var x = [i];
            var y = readline.question("                are you sure ---- yes/no :");
            if (y === "yes") {
              player.inventory.splice(x, 1);
            } else {
              inventory();
            }
          }
        }
        readline.question("it has been done press enter :");
        inventory();
      }
    }
  } else {
    process.stdout.write("\033c");
    console.log("please choose from the items that are in your inventory");
    require("child_process").spawnSync("read _ ", { shell: true, stdio: [0, 1, 2] });
    inventory();
  }
}

function greeting() {
  process.stdout.write("\033c");
  console.log(
    " Hello weary Travler Your plane has Wrecked near a small town with no roads\n leading to it and its not on any of the maps that you remember. All of your\n maps and instruments where lost in the crash so you have no idea where you are.\n It seems that you have taken a bump on the head and cant seem to remeber much\n before the crash Its time to look for answers "
  );

  console.log(
    " \n \n _______ __   __ _______   _     _ _______ _______ ______  _______  \n |       |  | |  |       | | | _ | |       |       |      ||       |\n |_     _|  |_|  |    ___| | || || |   _   |   _   |  _    |  _____|\n --|   | |       |   |___  |       |  | |  |  | |  | | |   | |_____ \n --|   | |       |    ___| |       |  |_|  |  |_|  | |_|   |_____  |\n --|   | |   _   |   |___  |   _   |       |       |       |_____| |\n --|___| |__| |__|_______| |__| |__|_______|_______|______||_______|\n "
  );

  var greetingName = readline.question("what is your name? :");
  var answer = readline.question("your name is " + greetingName + " is that correct ? :");
  if (answer === "yes") {
    console.log("thank you for telling me your name");
    player.name = greetingName;
    townSquare();
  } else {
    console.log("Important your name is not the adventure will drive on regardless if the sands of time remember your name ");
    readline.question("   ");
    townSquare();
  }
}

function townSquare() {
  process.stdout.write("\033c");
  console.log(player);

  console.log("\n  ___    _  \n |===|  (_)  __  \n |= =|__   _|==|_ _\n |= =|::| |.|:|==|\n |=|=|::|_|.|:|==|_____(Pallet town.)_____");
  console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
  console.log(
    "you find yourself in the middle of town square in a strange town youve never been before.\nTo the left there is a general store to the right there is a hotel\nand at the end of the road there is a gate that leads to the woods\nmake a choice where do you want to go? type print to show player status\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::  "
  );

  console.log("              <store>               <trek woods>               <hotel>");
  console.log("              <print>               <inventory>          ");

  var choiceT = readline.question("\n\ntype your choice \n\n         Here : ");
  if (choiceT === "print") {
    process.stdout.write("\033c");
    console.log("\n\n");
    console.log("                                        Player status");
    console.log("\n\n\n\n\n");
    console.log(player);
    readline.question("");
    townSquare();
  }
  if (choiceT === "inventory") {
    inventory();
  }

  if (choiceT === "store") {
    process.stdout.write("\033c");
    console.log(
      "\n __________________________________________________________\n |_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_||\n |_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|| /|\n |_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_||/||\n |_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|||/|\n |_|_|_|_|_|_|_|_|_|     _      _     |_|_|_|_|_|_|_|_|_|_|/||\n |_| General store |    (_)    (_)    |General __ store |_|/||\n |_|.              |__________________|                 |_||/|\n |_|*`.            |_|      ||      |_|                 |_|/||\n |_| S `.          |_| llup || push |_|                 |_||/|\n |_|`. A `.        |_| tuo  ||  in  |_|                 |_|/||\n |_|  `. L `.      |_|     [||]     |_|                 |_||/|\n |_|    `. E `.    |_|      ||      |_|                 |_|/||\n |_|______`__*_`___|_|      ||      |_|________________|_||/|\n |_|_|_|_|_|_|_|_|_|_|______||______|_|_|_|_|_|_|_|_|_|_|_|/||\n __|_|_|_|_|_|_|_|_|_|_|______||______|_|_|_|_|_|_|_|_|_|_|_||/________\n  /     /     /     /     /     /     /     /     /     /     /     /\n /_____/_____/_____/_____/_____/_____/_____/_____/_____/_____/_____/\n ___________________________________________________________jro____\n"
    );
    readline.question(
      " you walk up to the door of a shop that is dimly lit by candles and the\n light can barely be seen from the outside you open the door and the\n bells on the door make a clanky rusted sound as old man at the counter\n peers up from a dusty book and says you better have the coin for whatever you touch "
    );
    enterStore();
  }
  if (choiceT === "trek woods") {
    process.stdout.write("\033c");
    console.log("you chose to go to trek the woods");
    console.log(
      "\n ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠓⠒⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⠀⠀⠀⠀⠀⢠⢤⣤⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠔⠒⠒⠲⠎⠀⠀⢹⡃⢀⣀⠀⠑⠃⠀⠈⢀⠔⠒⢢⠀⠀⠀⡖⠉⠉⠉⠒⢤⡀⠀⠀⠀⠀⠀\n ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠔⠚⠙⠒⠒⠒⠤⡎⠀⠀⠀⠀⢀⣠⣴⣦⠀⠈⠘⣦⠑⠢⡀⠀⢰⠁⠀⠀⠀⠑⠰⠋⠁⠀⠀⠀⠀⠀⠈⢦⠀⠀⠀⠀\n ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠁⠀⠀⠀⠀⠀⠀⢰⠃⠀⣀⣀⡠⣞⣉⡀⡜⡟⣷⢟⠟⡀⣀⡸⠀⡎⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⣻⠀⠀⠀⠀\n ⢰⠂⠀⠀⠀⠀⠀⠀⠀⣗⠀⠀⢀⣀⣀⣀⣀⣀⣓⡞⢽⡚⣑⣛⡇⢸⣷⠓⢻⣟⡿⠻⣝⢢⠀⢇⣀⡀⠀⠀⠀⢈⠗⠒⢶⣶⣶⡾⠋⠉⠀⠀⠀⠀⠀\n ⠈⠉⠀⠀⠀⠀⠀⢀⠀⠈⠒⠊⠻⣷⣿⣚⡽⠃⠉⠀⠀⠙⠿⣌⠳⣼⡇⠀⣸⣟⡑⢄⠘⢸⢀⣾⠾⠥⣀⠤⠖⠁⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⢀⠀⠀\n ⠀⠀⠀⢰⢆⠀⢀⠏⡇⠀⡀⠀⠀⠀⣿⠉⠀⠀⠀⠀⠀⠀⠀⠈⢧⣸⡇⢐⡟⠀⠙⢎⢣⣿⣾⡷⠊⠉⠙⠢⠀⠀⠀⠀⠀⢸⡇⢀⠀⠀⠀⠀⠈⠣⡀\n ⠀⠀⠀⠘⡌⢣⣸⠀⣧⢺⢃⡤⢶⠆⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣟⠋⢀⠔⣒⣚⡋⠉⣡⠔⠋⠉⢰⡤⣇⠀⠀⠀⠀⢸⡇⡇⠀⠀⠀⠀⠀⠀⠸\n ⠀⠀⠀⠀⠑⢄⢹⡆⠁⠛⣁⠔⠁⠀⣿⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⣿⢠⡷⠋⠁⠀⠈⣿⡇⠀⠀⠀⠈⡇⠉⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀\n ⠀⠀⠀⠀⠀⠀⠑⣦⡔⠋⠁⠀⠀⠀⣿⠀⠀⢠⡀⢰⣼⡇⠀⡀⠀⠀⣿⠀⠁⠀⠀⠀⠀⣿⣷⠀⠀⠀⠀⡇⠀⠀⢴⣤⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀\n ⠀⠀⠀⠀⠀⠀⢰⣿⡇⠀⠀⠀⠀⠀⣿⡀⠀⢨⣧⡿⠋⠀⠘⠛⠀⠀⣿⠀⠀⢀⠀⠀⠀⣿⣿⠀⠀⠀⠀⢲⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀\n ⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀⠀⠀⠀⢸⡧⡄⠀⠹⣇⡆⠀⠀⠀⠀⠀⣿⠀⢰⣏⠀⣿⣸⣿⣿⠀⠀⠀⠀⣼⠀⠀⠰⠗⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀\n ⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀⠀⠀⠀⢸⡇⣷⣛⣦⣿⢀⠈⠑⠀⢠⡆⣿⠐⢠⣟⠁⢸⠸⣿⣿⢱⣤⢀⠀⣼⠀⠀⢀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀\n ⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⢀⠀⠀⠀⢸⡇⠘⠫⣟⡇⠊⣣⠘⠛⣾⡆⢿⠀⠙⣿⢀⣘⡃⣿⣿⡏⠉⠒⠂⡿⠀⠰⣾⡄⠀⢸⡟⣽⣀⠀⠀⠀⠀⠀⠀\n ⠀⠀⠀⠀⠀⠀⠸⣿⡇⠀⠘⣾⠀⠀⢸⡇⢸⣇⡙⠣⠀⣹⣇⠀⠈⠧⢀⣀⣀⡏⣸⣿⣇⢹⣿⡇⢴⣴⣄⣀⡀⢰⣿⡇⠀⢸⣇⢿⡿⠀⠀⠀⠀⠀⠀\n ⠀⠀⠀⠀⠀⠀⠓⠁⠈⠻⢷⠾⠦⠤⠬⣅⣹⣿⣖⣶⣲⣈⡥⠤⠶⡖⠛⠒⠛⠁⠉⠛⠮⠐⢛⡓⠒⢛⠚⠒⠒⠒⠛⣚⣫⡼⠿⠿⣯⠛⠤⠀⠀⠀⠀\n ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠉⡉⠉⠁⠀⠀⠘⠓⠀⠀⠀⠀⠀⣀⣞⡿⡉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣶⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ "
    );

    if (player.weapon.name === "fists") {
      console.log(
        " before you proceed be aware that it is dangerouse ahead you should probably go back and equip armor and a weapon\n do you want to go back and geta weapon type yes to go back other wise press enter "
      );
      var caution = readline.question("answer :");

      if (caution === "yes") {
        townSquare();
      } else {
        trekTheWoods();
      }
    }

    trekTheWoods();
  }
  if (choiceT === "hotel") {
    process.stdout.write("\033c");
    console.log(
      " :::::::::::::::::::__________________________________________________:::::::::::::::::::::::::::: \n :::::::::::::::::/____________________________________________________\\:::::::::::::::::::::::::: \n ::::::::::::::::/______________________________________________________\\::::::::::::::::::::::::: \n :::::::::::::::/________________________________________________________\\:::::::::::::::::::::::: \n ::::::::::::::/__________________________________________________________\\::::::::::::::::::::::: \n :::::::::::::/____________________________________________________________\\:::::::::::::::::::::: \n ::::::::::::/______________________________________________________________\\::::::::::::::::::::: \n ::::::::::::|                                                               |:::::::::::::::::::: \n ::::::::::::|                                ________                       |:::::::::::::::::::: \n ::::::::::::|                                | HOTEL |                      |:::::::::::::::::::: \n ::::::::::::|    __________        VACANCY   ^^^^^^^^^                      |:::::::::::::::::::: \n ::::::::::::|   |    |    |        ______                                   |:::::::::::::::::::: \n ::::::::::: |   |    |    |       |      |        _____________             |:::::::::::::::::::: \n ::::::::::::|  :::::::::::::      |      |       |    ICE     |             |:::::::::::::::::::: \n ::::::::::::|                     |      |       |   |     |  |             |:::::::::::::::::::: \n ::::::::::::|_____________________|______|_______|___|_____|__|_____________|:::::::::::::::::::: \n "
    );

    readline.question("press enter ");
    hotel();
  } else {
    process.stdout.write("\033c");
    console.log("you need to make a choice from the selections");
    readline.question("press enter ");
  }

  townSquare();
}

function trekTheWoods() {
  levelup();
function levelup(){
  if(player.xp >= 3)
    {player.level = 2}
  if(player.xp >= 6)
    {player.level = 3}
}
  process.stdout.write("\033c");
  console.log(player);
  var walkQ = readline.question("hello " + player.name + " press w to walk :");
  if (walkQ === "w") {
    if (Math.random() * 100 < 33) {
      enemyEncounter();
    } else {
      process.stdout.write("\033c");
      console.log(player);
      console.log("you walk alone undisturbed");
      var spacer = readline.question("press enter to continue");
      process.stdout.write("\033c");
      trekTheWoods();
    }
  }
  if (walkQ === "exit") {
    townSquare();
  }
  if (walkQ === "print") {
    process.stdout.write("\033c");
    console.log("\n\n");
    console.log("                                        Player status");
    console.log("\n\n\n\n\n");
    console.log(player);
    readline.question("");
    trekTheWoods();
  } else {
    console.log("please press W to walk");
    readline.question("press enter to continue");
    trekTheWoods();
  }
}

function enterStore() {
  let storeInvetoryArray = weaponsArray.concat(armorArray);
  process.stdout.write("\033c");
  console.log(player);
  console.log("\n");
  console.log(
    "                                          Welcome to the shop                         \n           This is the stores inventory type the name of the item you want to purchase it  "
  );
  console.log("\n\n");
  for (let i = 0; i < storeInvetoryArray.length; i++) {
    console.log(storeInvetoryArray[i]);
  }
  console.log(" ");
  console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
  console.log(" ");
  console.log("                Enter name of item you want to purchase or type sell to sell your items \n                type exit to leave the store");
  console.log(" ");
  var itemToPurchase = readline.question("                Item : ");

  if (itemToPurchase === "exit") {
    process.stdout.write("\033c");
    townSquare();
  }

  if (itemToPurchase === "sell") {
    sellfunction();
  }

  function sellfunction() {
    process.stdout.write("\033c");
    console.log(player);
    console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
    var selling = readline.question("Type the name of the item in your inventory that you wish to sell \n\n\nHERE : ");
    if(selling === "exit")
    {
      enterStore();
    }
    var arrayOfInvStrings = [];
    for (let i = 0; i < player.inventory.length; i++) { // filter thtough the originaal array dont make a new on .name
      arrayOfInvStrings.push(player.inventory[i].name);
    }
    var itemSelected = "";
    var searchInv = arrayOfInvStrings.filter(function (param) {
      return param === selling;
    });

    if (searchInv.length > 0) {
      for (let i = 0; i < player.inventory.length; i++) {
        if (player.inventory[i].name === selling) {
          itemSelected = player.inventory[i];
        }
      }
    }
    var sellQ = readline.question("are you sure that you would like to sell the " + itemSelected.name + " \n type yes or no \n\n\nHERE : ");

    if (sellQ === "yes") {
      for (let i = 0; i < player.inventory.length; i++) {
        if (player.inventory[i].name === itemSelected.name) {
          var x = [i];
          var coin = player.inventory[i].cost;
          player.purse = player.purse + coin;

          player.inventory.splice(x, 1);

          readline.question("it has been done ");
          sellfunction();
        }
      }
    } else {sellfunction();}

    sellfunction();
  }

  var itemChosen = "";

  for (let i = 0; i < storeInvetoryArray.length; i++) {
    if (storeInvetoryArray[i].name === itemToPurchase) {
      itemChosen = storeInvetoryArray[i];
    }
  }
  purchase();
  function purchase() {
    if (player.purse > itemChosen.cost) {
      process.stdout.write("\033c");
      console.log(player);
      console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
      console.log("you have chosen to purchase the " + itemChosen.name + " are you sure  y/n :");
      console.log("\n\n");
      console.log(itemChosen);
      console.log("\n\n\n");
      var confirm = readline.question("                 Type here: ");
      if (confirm === "y") {
        process.stdout.write("\033c");
        console.log(player);
        console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
        console.log(itemChosen);
        console.log(itemChosen.cost + " has been removed from your purse and the " + itemChosen.name + " has been added to your inventory");
        player.inventory.push(itemChosen);
        player.purse = player.purse - itemChosen.cost;

        readline.question("\n                           press enter to return to the store ");
        enterStore();
      }
      if (confirm === "n") {
        enterStore();
      } else {
        enterStore();
      }

      require("child_process").spawnSync("read _ ", { shell: true, stdio: [0, 1, 2] });
    } else {
      process.stdout.write("\033c");
      console.log(player);
      console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
      console.log(" You do not have enough money to purchase that item");
      require("child_process").spawnSync("read _ ", { shell: true, stdio: [0, 1, 2] });
      enterStore();
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function chooseEnemy() {
  if (player.level === 1) {
    var randomInt = getRandomInt(enemyArrayL1.length);
    console.log(randomInt);
    return enemyArrayL1[randomInt];
  }
  if (player.level === 2) {
    var randomInt = getRandomInt(enemyArrayL2.length);
    console.log(randomInt);
    return enemyArrayL2[randomInt];
  }
  if (player.level === 3) {
    var randomInt = getRandomInt(enemyArrayL3.length);
    console.log(randomInt);
    return enemyArrayL3[randomInt];
  }
}

function enemyEncounter() {
  var randomEnemy = chooseEnemy();
  var encounter = readline.question("You have encountered a " + randomEnemy.name + " on the road < type f to fight > <tyepe r to run > ");
  if (encounter === "f") {
    console.log("then prepare for battle ");
    enemyFight(randomEnemy);
  }
  if (encounter === "r") {
    var chances = getRandomInt(100);
    if (chances < 50) {
      process.stdout.write("\033c");
      console.log(player);
      console.log("you have gotten away from the " + randomEnemy.name + " run while you can");

      var spacer = readline.question("press enter to continue");
      trekTheWoods();
    } else {
      process.stdout.write("\033c");
      console.log(player);
      console.log(" you cannot get away and will fight the " + randomEnemy.name + " no room for cowardice");
      readline.question("");
      enemyFight(randomEnemy);
    }
  }
  else{enemyEncounter();}
}

function randomJunkLoot() {
  var junkIndex = getRandomInt(junkArray.length);
  var JunkLoot = junkArray[junkIndex];
  return JunkLoot;
}

function enemyFight(enemy) {
  var localEnemy = enemy;
  localEnemy.inventory.push(randomJunkLoot());

  while (localEnemy.health > 0 && player.health > 0) {
    process.stdout.write("\033c");
    console.log(player);
    console.log(localEnemy);
    var question = readline.question(
      " the " + localEnemy.name + " lunges at you with his " + localEnemy.weapon.name + "  : < type f for chance to counter : type b to block >   "
    );
    if (question === "f") {
      if (Math.random() * 100 < 65) {
        var baseDamage = 10;
        var playerDamage = (baseDamage * player.level * player.weapon.power) / 10;
        playerDamage - localEnemy.armor.dr;
        console.log(
          "you parry his " + localEnemy.weapon.name + " away and hit him with " + player.weapon.name + " and get him for " + playerDamage + " damage"
        );
        var newEnemyHealth = localEnemy.health - playerDamage;
        localEnemy.health = newEnemyHealth;
      } else {
        var enemyDamage = (10 * localEnemy.level * localEnemy.weapon.power) / 10;
        console.log("your counter attack failed and the " + localEnemy.name + " hurt you for " + enemyDamage + " damage ");
        console.log("lets hope that you servive this");

        var newPlayerHealth = player.health - enemyDamage;
        player.health = newPlayerHealth;
      }
    }

    if (question === "b") {
      if (Math.random() * 100 < 45) {
        console.log("you blocked the attack");
      } else {
        var enemyDamage = (10 * localEnemy.level * localEnemy.weapon.power) / 10;
        console.log("your block was unsuccessful and the " + localEnemy.name + " hurt you for " + enemyDamage + " damage");
        var newPlayerHealth = player.health - enemyDamage;
        player.health = newPlayerHealth;
      }
    }
    var spacer = readline.question("press enter to continue");
  }
  if (player.health < 1) {
    deathMessage();
  } else {
    if(localEnemy.name === "knight")
          {winMessage();}
    process.stdout.write("\033c");
    player.xp = player.xp + 1;

    console.log(player);
    console.log(
      "you have won the fight with the " +
        localEnemy.name +
        " and you find a " +
        localEnemy.inventory[0].name +
        " and " +
        localEnemy.purse +
        " coin in his inventory"
    );
    console.log(" you drink a health potion and are back to full health");
    player.health = 100;

    var purseLoot = localEnemy.purse;
    console.log("\n\n\n\n " + player.name + " updated inventory");
    var newPlayerInventory = localEnemy.inventory.concat(player.inventory);
    player.inventory = newPlayerInventory;
    var newPlayrPurse = player.purse + purseLoot;
    player.purse = newPlayrPurse;

    console.log(player.inventory, player.purse);

    function spliceEn() {
      if (player.level === 1) {
        var index = enemyArrayL1.indexOf(enemy);
        enemyArrayL1.splice(index, 1);
      }
      if (player.level === 2) {
        var index = enemyArrayL2.indexOf(enemy);
        enemyArrayL2.splice(index, 1);
      }
      if (player.level === 3) {
        var index = enemyArrayL3.indexOf(enemy);
        enemyArrayL3.splice(index, 1);
      }
    }

    spliceEn();

    localEnemy = null;

    readline.question(" press enter to continue");
    trekTheWoods();
  }
}

function deathMessage() {
  process.stdout.write("\033c");
  for (let i = 0; i < 6; i++) {
    console.log(" ");
  }
  console.log("YOU HAVE DIED..your corpse will rot in the dark woods and no one will know  ");
  console.log(
    " ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠛⠛⠛⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⢀⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣄⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣿⣿⣶⣤⣤⠀⠀⣤⣤⣶⣿⣿⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠿⣿⡿⠟⠋⢸⣆⠙⠻⢿⣿⠟⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⣀⣀⠠⠀⠀⠙⠛⠃⠀⠀⣀⣀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢀⠀⠀⡀⢀⡀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
  );
  console.log(
    "\n _____   ___  ___  ___ _____   _____  _   _ ___________ \n |  __ \\ / _ \\ |  \\/  ||  ___| |  _  || | | |  ___| ___ \\ \n | |  \\// /_\\ \\| .  . || |__   | | | || | | | |__ | |_/ / \n | | __ |  _  || |\\/| ||  __|  | | | || | | |  __||    / \n | |_\\ \\| | | || |  | || |___  \\ \\_/ /\\ \\_/ / |___| |\\ \\ \n -\\____/\\_| |_/\\_|  |_/\\____/   \\___/  \\___/\\____/\\_| \\_| \n "
  );

  for (let i = 0; i < 5; i++) {
    console.log(" ");
  }
  readline.question(" press enter ");
  process.exit(1);
}

function winMessage(){
process.stdout.write("\033c");
console.log(" ____     ___                           ____              ___               \n `MM(     )M'                           `Mb(      db      )d' 68b           \n `MM.    d'                             YM.     ,PM.     ,P  Y89           \n `MM.  d'     _____   ___   ___        `Mb     d'Mb     d'  ___ ___  __   \n `MM d'     6MMMMMb  `MM    MM         YM.   ,P YM.   ,P   `MM `MM 6MMb  \n `MM'     6M'   `Mb  MM    MM         `Mb   d' `Mb   d'    MM  MMM9 `Mb \n MM      MM     MM  MM    MM          YM. ,P   YM. ,P     MM  MM'   MM \n MM      MM     MM  MM    MM          `Mb d'   `Mb d'     MM  MM    MM \n MM      MM     MM  MM    MM           YM,P     YM,P      MM  MM    MM \n MM      YM.   ,M9  YM.   MM           `MM'     `MM'      MM  MM    MM \n _MM_      YMMMMM9    YMMM9MM_           YP       YP      _MM__MM_  _MM_\n ")

readline.question(" press enter ");
process.exit(1);

}
