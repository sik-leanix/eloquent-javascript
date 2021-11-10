// version 1
function every(array, test) {
    const arrayBoolean = array.map(test);
    return (arrayBoolean.includes(false) ? false : true);
}

console.log("Version 1")
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// version 2
function every2(array, test) {
    for (let i = 0; i < array.length; i++) {
        const fulfillsPredicate = test(array[i]);
        if (!fulfillsPredicate) {
            return false;
        }
        
    }
    return true
  }

console.log("Version 2")
function predicateFunction(n) {
    return n < 10;
}
console.log(every2([1, 3, 5], predicateFunction));
// → true
console.log(every2([2, 4, 16], predicateFunction));
// → false
console.log(every2([], predicateFunction));
// → true

// version 3
/**
 * To build every on top of some, we can apply De Morgan’s laws, which state that a && b equals !(!a || !b).
 * This can be generalized to arrays,
 * where all elements in the array match if there is no element in the array that does not match.
 */
function every3(array, predicate) {
    const containsAtLeastOneItemThatDoesNotFulfillPredicate = array.some(item => {
        return !predicate(item);
    });
    return !containsAtLeastOneItemThatDoesNotFulfillPredicate;
}

console.log("Version 3")
console.log(every3([1, 3, 5], n => n < 10));
// → true
console.log(every3([2, 4, 16], n => n < 10));
// → false
console.log(every3([], n => n < 10));
// → true