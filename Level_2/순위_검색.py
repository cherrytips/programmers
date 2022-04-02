def solution(info, query):
    answer = []

    for i in range(len(info)):
        info[i] = info[i].split(' ')

    for i in range(len(query)):
        query[i] = query[i].split(' and ')
        query[i].append(query[i][len(query[i])-1].split(' ')[1])
        query[i][len(query[i])-2] = query[i][len(query[i])-2].split(' ')[0]

    for i in range(len(query)):
        cnt = 0
        for j in range(len(info)):
            if query[i][0] != '-' and query[i][0] != info[j][0]:
                continue
            if query[i][1] != '-' and query[i][1] != info[j][1]:
                continue
            if query[i][2] != '-' and query[i][2] != info[j][2]:
                continue
            if query[i][3] != '-' and query[i][3] != info[j][3]:
                continue
            if int(query[i][4]) <= int(info[j][4]):
                cnt += 1
        answer.append(cnt)

    return answer


info = ["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150",
        "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"]
query = ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200",
         "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"]
print(solution(info, query))
