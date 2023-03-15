function capsLower(param) {
  var output1 = param.toLowerCase();
  var output2 = param.toUpperCase();
  var output = output1 + output2;
  return output;
}

function stringCount(string) {
  var preOutput = string.length / 2;
  var outPut = Math.floor(preOutput);

  return outPut;
}



function sliceString(string) {
  var one = string.length / 2;
  var two = Math.floor(one);
  console.log(two);
  var output = string.slice(0, two);
  console.log(output);
}

function halfUpper(string) {
  var fullLength = string.length;
  var one = string.length / 2;
  var two = Math.floor(one);
  console.log(two);
  var output = string.slice(0, two);
  var outPut2 = output.toUpperCase();
  var outPut3 = string.slice(two, fullLength);
  var output4 = outPut3.toLowerCase();
  var lastOutput = outPut2 + output4;
  return lastOutput;
}
