const min = (a, b) => {
    if (a > b) {
      return b
    } else {
      return a 
    }
  }
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10