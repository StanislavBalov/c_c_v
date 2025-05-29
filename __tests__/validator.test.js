import validCard from '../src/validator';

test('valid Visa card', () => {
  expect(validCard('4539148803436467')).toBe(true);
});

test('invalid card number', () => {
  expect(validCard('1234567890123456')).toBe(false);
});

test('card with spaces and dashes', () => {
  expect(validCard('4539-1488 0343-6467')).toBe(true);
});
