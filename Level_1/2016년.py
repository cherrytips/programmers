def solution(a, b):
  answer = ''

  day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']
  month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  answer = day[((sum(month[:a])+b) % 7)-1]

  return answer


print(solution(5, 24))
