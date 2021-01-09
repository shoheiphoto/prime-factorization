//変数arrについてmapで処理を行い、各値を2倍にした配列を標準出力してください。
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = arr.map(item => {
  return item * 2;
});
newArr;

//変数arrについてmapで処理を行い、すべての数字に’個’という文字列を足したものを標準出力してみる
const newArr2 = arr.map(item => {
  return item + '個';
});
console.log(newArr2);


// forEachを使って配列内のすべての数字に’個’という文字列を足したものを標準出力してみる
arr.forEach(item => {
  console.log(item + '個');
});