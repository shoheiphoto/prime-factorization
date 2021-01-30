const { isEven } = require('./isEven.js');

test('偶数が渡されたとき、trueを返すこと', () => {
  expect(isEven(4)).toBeTruthy();
});