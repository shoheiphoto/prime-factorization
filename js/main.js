function generateRandomNumber() {
  let num = Math.round(Math.random() * 1000);
  document.write('数値は' + num + 'です。');
  return num;
}

function primeFactorization(num) {
  let result = [];
  if (num === 1) {
    return [1];
  }
  let init = 2;
  while (num !== 1) {
    let i = init;
    while (i < Number.MAX_SAFE_INTEGER) {
      if (num % i == 0) {
        result.push(i);
        num /= i;
        break;
      }
      i++;
    }
    init = i;
  }
  return result;
}

function evenOrOdd(num) {
  let remainder = num % 2;
  if (remainder == 0) {
    document.write('偶数です。<br>');
  } else {
    document.write('奇数です。<br>');
  }
}

function isPrimeNumber(num) {
  if (num === 2) {
    document.write('<h2>2です素数です！にゃにゃ</h2>');
    return true;
  }
  if (num % 2 === 0) {
    document.write('<p>素数ではありません。</p>');
    return false;
  }
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      document.write('<p>素数ではありません。</p>');
      return false;
    }
  }
  document.write('<h2>素数ですよ！いえい！</h2>');
  return true;
}

function main() {
  let num = generateRandomNumber();
  evenOrOdd(num);
  if (isPrimeNumber(num)) return;
  document.write('<p>↓↓以下、素因数分解してみよう。↓↓</p>');
  for (let i = 0; i < primeFactorization(num).length; i++) {
    document.write(primeFactorization(num)[i]);
    if (i != primeFactorization(num).length - 1) {
      document.write(' × ');
    }
  }
  document.write('となりますね。');
}

main();