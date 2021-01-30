import { generateRandomNumber } from './generateRandomNumber.js';

test('関数が数値を返すこと', () => {
  const result = generateRandomNumber();
  expect(result).not.toBeNaN();
});

test('関数の返す数値が正の整数であること', () => {
  const result = generateRandomNumber();
  expect(result).toBeGreaterThanOrEqual(0);
  expect(result.toString()).not.toContain('.');
});