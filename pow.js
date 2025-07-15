function pow(x, y) {
  let result = 1;
  for (let i = 0; i < y; i++) {
    result *= x;
    console.log("Усередині циклу i =", i, ", result =", result);
  }
  console.log("Зовні циклу, результат =", result);
  return result;
}

pow(2, 3);
