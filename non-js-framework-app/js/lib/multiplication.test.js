import {multiplication} from './multiplication.js';

describe('multiplication', () => {
  test('引数として2と2をとるとき、4を返すこと', () => {
    const result = multiplication(2, 2);
    expect(result).toEqual(4);
  });
  test('引数として2と3をとるとき、6を返すこと', () => {
    const result = multiplication(2, 3);
    expect(result).toEqual(6);
  });
  test('引数として9と11をとるとき、99を返すこと', () => {
    const result = multiplication(9, 11);
    expect(result).toEqual(99);
  });
  describe('multiplication', () => {
    test('引数として-9と3をとるとき、-27を返すこと', () => {
      const result = multiplication(-9, 3);
      expect(result).toEqual(-27);
    });
  });
});
