var message = document.getElementById("message");
var EncryptBtn = document.getElementById("Ebtn");
EncryptBtn.addEventListener("click", () => {
  encrypt2(message.value);
  message.value = "";
});

var answer = document.getElementById("answer");
var decryptBtn = document.getElementById("debtn");
decryptBtn.addEventListener("click", () => {
  decrypt(answer.value);
});

function encrypt2(message) {
  let alphabet = " abcdefghijklmnopqrstuvwxyz";
  let alphaArray = alphabet.split("");
  let messageArray = message.split("");
  let encryptedMessage = [];
  for (let i = 0; i < messageArray.length; i++) {
    let letter = messageArray[i];
    for (let i = 0; i < alphaArray.length; i++) {
      if (alphaArray[i] === letter) {
        let number = alphaArray.indexOf(alphaArray[i]);
        encryptedMessage.push(number * 9);
      }
    }
  }
  let encryptedMessage2 = encryptedMessage.toString();
  let encryptedMessage3 = encryptedMessage2.replaceAll(",", "E");
  console.log(encryptedMessage3);
}

function decrypt(message) {
  let alphabet = " abcdefghijklmnopqrstuvwxyz";
  let alphaArray = alphabet.split("");
  let messageArray = message.split("E");
  let decryptedMessage = [];
  for (let i = 0; i < messageArray.length; i++) {
    messageArray[i].replace("E", "");
  }
  let messageArray2 = [];
  for (let i = 0; i < messageArray.length; i++) {
    let parsedNum = parseInt(messageArray[i]);
    let newNumber = parsedNum / 9;
    messageArray2.push(newNumber);
  }
  for (let i = 0; i < messageArray2.length; i++) {
    let letter = alphaArray[messageArray2[i]];
    decryptedMessage.push(letter);
  }
  let stringedMessage = decryptedMessage.toString();
  let finalMesage = stringedMessage.replaceAll(",", "");
  console.log(finalMesage);
}
