function solution(fees, records) {
  let answer = [];
  let time = {};
  let count = {};
  let car_num = [];

  // 1. 입차, 출차 기록 분리
  for (let i = 0; i < records.length; i++) {
    records[i] = records[i].split(' ');
  }

  // 2. 입차일 경우 time에 추가
  // 출차일 경우 시와 분 계산하여 count에 저장 및 time에서 삭제
  records.forEach((element) => {
    let hour = element[0].split(':')[0];
    let min = element[0].split(':')[1];

    if (element[2] === 'IN') {
      time[element[1]] = [hour, min];
    } else {
      hour -= time[element[1]][0];
      min -= time[element[1]][1];

      if (min < 0) {
        hour--;
        min = 60 + min;
      }

      if (count[element[1]] === undefined) count[element[1]] = hour * 60 + min;
      else count[element[1]] += hour * 60 + min;

      delete time[element[1]];
    }
  });

  // 3. 아직 출차 안된 (time에서 삭제 안된) 차량 시간 계산하여 count에 더하기
  for (let key in time) {
    let hour = 23 - time[key][0];
    let min = 59 - time[key][1];

    if (count[key] === undefined) count[key] = hour * 60 + min;
    else count[key] += hour * 60 + min;
  }

  // 4. 차량 번호 저장 및 오름차순 정렬
  for (let key in count) car_num.push(key);
  car_num.sort();

  // 5. 기본 요금 + ((총 시간 - 기본 시간) / 단위 시간) * 단위 요금
  // 기본 시간보다 적을 때는 단위 요금 적용 안함
  car_num.forEach((element) => {
    let charge = fees[1];
    let ex_charge = 0;

    if (count[element] > fees[0]) {
      ex_charge = Math.ceil((count[element] - fees[0]) / fees[2]) * fees[3];
    }

    charge += ex_charge;

    answer.push(charge);
  });

  // console.log(time);
  // console.log(count);
  // console.log(car_num);

  return answer;
}
