function solution(s) {
  var answer = 0;
  let arr = [];

  for (let i = 0; i < s.length; i++) arr[i] = []; // init

  for (let i = 1; i <= s.length; i++) {
    let cutter = i;
    while (1) {
      if (cutter > s.length) break;
      arr[i - 1].push(s.slice(cutter - i, cutter));
      cutter += i;
    }
    if (s.slice(cutter - i).length !== 0) arr[i - 1].push(s.slice(cutter - i));
  }

  console.log(arr);

  return answer;
}

let s = "aabbaccc";
console.log(solution(s));
