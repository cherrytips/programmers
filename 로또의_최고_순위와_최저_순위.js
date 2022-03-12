function solution(lottos, win_nums) {
  var answer = [];
  let same = 0;
  let zeros = 0;

  lottos.forEach((num) => {
    if (win_nums.includes(num)) same++;
    if (num === 0) zeros++;
  });

  answer.push(7 - (same + zeros) !== 7 ? 7 - (same + zeros) : 6);
  answer.push(7 - same !== 7 ? 7 - same : 6);

  return answer;
}

let lottos = [44, 1, 0, 0, 31, 25];
let win_nums = [31, 10, 45, 1, 6, 19];

console.log(solution(lottos, win_nums));
