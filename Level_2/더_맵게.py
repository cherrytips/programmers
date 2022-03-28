def solution(scoville, K):
    answer = 0

    scoville.sort()

    while scoville[0] < K:
        if len(scoville) == 1:
            return -1

        min_1 = scoville.pop(0)
        min_2 = scoville.pop(0)

        mix = min_1 + (min_2 * 2)

        answer += 1

        scoville.append(mix)
        scoville.sort()

    return answer


scoville = [1, 2, 3, 9, 10, 12]
K = 7

print(solution(scoville, K))
