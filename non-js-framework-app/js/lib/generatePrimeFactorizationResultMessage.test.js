import { expect, test } from '@jest/globals';
import { generatePrimeFactorizationResultMessage } from './generatePrimeFactorizationResultMessage.js';

test('数値の配列を渡したときに、想定している文字列として加工されたものが返ってくること ', () => {
  const arr = [1, 2, 3, 5, 7];
  expect(generatePrimeFactorizationResultMessage(arr)).toEqual('1 × 2 × 3 × 5 × 7となりますね。');  
});
