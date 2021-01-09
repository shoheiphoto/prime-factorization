export const primeFactorization = num => {
  const primeFactors = [];
  if (num === 1) return [1];

  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      primeFactors.push(i);
      num /= i;
    }
  }
  return primeFactors;
};