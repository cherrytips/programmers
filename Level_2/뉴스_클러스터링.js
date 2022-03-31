function solution(str1, str2) {
  let answer = 0;
  let arr1 = [],
    arr2 = [];
  let cross = [];
  let fusion = new Set();

  // 문자열 정리 후 두개씩 나누기
  str1 = str1.toLowerCase().replace(/[^a-zA-Z]/g, '');
  str2 = str2.toLowerCase().replace(/[^a-zA-Z]/g, '');

  for (let i = 2; i <= str1.length; i++) arr1.push(str1.slice(i - 2, i));
  for (let i = 2; i <= str2.length; i++) arr2.push(str2.slice(i - 2, i));

  // 교집합
  if (arr1.length > arr2.length) {
    let temp = arr1.slice();
    arr1 = arr2.slice();
    arr2 = temp;
  }
  let arr_temp = arr2.slice();

  for (let i = 0; i < arr1.length; i++) {
    if (arr_temp.includes(arr1[i])) {
      cross.push(arr1[i]);
      arr_temp.splice(arr_temp.indexOf(arr1[i]), 1);
    }
  }

  // 합집합
  arr1.forEach((word) => fusion.add(word));
  arr2.forEach((word) => fusion.add(word));
  fusion = [...fusion];

  console.log(str1, str2);
  console.log(arr1, arr2);
  console.log(cross, fusion);

  return parseInt((cross.length / fusion.length) * 65536);
}

let str1 = 'E=M*C^2';
let str2 = 'e=m*c^2';
console.log(solution(str1, str2));

let str3 = 'FRANCE';
let str4 = 'french';
console.log(solution(str3, str4));

let str5 = 'aa1+aa2';
let str6 = 'AAAA12';
console.log(solution(str5, str6));
