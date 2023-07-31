# 숫자끼리 비교하는 연산과 문자끼리 비교하는 연산 중, 왜 문자끼리 비교하는 연산이 상대적으로 불리한지 이유에 대해서 정리해보고 샘플 코드를 구현해서 제출하기

### 숫자 비교 방법
- 값의 크기만 비교한다.

### 문자 비교 방법
- 각 문자를 `ASCII` 혹은 `Unicode` 규칙에 따라 숫자로 변환한다.
- 변환된 숫자의 크기를 비교한다.

### 결론
- 즉, 문자끼리 비교할 때는 변환하는 과정을 한 번 더 거치기 때문에, 숫자 비교에 비해 상대적으로 불리하다.

### 샘플 코드
```py
import time
import random

numbers = [random.randint(1, 10) for _ in range(1000)]
string = [chr(random.randint(1, 10) + 65) for _ in range(1000)]
print(numbers)  # [3, 8, 5, 2, 9, 7, 10, 1, 6, 4]
print(string)   # ['J', 'K', 'G', 'B', 'C', 'K', 'B', 'I', 'E', 'F']

start = time.time()
numbers = sorted(numbers)
end = time.time()
print(numbers)  # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(end - start)

start = time.time()
string = sorted(string)
end = time.time()
print(string)   # ['B', 'B', 'C', 'E', 'F', 'G', 'I', 'J', 'K', 'K']
print(end - start)
```