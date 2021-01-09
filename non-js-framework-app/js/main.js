import {generateRandomNumber} from './lib/generateRandomNumber.js';
import {write} from './lib/write.js';
import {isEven} from './lib/isEven.js';
import {isPrimeNumber} from './lib/isPrimeNumber.js';
import {primeFactorization} from './lib/primeFactorization.js';
import {generatePrimeFactorizationResultMessage} from './lib/generatePrimeFactorizationResultMessage.js';

const main = () => {
  const num = generateRandomNumber();
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
    write(document.getElementById('messageForPrimeNumber'), '<p>素数ではありません。</p>');
  }
  write(document.getElementById('primeFactorizationTitle'), '<p>↓↓以下、素因数分解してみよう。↓↓</p>');
  write(document.getElementById('primeFactorizationResult'), generatePrimeFactorizationResultMessage(primeFactorization(num)));
};

main();