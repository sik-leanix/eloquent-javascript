let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(global.hasOwnProperty.call(map, "one"));
// → true