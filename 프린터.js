function solution(priorities, location) {
  var answer = 1;

  function findMax(priorities) {
    let max = 0;

    for (let i = 0; i < priorities.length; i++) {
      if (max < priorities[i]) max = priorities[i];
    }

    return max;
  }

  while (1) {
    let max_index = priorities.indexOf(findMax(priorities));

    if (location === max_index) return answer;

    for (let i = 0; i < max_index; i++) {
      priorities.push(priorities.shift());
      location--;

      if (location === -1) location = priorities.length - 1;
    }

    priorities.shift();
    location--;
    answer++;
  }

  return answer;
}

let priorities = [2, 1, 3, 2];
let location = 2;
console.log(solution(priorities, location));
