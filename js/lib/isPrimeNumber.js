export const isPrimeNumber = num => {
  if (!num) throw new Error('引数を与えてください');
  if (isNaN(num)) throw new Error('引数には数値を与えてください');
  if (num < 0) return false;
  if (!Number.isInteger(num)) return false;
  if (num === 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 2; i <num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};