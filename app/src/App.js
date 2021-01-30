import { Title } from './components/Title';
import { CurrentNumber } from './components/CurrentNumber';
import { OddEven } from './components/OddEven';
import { generateRandomNumber } from './lib/generateRandomNumber';
import { useEffect, useState } from 'react';
import { PrimeNumber } from './components/PrimeNumber';
import { isPrimeNumber } from './lib/isPrimeNumber';
import { PrimeFactorization } from './components/PrimeFactorization';

const initialNumber = generateRandomNumber();

export const App = () => {
  const [currentNumber, setCurrentNumber] = useState(null);

  useEffect(() => {
    setCurrentNumber(initialNumber);
  }, []);

  return (
    <div>
      <Title title={'Prime Factorization App'} />
      {currentNumber && <CurrentNumber number={currentNumber} />}
      {currentNumber && <OddEven number={currentNumber} />}
      {currentNumber && <PrimeNumber number={currentNumber} />}
      {(currentNumber && !isPrimeNumber(currentNumber)) && <PrimeFactorization number={currentNumber} />}
      <button onClick={() => setCurrentNumber(generateRandomNumber())}>ここを押してね</button>
    </div>
  );
};