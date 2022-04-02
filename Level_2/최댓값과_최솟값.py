def solution(s):
    answer = ''

    s = s.split(' ')
    for n in s:
        s[s.index(n)] = int(n)
    s.sort()
    answer = str(s[0])+' '+str(s[len(s)-1])

    return answer


s = '1 2 3 4'
print(solution(s))
