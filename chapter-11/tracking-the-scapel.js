async function locateScalpel(nest) {
    let currentNest = nest.name
    for (;;) {
        let nextNest = await anyStorage(nest, currentNest, "scalpel")
      if (currentNest === nextNest) {
          return currentNest
      } else {
          currentNest = nextNest;
      }
    }
  }
  
  function locateScalpel2(nest) {
      function loop(current) {
          return anyStorage(nest, current, "scalpel").then(next => {
            if (next == current) {
                return current;
            } else {
                return loop(next);
            } 
      });
    }
    return loop(nest.name);
  }
  
  locateScalpel(bigOak).then(console.log);
  // → Butcher Shop
  locateScalpel2(bigOak).then(console.log);
  // → Butcher's Shop