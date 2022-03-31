function solution(s) {
  let answer = [];
  let map = {};

  s = s.split('},{');
  s[0] = s[0].slice(2);
  s[s.length - 1] = s[s.length - 1].replace(/[}]/g, '');

  for (let i = 0; i < s.length; i++) s[i] = s[i].split(',');

  s.forEach((element) => {
    map[element.length] = element;
  });

  for (const key in map) {
    let arr = map[key];

    for (let i = 0; i < arr.length; i++) {
      if (answer.indexOf(parseInt(arr[i])) === -1) {
        answer.push(parseInt(arr[i]));
        break;
      }
    }
  }

  return answer;
}

let s = '{{1,2,3},{2,1},{1,2,4,3},{2}}';
console.log(solution(s));
