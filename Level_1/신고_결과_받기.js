function solution(id_list, report, k) {
  var answer = [];
  let cnt = []; // 신고받은 횟수
  let report_id = []; // 신고한 아이디 리스트
  report = new Set(report); // 중복제거

  for (let i = 0; i < id_list.length; i++) {
    answer.push(0);
    cnt.push(0);
    report_id.push([]);
  } // init to 0

  report.forEach((element) => {
    from_to = element.split(" ");
    cnt[id_list.indexOf(from_to[1])]++;
    report_id[id_list.indexOf(from_to[0])].push(from_to[1]);
  });

  for (let i = 0; i < report_id.length; i++) {
    for (let j = 0; j < report_id[i].length; j++) {
      if (cnt[id_list.indexOf(report_id[i][j])] >= k) answer[i]++;
    }
  }

  return answer;
}

let id_list = ["muzi", "frodo", "apeach", "neo"];
let report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"];
// let report = ["ryan con", "ryan con", "ryan con", "ryan con"];
let k = 2;

console.log(solution(id_list, report, k));
