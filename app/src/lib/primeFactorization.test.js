import { expect, test} from '@jest/globals';
import { primeFactorization } from './primeFactorization.js';

test('1を渡したとき、1のみを含んだ配列を返すこと', () => {
  const result = primeFactorization(1);
  expect(result).toEqual([1]);
});

test('素数を渡したとき、その数値のみを含んだ配列を返すこと', () => {
  const result = primeFactorization(17);
  expect(result).toEqual([17]);
});

test('素数以外の数値を渡したときに、素因数分解された数値を列挙した配列を返すこと', () => {
  const result = primeFactorization(360);
  expect(result).toEqual([2,2,2,3,3,5]);
});