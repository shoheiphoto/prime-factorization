export const generatePrimeFactorizationResultMessage = (primeNumbers) => {
  return primeNumbers.map(function (num, index) {
    const stringNum = num.toString();
    if (index === 0) return stringNum;
    return ' × ' + stringNum;
  }).concat('となりますね。').join('');
};