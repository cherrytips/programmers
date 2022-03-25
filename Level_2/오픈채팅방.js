function solution(record) {
  var answer = [];
  let uname = {}; // uid: name

  for (let i = 0; i < record.length; i++) {
    let temp = record[i].split(' ');

    if (temp[2] !== undefined) uname[temp[1]] = temp[2];
  }

  for (let i = 0; i < record.length; i++) {
    let temp = record[i].split(' ');

    if (temp[0] === 'Enter') answer.push(uname[temp[1]] + '님이 들어왔습니다.');
    else if (temp[0] === 'Leave') answer.push(uname[temp[1]] + '님이 나갔습니다.');
  }

  return answer;
}

let record = ['Enter uid1234 Muzi', 'Enter uid4567 Prodo', 'Leave uid1234', 'Enter uid1234 Prodo', 'Change uid4567 Ryan'];

console.log(solution(record));
