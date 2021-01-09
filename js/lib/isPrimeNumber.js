export const isPrimeNumber = num => {
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 2; i <num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};