import { isEven } from "../lib/isEven";

export const OddEven = (props) => {
  let message = '';
  if (isEven(props.number)) {
    message = '偶数です。';
  } else {
    message = '奇数です。';
  }

  return (
    <p>{message}</p>
  );
};