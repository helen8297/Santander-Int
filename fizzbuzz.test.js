const fizzbuzz = require("./fizzbuzz");

test("it returns 7 if not divisible by 3, 5 or 3 & 5", () => {
  expect(fizzbuzz(7)).toBe(7);
});

test("it returns 'Fizz' if n is divisible by 3", () => {
  expect(fizzbuzz(3)).toBe("Fizz");
});

test("it returns 'Buzz' if n is divisible by 5", () => {
  expect(fizzbuzz(5)).toBe("Buzz");
});

test("it returns 'FizzBuzz' if n is divisible by 5 and 3", () => {
  expect(fizzbuzz(15)).toBe("FizzBuzz");
});
