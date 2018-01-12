const fizzbuzz = require('./index');

test('gets 1 and returns [1]', () => {
  expect(fizzbuzz(1)).toEqual([1]);
});

test('gets 2 and returns [1, 2]', () => {
  expect(fizzbuzz(2)).toEqual([1, 2]);
});

test('gets 3 and returns [1, 2, fizz]', () => {
  expect(fizzbuzz(3)).toEqual([1, 2, 'fizz']);
});

test('gets 5 and returns [1, 2, fizz, 4, buzz]', () => {
  expect(fizzbuzz(5)).toEqual([1, 2, 'fizz', 4, 'buzz']);
});

test('gets 6 and returns [1, 2, fizz, 4, buzz, fizz]', () => {
  expect(fizzbuzz(6)).toEqual([1, 2, 'fizz', 4, 'buzz', 'fizz']);
});

test('gets 15 and returns [1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz]', () => {
  expect(fizzbuzz(15)).toEqual([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz']);
});