import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  switch (buttonName) {
    case '+/-':
      if (total) total = operate(total, '-1', 'x');
      else if (next) next = operate(next, '-1', 'x');
      break;
    case '%':
      if (next) next = operate(next, '100', '÷');
      else if (total) total = operate(total, '100', '÷');
      break;
    case '=':
      if (!operation) break;
      else if (next && total) total = operate(total, next, operation);
      else {
        total = next;
      }
      operation = null;
      next = null;
      break;
    case '.':
      if (next) {
        if (next.indexOf(buttonName) < 0) next += '.';
      } else if (operation) next = '0.';
      else if (total.indexOf(buttonName) < 0) total += '.';
      break;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (next) next += buttonName;
      else if (operation) next = buttonName;
      else if (total === null || total === '0') total = buttonName;
      else {
        total += buttonName;
      }
      break;
    case 'AC':
      total = '0';
      next = null;
      operation = null;
      break;
    default:
      if (next) {
        total = operate(total, next, operation);
        next = '';
        operation = '';
      } else {
        operation = buttonName;
      }
  }

  return { total, next, operation };
};

export default calculate;
