def solution(price, money, count):
  answer = 0
  use = 0

  for i in range(1, count+1):
    use += (price*i)

  if money-use < 0:
    answer = abs(money-use)

  return answer
