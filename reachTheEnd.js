function reachTheEnd(grid, maxTime) {
  const rowLength = grid.length;
  const columnLength = grid[0].length;

  for (let rowIndex = 0; rowIndex < rowLength; rowIndex++) {
    grid[rowIndex] = grid[rowIndex].split("");
    for (let elementIndex = 0; elementIndex < columnLength; elementIndex++) {
      if (grid[rowIndex][elementIndex] === "#") {
        grid[rowIndex][elementIndex] = Number.MAX_VALUE;
      } else {
        grid[rowIndex][elementIndex] = 1;
      }
    }
  }

  for (let rowIndex = 0; rowIndex < rowLength; rowIndex++) {
    for (let elementIndex = 0; elementIndex < columnLength; elementIndex++) {
      if (rowIndex === 0) {
        if (elementIndex === 0) grid[rowIndex][elementIndex] = 0;
        else grid[rowIndex][elementIndex] += grid[rowIndex][elementIndex - 1];
      } else if (elementIndex === 0) {
        grid[rowIndex][elementIndex] += grid[rowIndex - 1][elementIndex];
      } else {
        grid[rowIndex][elementIndex] += Math.min(
          grid[rowIndex - 1][elementIndex],
          grid[rowIndex][elementIndex - 1]
        );
      }
    }
  }
  const reachTime = grid[rowLength - 1][columnLength - 1];

  return reachTime <= maxTime ? "yes" : "No";
}

const grid1 = ["..##", "#.##", "#..."];
const grid2 = [".#", "#."];
const grid3 = ["..", ".."];

console.log(reachTheEnd(grid3, 3));
