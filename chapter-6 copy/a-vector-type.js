class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  plus(anotherVector) {
    const newX = this.x + anotherVector.x;
    const newY = this.y + anotherVector.y;
    return `Vec{x: ${newX} y: ${newY}}`
  }

  minus(anotherVector) {
    const newX = this.x - anotherVector.x;
    const newY = this.y - anotherVector.y;
    return `Vec{x: ${newX} y: ${newY}}`
  }
  
  get length() {
    const squareX = this.x * this.x;
    const squareY = this.y * this.y;
    return Math.sqrt(squareX + squareY)
  }
}


console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5