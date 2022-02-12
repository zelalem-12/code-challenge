function rotLeft(a, d) {
  // Write your code here
  const length = a.length;
  // the starting point of the array after dth rotation
  const rotStartPoint = d % length;
  const result = [];
  for (let i = 0; i < length; i++) {
    result[i] = a[(rotStartPoint + i) % length];
  }
  return result;
}
function rotRight(a, d) {
  // Write your code here
  const length = a.length;
  // The position of the first elent after d rotaion
  const rotStartPoint = d % length;
  const result = [];
  for (let i = 0; i < length; i++) {
    result[(rotStartPoint + i) % length] = a[i];
  }
  return result;
}

console.log("expected", [6, 9, 2, 4, 5]);
console.log(rotRight([2, 4, 5, 6, 9], 2));

console.log("expected", [4, 5, 6, 9, 2]);
console.log(rotRight([2, 4, 5, 6, 9], 4));
