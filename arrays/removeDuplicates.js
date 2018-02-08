// Write a JavaScript function removeDuplicates that removes duplicate values fom an array.

function removeDuplicates(arr) {
  for(i = 0; i < arr.length; i++) {
    for(j = i+1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice([i],1);
      }
    }
  }
  return arr;
}

// DO NOT DELETE
module.exports = removeDuplicates;
