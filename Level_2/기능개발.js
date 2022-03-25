function solution(progresses, speeds) {
  var answer = [];

  while (progresses.length > 0) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
      if (progresses[i] > 100) progresses[i] = 100;
    }

    if (progresses[0] === 100) {
      let cnt = 0;

      while (progresses[0] === 100) {
        progresses.shift();
        speeds.shift();
        cnt++;
      }

      answer.push(cnt);
    }
  }

  return answer;
}

let progresses = [93, 30, 55];
let speeds = [1, 30, 5];
// let progresses = [95, 90, 99, 99, 80, 99];
// let speeds = [1, 1, 1, 1, 1, 1];

console.log(solution(progresses, speeds));
