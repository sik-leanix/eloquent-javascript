const size = 8;
const emptyString = " ";
const string = "#";

function getGrid(size) {
  const grid = [];
  const actualSize = size / 2; 
  for (let i = 0; i < actualSize; i++) {
    let row = "";
    for (let j = 0; j < actualSize; j++) {
      if (i % 2 === 0) {
        row += " #";
      } else {
        row += "# ";
      }
    }
    grid.push(row)
  }
  return grid;
}

getGrid(size).forEach((row) => console.log(row));