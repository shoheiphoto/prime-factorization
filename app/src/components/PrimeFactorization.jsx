import { generatePrimeFactorizationResultMessage } from "../lib/generatePrimeFactorizationResultMessage";
import { primeFactorization } from "../lib/primeFactorization";

export const PrimeFactorization = (props) => {
  const message = generatePrimeFactorizationResultMessage(primeFactorization(props.number));

  return (
    <p>{message}</p> 
  );
};