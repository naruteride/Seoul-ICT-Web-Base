import random

numbers = [random.randint(1, 10) for _ in range(100)]
duplicates = [False] * 10   # 중복인지 아닌지 검사
new_numbers = []            # 중복이 아닐 경우 이 배열에 담음

for i in numbers:
    if duplicates[i - 1] == True:
        numbers.remove(i)
    else:
        duplicates[i - 1] = True
        new_numbers.append(i)

print(new_numbers)