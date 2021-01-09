import { expect, test } from '@jest/globals';
import { isPrimeNumber } from './isPrimeNumber.js';

//例外処理

test('引数が与えられなかったとき、例外処理を返すこと', () => {
  expect(() => isPrimeNumber()).toThrow('引数を与えてください');
});

test('数値以外が与えられたとき、例外処理を返すこと', () => {
  expect(() => isPrimeNumber('abc')).toThrow('引数には数値を与えてください');
});

test('負の数が与えられたとき、falseを返すこと', () => {
  const result = isPrimeNumber(-3);
  expect(result).toBeFalsy();
});

test('小数が与えられたとき、falseを返すこと', () => {
  const result = isPrimeNumber(5.1);
  expect(result).toBeFalsy();
});

test('1が与えられたとき、falseを返すこと', () => {
  const result = isPrimeNumber(1);
  expect(result).toBeFalsy();
});

test('2が与えられたとき、trueを返すこと', () => {
  const result = isPrimeNumber(2);
  expect(result).toBeTruthy();
});

test('2以外の偶数は素数ではない、falseを返すこと', () => {
  const result = isPrimeNumber(6);
  expect(result).toBeFalsy();
});

test('1と自分の数字以外で割り切れる数字があり素数ではない、falseを返すこと', () => {
  const result = isPrimeNumber(9);
  expect(result).toBeFalsy();
});

test('1と自分の数字以外で割り切れない素数である、trueを返すこと', () => {
  const result = isPrimeNumber(11);
  expect(result).toBeTruthy();
});