import { isPrimeNumber } from "../lib/isPrimeNumber";

export const PrimeNumber = (props) => {
  let message = '';
  if (isPrimeNumber(props.number)) {
    message = '素数です!にゃにゃ';
  } else {
    message = '素数ではありません。';
  }

  return (
    <p>{message}</p>
  );
};