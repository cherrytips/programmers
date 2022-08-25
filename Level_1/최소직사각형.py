def solution(sizes):
  answer = 0
  w = 0
  h = 0

  for i in range(len(sizes)):
    if sizes[i][0] < sizes[i][1]:
      temp = sizes[i][0]
      sizes[i][0] = sizes[i][1]
      sizes[i][1] = temp

    if w < sizes[i][0]:
      w = sizes[i][0]
    if h < sizes[i][1]:
      h = sizes[i][1]

  answer = w*h

  return answer


sizes = [[60, 50], [30, 70], [60, 30], [80, 40]]
sizes_1 = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]
sizes_2 = [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]

print(solution(sizes))
print(solution(sizes_1))
print(solution(sizes_2))
