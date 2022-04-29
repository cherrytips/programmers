def solution(n, k):
    answer = 0
    arr = []

    def change(n, k):
        num = ''
        while n > 0:
            num += str(n % k)
            n = n//k
        num = num[::-1]
        return num

    def is_decimal(num):
        if num == 2:
            return True
        i = 2
        while i*i <= num:
            if num % i == 0:
                return False
            i += 1
        return True

    arr = change(n, k).split('0')

    for num in arr:
        if num != '' and num != '0' and num != '1' and is_decimal(int(num)):
            answer += 1

    return answer
