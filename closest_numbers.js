function closestNumbers(numbers) {
  numbers.sort((a, b) => a - b);

  let minDiff = Number.MAX_VALUE;
  let closestNums = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    const diff = numbers[i + 1] - numbers[i];
    if (diff < minDiff) {
      minDiff = diff;
      closestNums = [numbers[i], numbers[i + 1]];
    } else if (diff === minDiff) {
      closestNums.push(numbers[i], numbers[i + 1]);
    }
  }

  for (let i = 0; i < closestNums.length; i += 2) {
    console.log(closestNums[i], closestNums[i + 1]);
  }
}

// example
closestNumbers([6, 2, 4, 10]);

// test case 0
closestNumbers([4, 2, 1, 3]);

// test case 1
closestNumbers([4, -2, -1, 3]);
