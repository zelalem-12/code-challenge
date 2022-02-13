function numBST(nodeValues) {
  const ValidBSTCounts = [];

  const countTrees = (nodeValue) => {
    if (nodeValue <= 1) return 1;
    let count = 0;
    let left, right, root;
    for (root = 1; root <= nodeValue; root++) {
      left = countTrees(root - 1);
      right = countTrees(nodeValue - root);
      count += left * right;
    }
    return count;
  };

  for (let i = 0; i < nodeValues.length; i++) {
    ValidBSTCounts[i] = countTrees(nodeValues[i]) % (Math.pow(10, 8) + 7);
  }

  return ValidBSTCounts;
}

// test 0
console.log(numBST([1, 2, 3, 4, 100]));
