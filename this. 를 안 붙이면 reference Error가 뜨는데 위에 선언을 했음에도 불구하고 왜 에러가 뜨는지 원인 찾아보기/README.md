# this. 를 안 붙이면 reference Error가 뜨는데 위에 선언을 했음에도 불구하고 왜 에러가 뜨는지 원인 찾아보기

| *7월 26일 과제*

## 예시 코드
```js
var person = {
    name: "홍길동",
    birthday: "030219",
    age: 30,
    pId: "1234567",
    // 생년월일과 개인 id를 합쳐서 주민등록번호를 반환함.
    fullId: function() { 
        return this.birthday + this.pId;
    },
};
```

## reference Error란?
- `reference Error(참조 오류)`란, 선언되지 않은 **변수, 함수, 객체** 를 사용하려 할 때 발생한다.


## this. 란?
- 자바스크립트에서 객체 안에 함수를 만들면 **메서드(method)** 라고 부른다.
- 이 메서드 안에서 이름 앞에 `this.` 를 붙이면 변수 대신, 자신이 속한 객체 안에 **속성** 을 사용한다.


## 왜 this.를 쓰지 않으면 에러가 발생하는가?
- 자바스크립트에서 이름 앞에 `this.` 를 붙이지 않으면 **변수**를 사용한다.
- 위 예시 코드에서 `birthday`와 `pId`라는 이름의 변수는 없다.
    - 따라서 `reference Error` 가 발생한다.
- 다만, 메서드가 속해있는 `person` **객체** 안에 `birthday`와 `pId`라는 이름의 **속성**은 존재한다.



## 결론
```js
var name = "방성훈";
var birthday = "010205";
var age = 22;
var pId = "9999999";

var person = {
    name: "홍길동",
    birthday: "030219",
    age: 30,
    pId: "1234567",
    
    fullId: function() { 
        return birthday + pId;              // 0102059999999
        return this.birthday + this.pId;    // 0302191234567
    },
};
```
- 이 코드처럼 메서드 안에서 이름 앞에 `this.` 를 붙이면 **속성** 을 사용한다.
- 반면, `this.` 를 붙이지 않으면 **변수** 를 사용한다.
