# 파이썬으로 일부 중복되는 element를 저장하고 최소 element가 10개이상 되는 배열을 만든다. 그리고 set() 구문 없이 오로지 for in 문으로 배열의 중복된 값을 없애는 코드를 작성하기

### 코드
```py
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
```