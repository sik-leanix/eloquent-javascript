const countBs = (word) => {
    const letters = word.length;
    let counter = 0;
  for (let i = 0; i < letters; i++) {
      if (word[i] === 'B') {
            counter++; 
      } 
  }
return counter
}

const countChar = (word, character) => {
    const letters = word.length;
    let counter = 0;
  for (let i = 0; i < letters; i++) {
      if (word[i] === character) {
            counter++; 
      } 
  }
return counter
}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkkkkkkerlak", "t"));
// → 0