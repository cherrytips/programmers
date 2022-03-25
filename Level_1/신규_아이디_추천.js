function solution(new_id) {
  var answer = "";

  answer = new_id.toLowerCase(); // step 1

  answer = answer.replace(/[^a-z0-9-_.]/gi, ""); // step 2

  answer = answer.replace(/\.+/gi, "."); // step 3

  if (answer.startsWith(".")) answer = answer.slice(1); // step 4
  if (answer.endsWith(".")) answer = answer.slice(0, answer.length - 1);

  if (answer.length === 0) answer = answer.concat("a"); // step 5

  if (answer.length >= 16) {
    // step 6
    answer = answer.slice(0, 15);
    if (answer.endsWith(".")) answer = answer.slice(0, answer.length - 1);
  }

  if (answer.length <= 2) {
    // step 7
    while (answer.length !== 3) {
      answer = answer.concat(answer.charAt(answer.length - 1));
    }
  }

  return answer;
}

// let new_id = "...!@BaT#*..y.abcdefghijklm.";
let new_id = "=.=";
console.log(solution(new_id));
