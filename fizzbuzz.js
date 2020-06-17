function fizzbuzz(n) {
  const divisibleBy3 = n % 3 === 0;
  const divisibleBy5 = n % 5 === 0;
  if (divisibleBy3 && divisibleBy5) {
    return "FizzBuzz";
  }
  if (divisibleBy3) {
    return "Fizz";
  }
  if (divisibleBy5) {
    return "Buzz";
  }

  return n;
}

module.exports = fizzbuzz;
