def solution(n, words):
    answer = [0, 0]
    player = {}
    prev = ''
    spoken = []
    cnt = 1

    for i in range(n):
        player[i+1] = 0

    for word in words:
        if player[1] == 0:
            prev = word
            player[1] += 1
        else:
            player[cnt] += 1
            if prev[len(prev)-1] != word[0] or word in spoken:
                answer[0] = cnt
                answer[1] = player[cnt]
                break
            prev = word

        if cnt == n:
            cnt = 1
        else:
            cnt += 1

        spoken.append(word)

    return answer
