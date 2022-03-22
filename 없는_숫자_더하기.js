function solution(numbers) {
  var answer = 0;
  let pre = {};

  numbers.forEach((n) => {
    if (pre[n] === undefined) pre[n] = 1;
  });

  for (let i = 0; i < 10; i++) {
    if (pre[i] === undefined) answer += i;
  }

  return answer;
}

let numbers = [1, 2, 3, 4, 6, 7, 8, 0];
console.log(solution(numbers));
