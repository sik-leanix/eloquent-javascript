const reverseArray = array => {
  let oldArray = array;
  let newArray = [];
  for (let i = 0; i < oldArray.length; i++) {
    newArray.unshift(array[i]);
  }
  return newArray
}

const reverseArrayInPlace = array => {
  const arrayLength = array.length 
  for (let i = 1; i < arrayLength + 1; i++) {
    array.push(array[arrayLength - [i]]);
    if (arrayLength * 2 === array.length) {
        array.splice(0, arrayLength);
        return array
    }
    
    // array.shift
    // console.log(array)
  } 
}

const reverseArrayInPlaceMemorySensitive = array => {
  for (let i = 0; i < (array.length / 2); i++) {
    const leftElementIndex = i;
    const rightElementIndex = array.length - (i + 1);
    const leftElement = array[leftElementIndex];
    const rightElement = array[rightElementIndex];

    array[leftElementIndex] = rightElement;
    array[rightElementIndex] = leftElement;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
//→ ["C", "B", "A"];
let array = [1, 2, 3, 4, 5, 12]; 
reverseArrayInPlace(array);
console.log(array);
 // → [5, 4, 3, 2, 1]

 let array2 = [100, 2, 3, 4, 5, 12]; 
 reverseArrayInPlaceMemorySensitive(array2);
console.log(array2);