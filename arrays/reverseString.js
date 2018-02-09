// Write a JavaScript function reverseString to reverse a given string.

function reverseString(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("")

  return joinArray;
}

// DO NOT DELETE
module.exports = reverseString;
