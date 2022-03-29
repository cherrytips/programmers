function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let bridge = [];
  let on_bridge = 0;
  let timer = [];

  while (bridge.length !== 0 || truck_weights.length !== 0) {
    if (on_bridge + truck_weights[0] <= weight) {
      on_bridge += truck_weights[0];
      bridge.push(truck_weights[0]);
      timer.push(1);
      truck_weights.shift();

      answer++;
    } else {
      for (let i = 0; i < timer.length; i++) timer[i]++;

      if (timer[0] > bridge_length) {
        on_bridge -= bridge[0];
        bridge.shift();
        timer.shift();
        continue;
      }

      answer++;
    }
  }

  answer++;

  return answer;
}

let bridge_length = 2;
let weight = 10;
let truck_weights = [7, 4, 5, 6];

console.log(solution(bridge_length, weight, truck_weights));
