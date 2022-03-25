function solution(s) {
  var answer = 0;
  let index = 0;
  let s_len = s.length;

  while (s.length > 0) {
    if (index >= s.length - 1) {
      if (s_len === s.length) return 0;
      else {
        s_len = s.length;
        index = 0;
      }
    } else if (s[index] === s[index + 1]) {
      s = s.slice(0, index) + s.slice(index + 2);
      if (s.length === 0) return 1;
    } else {
      index++;
    }
  }

  return answer;
}

// let s = 'baabaa';
// let s = 'cdcd';
let s = 'dddbbdabbaccduuvvd';

console.log(solution(s));
