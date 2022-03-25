function solution(N, stages) {
  var answer = [];
  let challenger = {}; // 스테이지별 도전자 수
  let stay = {}; // 스테이지에 머물러있는 사용자 수
  let percentage = []; // 실패율 %

  for (let i = 1; i <= N; i++) {
    for (let j = 0; j < stages.length; j++) {
      if (i <= stages[j]) {
        if (challenger[i] === undefined) challenger[i] = 1;
        else challenger[i]++;
      }

      if (i === stages[j]) {
        if (stay[i] === undefined) stay[i] = 1;
        else stay[i]++;
      }
    }
  } // challenger, stay 값 입력

  for (let i = 1; i <= N; i++) {
    if (stay[i] === undefined) stay[i] = 0;
    if (challenger[i] === undefined) challenger[i] = 0;

    if (stay[i] === 0 && challenger[i] === 0) percentage.push(0);
    else percentage.push(stay[i] / challenger[i]);
  } // percentage 계산
  // 0/0 = NaN

  while (1) {
    let index = percentage.indexOf(Math.max(...percentage));

    if (percentage[index] === -1) break;

    answer.push(index + 1);
    percentage[index] = -1;
  } // index 값 찾기

  return answer;
}

// let N = 5;
// let stages = [2, 1, 2, 6, 2, 4, 3, 3];
let N = 4;
let stages = [1, 1, 1, 1, 1];

console.log(solution(N, stages));
