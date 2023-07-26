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