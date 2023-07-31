# webAPI의 dialog box인 alert(), confirm() 메소드는 window나 document 없이 바로 사용할 수 있는 이유 찾아보기

- 웹브라우저에서 `alert()`와 `confirm()`는 window 객체의 메서드로 동작한다.
- 따라서 전역 범위에서 바로 호출할 수 있다.
- 그러나, 브라우저가 아닌 환경에서는 window 객체가 존재하지 않기 때문에 해당 환경에 맞는 대체 방법을 사용해야한다.