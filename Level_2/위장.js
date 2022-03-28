function solution(clothes) {
  let answer = 1;
  let map_clothes = {};

  for (let i = 0; i < clothes.length; i++) {
    if (map_clothes[clothes[i][1]] === undefined) map_clothes[clothes[i][1]] = 1;
    else map_clothes[clothes[i][1]]++;
  }

  // 가짓수 + 1 을 곱한다. (해당 종류를 걸치지 않는 경우가 + 1 에 해당한다)
  for (const key in map_clothes) answer *= map_clothes[key] + 1;

  // 아무것도 걸치지 않는 경우인 1을 빼준다.
  answer--;

  return answer;
}

let clothes = [
  ['yellowhat', 'headgear'],
  ['bluesunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
];

let clothes_1 = [
  ['crowmask', 'face'],
  ['bluesunglasses', 'face'],
  ['smoky_makeup', 'face'],
];

console.log(solution(clothes));
console.log(solution(clothes_1));
