// JSON : 일종의 데이터 교환 포맷
// javascript 표기법 사용

// 객체 (object)
let obj = {};
// 배열 (array)
let arr = [];
// 함수
let func = function() {};
// 정규표현식 ( regular expression)
let reg = ;
// 숫자 (number)
let num = 100;
// 문자열 (string)
let str = 'Hello';
// boolean
let bool = true;
// null
let nul = null;

// js에서 모든 것은 value다!!!
// literal : 코드에 쓰여진 value

// 변수는 선언(타입 지정), 초기화(값을 처음 할당), 할당(값을 저장)의 단계를 거침.
let v; // undefined : 선언만 한 상태. 값이 아직 없다.
let v2 = null; // 선언 되고 null 값으로 초기화 됨

// JSON data
// 1. Object
// 객체랑 배열 변수 선언 때는 const로 함
const obj1 = {
    "name":"짱구",
    "age": 5,
    "hobby":["잠","놀기","장난"]
};

let name=obj.name;
obj.name="맹구";

const arr1 = obj.hobby;
let firsthobby = obj.hobby[0];

// 2. Array
const arr2 = [1,2,3,4,5];

// 3. Function
let func1 = function() {
    console.log("Hello");
};
func1(); // 호출

// 4. regular expression
let reg1 = /abc/;
// a라는, b라는, c라는 문자열 패턴이다.

