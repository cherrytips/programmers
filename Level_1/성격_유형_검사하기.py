from random import choices


def solution(survey, choices):
  answer = ''
  target = {'R': 0, 'T': 0, 'C': 0, 'F': 0, 'J': 0, 'M': 0, 'A': 0, 'N': 0}

  for i in range(len(survey)):
    su = list(survey[i])
    if choices[i] < 4:
      target[su[0]] += (4-choices[i])
    elif choices[i] > 4:
      target[su[1]] += (choices[i]-4)

  if target['R'] < target['T']:
    answer += 'T'
  else:
    answer += 'R'
  if target['C'] < target['F']:
    answer += 'F'
  else:
    answer += 'C'
  if target['J'] < target['M']:
    answer += 'M'
  else:
    answer += 'J'
  if target['A'] < target['N']:
    answer += 'N'
  else:
    answer += 'A'

  return answer


survey = ["AN", "CF", "MJ", "RT", "NA"]
choices = [5, 3, 2, 7, 5]

print(solution(survey, choices))
