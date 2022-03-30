function solution(info, query) {
  var answer = [];

  for (let i = 0; i < info.length; i++) info[i] = info[i].split(' ');

  for (let i = 0; i < query.length; i++) {
    query[i] = query[i].split(' and ');

    let sep = query[i].pop().split(' ');
    query[i].push(sep[0]);
    query[i].push(sep[1]);

    let cnt = 0;
    for (let j = 0; j < info.length; j++) {
      if (info[j][0] !== query[i][0]) {
        if (query[i][0] !== '-') continue;
      }
      if (info[j][1] !== query[i][1]) {
        if (query[i][1] !== '-') continue;
      }
      if (info[j][2] !== query[i][2]) {
        if (query[i][2] !== '-') continue;
      }
      if (info[j][3] !== query[i][3]) {
        if (query[i][3] !== '-') continue;
      }
      if (parseInt(info[j][4]) >= parseInt(query[i][4])) cnt++;
    }

    answer.push(cnt);
  }

  // console.log(info);
  // console.log(query);

  return answer;
}

let info = [
  'java backend junior pizza 150',
  'python frontend senior chicken 210',
  'python frontend senior chicken 150',
  'cpp backend senior pizza 260',
  'java backend junior chicken 80',
  'python backend senior chicken 50',
];
let query = [
  'java and backend and junior and pizza 100',
  'python and frontend and senior and chicken 200',
  'cpp and - and senior and pizza 250',
  '- and backend and senior and - 150',
  '- and - and - and chicken 100',
  '- and - and - and - 150',
];

console.log(solution(info, query));
