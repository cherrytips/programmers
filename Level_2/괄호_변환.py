def solution(p):
    answer = ''
    balance = 0
    correct = True
    u = ''
    v = ''

    if len(p) == 0:
        return ''

    for i in range(len(p)):
        if p[i] == '(':
            balance += 1
        else:
            balance -= 1

        if i == 0 and balance < 0:
            correct = False

        if balance == 0:
            u = p[:i+1]
            v = p[i+1:]
            break

    if not correct:
        temp = '('
        temp += solution(v)
        temp += ')'
        u = list(u[1:len(u)-1])
        for i in range(len(u)):
            if u[i] == '(':
                u[i] = ')'
            elif u[i] == ')':
                u[i] = '('
        u = ''.join(u)
        temp += u
        return temp

    answer = u + solution(v)

    return answer


p = '(()())()'
print(solution(p))
p = ')('
print(solution(p))
p = '()))((()'
print(solution(p))
