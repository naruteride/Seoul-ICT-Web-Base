# html 문서 앞에 `<script>` 태그 내에 js코드를 작성했고, 문서가 로드 되기 전에 script의 element를 가져오지 못한 상태에서 `console.log` 로 디버그하여 개발자도구에 확인해보았을때는 왜 element를 가져와졌는지 이유에 대해서 알아보기

| *7월 26일 과제*

> 예시 코드
```HTML
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>JavaScript DOM Element</title>
    <script>
        //HTML 태그 이름을 이용한 선택
        console.log('aaa')
        var selectedItem = document.getElementsByTagName("li");     // 모든 <li> 요소를 선택함.
        console.log(selectedItem)
        console.log(selectedItem.length)
        for (var i = 0; i < selectedItem.length; i++) {
            selectedItem.item(i).style.color = "red";   // 선택된 모든 요소의 텍스트 색상을 변경함.
            console.log(selectedItem.item(i));
        }
    </script>
</head>
<body>
    <h1>HTML 태그 이름을 이용한 선택</h1>
    <ul>
        <li>첫 번째 아이템이에요!</li>
        <li>두 번째 아이템이에요!</li>
        <li>세 번째 아이템이에요!</li>
        <li>네 번째 아이템이에요!</li>
        <li>다섯 번째 아이템이에요!</li>
    </ul>
    <script>
        var selectedItem = document.getElementsByTagName("li");     // 모든 <li> 요소를 선택함.
        for (var i = 0; i < selectedItem.length; i++) {
            selectedItem.item(i).style.color = "red";   // 선택된 모든 요소의 텍스트 색상을 변경함.
        }
    </script>
</body>
</html>
```

## 왜 Element를 가져오지 못 하는가?
- 웹브라우저는 HTML 코드를 **절차지향적**으로 읽고 실행한다.
- `document.getElementsByTagName` 을 대상 Element보다 위에서 작성했을 경우, 대상 Element가 아직 **실행(로드)** 되지 않았기 때문에 읽을 수 없다.
- 따라서 `<head>` 태그 내의 `<script>` 코드는 Element에 접근할 수 없다.


## 왜 개발자 도구에서는 Element를 가져올 수 있는가?
- 개발자 도구를 연 시점에서는 이미 모든 HTML의 Element가 실행되고난 후이기 때문이다.
- 물론 극단적으로, 페이지가 로드되기 전에, 엄청 빠르게 개발자 도구를 열어서 `console.log` 를 찍어보면, Element를 읽을 수 없다.
