function carParkingRoof(cars, k) {
  cars.sort((a, b) => a - b);

  const number_of_cars = cars.length;
  let shortestRoof = cars[k - 1] - cars[0] + 1;
  for (let i = 1; i <= number_of_cars - k; i++) {
    if (cars[k + i - 1] - cars[i] + 1 < shortestRoof) {
      shortestRoof = cars[k + i - 1] - cars[i] + 1;
    }
  }
  return shortestRoof;
}

// Testing the code
const test1 = "[6, 2, 12, 7], 3";
const test2 = "[2, 10, 8, 17], 3";
const test3 = "[1, 2, 3, 10], 4";
console.log(carParkingRoof([6, 2, 12, 7], 3));
