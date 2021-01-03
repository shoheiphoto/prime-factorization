const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forを使用して偶数を表示
for (i = 0; i < arr.length; i++){
  const currentNumber = arr[i];
  if (currentNumber % 2 === 0) {
    console.log(currentNumber);
  }
}

// forEachを使用して偶数を表示
arr.forEach(item => {
  if (item % 2 === 0) {
  console.log(item);
  }
});


// forEachを使って配列内のすべての数字を2倍にしたものを出力する
arr.forEach(item => {
  console.log(item * 2);
});