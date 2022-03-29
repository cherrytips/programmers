function solution(citations) {
  let answer = 0;

  citations = citations.sort((a, b) => a - b);
  console.log(citations);

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] <= citations.slice(i).length) answer = citations[i];
  }

  return answer;
}

let citations = [3, 0, 6, 1, 5];
console.log(solution(citations));
