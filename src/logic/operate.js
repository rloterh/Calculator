import Big from 'big.js';

const operate = (operandOne, operandTwo, operation) => {
  const digitsA = new Big(operandOne);
  const digitsB = new Big(operandTwo);
  let result = 0;

  switch (operation) {
    case '+':
      result = digitsA.plus(digitsB);
      break;
    case '-':
      result = digitsA.minus(digitsB);
      break;
    case 'x':
      result = digitsA.times(digitsB);
      break;
    case '÷':
      if (operandTwo === '0') {
        result = 'Error';
      } else {
        result = digitsA.div(digitsB);
      }
      break;
    default:
      result = 'Error';
      break;
  }

  return result.toString();
};

export default operate;
