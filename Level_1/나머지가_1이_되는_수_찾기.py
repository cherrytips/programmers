def solution(n):
  answer = 1

  while answer <= n-1:
    if n % answer == 1:
      break
    else:
      answer += 1

  return answer
