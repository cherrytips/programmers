function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let bridge_on = [];
  let timer = 0;

  function sum(arr) {
    let r = 0;
    for (let i = 0; i < arr.length; i++) r += arr[i];
    return r;
  }

  if (truck_weights.length === 0) return answer;
  if (truck_weights.length === 1) return bridge_length + 1;

  do {
    if (timer === bridge_length) {
      bridge_on.shift();

      if (bridge_on.length === 0) timer = 0;
      else timer--;
    }

    if (sum(bridge_on) + truck_weights[0] > weight || bridge_on.length === bridge_length) {
      timer++;
    } else {
      if (truck_weights[0] !== undefined) bridge_on.push(truck_weights.shift());
      timer++;
    }

    answer++;
  } while (bridge_on.length > 0 || truck_weights.length > 0);

  return answer;
}

let bridge_length = 2;
let weight = 10;
let truck_weights = [7, 4, 5, 6];

console.log(solution(bridge_length, weight, truck_weights));
