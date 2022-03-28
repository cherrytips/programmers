function solution(numbers) {
  let answer = '';
  let per = [];

  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i].toString();
  }

  let permutation = function (i, numbers) {
    if (i === numbers.length) {
      per.push(numbers.slice());
      return;
    }

    for (let j = i; j < numbers.length; j++) {
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
      permutation(i + 1, numbers);
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
  };

  permutation(0, numbers);

  for (let i = 0; i < per.length; i++) {
    let temp = '';
    for (let j = 0; j < per[i].length; j++) {
      temp += per[i][j];
    }
    per[i] = parseInt(temp);
  }

  answer = per[0];

  for (let i = 1; i < per.length; i++) {
    if (answer < per[i]) answer = per[i];
  }

  answer = answer.toString();
  return answer;
}

let numbers = [6, 10, 2];
console.log(solution(numbers));
let numbers_1 = [3, 30, 34, 5, 9];
console.log(solution(numbers_1));
