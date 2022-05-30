const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
  test("should print a error message if the argument is not a number", () => {
    const value = "Error: the argument mus be a number";
    const result = fizzbuzz('16');
    expect(value).toBe(result);
  })

  test("should print 1 if they receive 1", () => {
    const value = 1;
    const result = fizzbuzz(1);
    expect(value).toBe(result);
  });

  test("should print fizz if they receive 3", () => {
    const value = "fizz";
    const result = fizzbuzz(3);
    expect(value).toBe(result);
  });

  test("should print fizz if they receive a multiple of 3", () => {
    const value = "fizz";
    const result = fizzbuzz(6);
    expect(value).toBe(result);
  });

  test("should print buzz if they receive 5", () => {
    const value = "buzz";
    const result = fizzbuzz(5);
    expect(value).toBe(result);
  });

  test("should print buzz if they receive a multiple of 5", () => {
    const value = "buzz";
    const result = fizzbuzz(10);
    expect(value).toBe(result);
  });

  test("should print fizzbuzz if they receive a multiple of 3 and 5", () => {
    const value = "fizzbuzz";
    const result = fizzbuzz(15);
    expect(value).toBe(result);
  });

  test("should print zero if they receive zero", () => {
    const value = 0;
    const result = fizzbuzz(0);
    expect(value).toBe(result);
  });
});
