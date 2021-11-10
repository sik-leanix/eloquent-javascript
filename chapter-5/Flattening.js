let arrays = [[1, 2, 3], [4, 5], [6]];
function mergeArrays(array) {
  return array.reduce((arrayElements, newArray) => arrayElements.concat(newArray))
}

console.log(mergeArrays(arrays))
// → [1, 2, 3, 4, 5, 6]