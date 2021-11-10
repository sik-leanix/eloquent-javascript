let array = [];

const range = (start, end) => {
  array = [];
  if (start < end) {
    for (start; start <= end; start++) {
      array.push(start);
    }
  } else {
    for (end; end <= start; end++) {
      array.unshift(end);
    }
  }
  return array;
};

const sum = (array) => {
  return array.reduce((total, num) => {return total += num;})
}


console.log(range(1, 10));
 // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
 // → [5, 4, 3, 2]
console.log(sum([10, 7, 3]));
// → 55
