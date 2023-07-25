var VAR;
let LET;
// const CONST; // Error: 선언한 시점에서 값을 대입하지 않으면 에러 발생
function FUNCTION() { };
class CLASS { };
console.log(VAR, LET, FUNCTION(), CLASS);   // undefined undefined undefined class CLASS {}
// 변수는 값이 정의되지 않았기 때문에 undefined
// 함수는 반환이 선언도, 정의도 되지 않았기 때문에 undefined
// class는 그냥 class
if (VAR == undefined) { }   // true
if (LET == undefined) { }   // true
if (FUNCTION() == undefined) { }    // true
if (CLASS == undefined || CLASS == null) { } // false






function FUNCTION() {
    return;
}
let FUNCTION_CONTAINER = FUNCTION();
console.log(FUNCTION, FUNCTION(), FUNCTION_CONTAINER /*, FUNCTION_CONTAINER() // Error: 함수가 아님*/);    // function undefined undefined
// 그냥 함수 내용이 반환됨
// 반환이 정의되지 않았기 때문에 undefined
// FUNCTION()가 undefined로 대체되면서 FUNCTION_CONTAINER도 undefined가 됨.
if (FUNCTION == undefined || FUNCTION == null) { }    // false
if (FUNCTION() == undefined) { }    // true
if (FUNCTION_CONTAINER == undefined) { }    // true






let array1 = ["a", "b", "c"];
let array2 = Array(3);
let array3 = new Array(3);
let object1 = {
    "a": "aaaa"
}
let map1 = new Map();
map1.set("a", "aaaa");
console.log(array1[999], array2[1], array3[1], object1["b"], object1.b, map1.get("b"));    // undefined undefined undefined undefined undefined undefined
// 정의되지 않은 공간에 접근했기 때문에 undefined
// 초기화되지 않았기 때문에 undefined
// 초기화되지 않았기 때문에 undefined
// 정의되지 않은 키값에 접근했기 때문에 undefined
// 정의되지 않은 키값에 접근했기 때문에 undefined
if (array1[999] ==undefined) {} // true
if (array2[1] == undefined) {} // true
if (array3[1] == undefined) {} // true
if (object1["b"] == undefined) {} // true
if (object1.b == undefined) {} // true
if (map1.get("b") == undefined) {} // true







let str1 = "Seoul-ICT-Web-Base";
let str2 = "XXX";
str1.indexOf(str2); // -1
str1.search(str2)   // -1
str1.match(/[XXX]/gi)   // null
// 같은 검색 기능인데, 왜 match만 null 반환인지 모르겠다.
if (str1.indexOf(str2) == undefined || str1.indexOf(str2) == null) {}   // false
if (str1.search(str2) == undefined || str1.search(str2) == null) {} // false
if (str1.match(/[XXX]/gi) == undefined) {} // false
else if (str1.match(/[XXX]/gi) == null) {} // true