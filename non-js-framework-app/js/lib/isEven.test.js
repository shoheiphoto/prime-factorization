const { exportAllDeclaration } = require('@babel/types');
const { isEven} = require('./isEven.js');

test('偶数が渡されたとき、trueを返すこと', () => {
  expect(isEven(4)).toBeTruthy();
});
test('奇数が渡されたとき、falseを返すこと', () => {
  expect(isEven(3)).toBeFalsy();
});