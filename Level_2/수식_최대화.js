function solution(expression) {
  var answer = 0;
  let exp = expression.split(/[*+-]/);
  let exp_copy = [];
  let priority = [
    ['*', '+', '-'],
    ['*', '-', '+'],
    ['+', '*', '-'],
    ['-', '*', '+'],
    ['+', '-', '*'],
    ['-', '+', '*'],
  ];
  let index = 1;

  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === '*' || expression[i] === '+' || expression[i] === '-') {
      exp.splice(index, 0, expression[i]);
      index += 2;
    }
  }

  function copy_exp(exp, exp_copy) {
    for (let i = 0; i < exp.length; i++) exp_copy.push(exp[i]);

    return exp_copy;
  }

  function mul(exp) {
    for (let i = 0; i < exp.length; i++) {
      if (exp[i] === '*') {
        exp.splice(i - 1, 3, parseInt(exp[i - 1]) * parseInt(exp[i + 1]));
        i--;
      }
    }

    return exp;
  }
  function plus(exp) {
    for (let i = 0; i < exp.length; i++) {
      if (exp[i] === '+') {
        exp.splice(i - 1, 3, parseInt(exp[i - 1]) + parseInt(exp[i + 1]));
        i--;
      }
    }

    return exp;
  }
  function minus(exp) {
    for (let i = 0; i < exp.length; i++) {
      if (exp[i] === '-') {
        exp.splice(i - 1, 3, parseInt(exp[i - 1]) - parseInt(exp[i + 1]));
        i--;
      }
    }

    return exp;
  }

  index = 0;

  while (index < priority.length) {
    exp_copy = [];
    exp_copy = copy_exp(exp, exp_copy);

    for (let i = 0; i < priority[index].length; i++) {
      switch (priority[index][i]) {
        case '*':
          exp_copy = mul(exp_copy);
          break;
        case '+':
          exp_copy = plus(exp_copy);
          break;
        case '-':
          exp_copy = minus(exp_copy);
          break;
        default:
          break;
      }
    }

    if (Math.abs(parseInt(exp_copy[0])) > answer) answer = Math.abs(parseInt(exp_copy[0]));

    index++;
  }

  return answer;
}

// let expression = '100-200*300-500+20';
let expression_1 = '50*6-3*2';
// console.log(solution(expression));
console.log(solution(expression_1));
