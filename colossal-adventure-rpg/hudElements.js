
//weapons
var sword = {power:3,}
var bow = {power:2,}
var unarmed = {power:1,}

//armor

var leather = {dr:3,}
var steel = {dr:5}
var no_armor = {dr:0,}

var player = {  name: "player",
                level: 1,
                health: 100,
                actionPoints: 10,
                armor: null,
                weapon: null,
                grid: document.getElementById("1") 
            };



    
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


