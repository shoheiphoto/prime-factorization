function generateRandomNumber() {
  return Math.round(Math.random() * 1000);
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

function isEven(num) {
  return num % 2 === 0;
}

function isPrimeNumber(num) {
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function generatePrimeFactorizationResultMessage(primeNumbers) {
  return primeNumbers.map(function (num, index) {
    let stringNum = num.toString();
    if (index === 0) return stringNum;
    return ' × ' + stringNum;
  }).concat('となりますね。').join('');
}

function write(targeDOM, innerHTML) {
  targeDOM.innerHTML = innerHTML;
}

function main() {
  let num = generateRandomNumber();
  write(document.getElementById('currentNumber'), '数値は' + num + 'です。');
  if (isEven(num)) {
    write(document.getElementById('messageForEvenOrOdd'), '偶数です。<br>');
  } else {
    write(document.getElementById('messageForEvenOrOdd'), '奇数です。<br>');
  }
  if (isPrimeNumber(num)) {
    write(document.getElementById('messageForPrimeNumber'), '<h2>素数です！にゃにゃ</h2>');
    return;
  } else {
    write(document.getElementById('messageForPrimeNumber'), '<p>素数ではありません</p>');
  }
  write(document.getElementById('primeFactorizationTitle'), '<p>↓↓以下、素因数分解してみよう。↓↓</p>');
  write(document.getElementById('primeFactorizationResult'), generatePrimeFactorizationResultMessage(primeFactorization(num)));
}

main();