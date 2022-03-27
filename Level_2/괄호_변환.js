function solution(p) {
  if (p.length === 0) return '';

  let cnt = 0;
  let u = '';
  let v = '';

  // cnt === 0 일 때 문자열 나누기
  // ( = ++ , ) = --
  for (let i = 0; i < p.length; i++) {
    if (p[i] === '(') cnt++;
    else cnt--;

    if (cnt === 0) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1);

      if (u.indexOf('(') > u.indexOf(')')) {
        let temp = '(';
        temp += solution(v);
        temp += ')';

        u = [...u.slice(1, u.length - 1)];
        for (let i = 0; i < u.length; i++) {
          if (u[i] === '(') u[i] = ')';
          else u[i] = '(';
        }
        u = u.join('');

        temp += u;

        return temp;
      }

      return u + solution(v);
    }
  }
}

let p = '(()())()';
let p_1 = '()))((()';
let p_2 = ')(';

console.log(solution(p));
console.log(solution(p_1));
console.log(solution(p_2));
