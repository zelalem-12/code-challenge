const fizzBuzz = (n) => {
  for (let index = 1; index <= n; index++) {
    const result =
      index % 3 === 0
        ? index % 5 === 0
          ? "FizzBuzz"
          : "Fizz"
        : index % 5 === 0
        ? "Buzz"
        : index;
    console.log(result);
  }
};

fizzBuzz(15);
