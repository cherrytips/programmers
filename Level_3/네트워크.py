def solution(n, computers):
    answer = len(computers)

    for i in range(len(computers)):
        for j in range(i+1, len(computers)):
            if computers[i][j] == 1:
                if computers[j][i] == 1:
                    answer -= 1

    return answer


n = 3
computers = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]
print(solution(n, computers))

for m in range(2, 2):
    print('yes')
