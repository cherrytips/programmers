def solution(s):
    answer = ''
    s = list(s)

    for i in range(len(s)):
        s[i] = s[i].lower()
        if i == 0 or s[i-1] == ' ':
            s[i] = s[i].upper()
        answer += s[i]

    return answer


s = "3people unFollowed me"
print(solution(s))
