// 변수 : 선언 > 초기화 > 할당
// js 변수 : 선언하면 자동으로 undefined로 초기화됨

// 1. 선언
var v1;
let l1;
const c1 = null;

console.log(v1);
console.log(l1);
console.log(c1);

// 2. 초기화
v1 = 1;
l1 = 'Hello';

console.log(v1);
console.log(l1);
console.log(c1);

// 변수 타입은 초기화 또는 값 할당 때 결정됨!!!
// 다른 타입으로 할당하면 타입 자동 변환됨!!!

let v2 = 1;
console.log(`v2=>${v2}, type=>${typeof v2}`);

v2 = 'letters';
console.log(`v2=>${v2}, type=>${typeof v2}`);

v2 = true;
console.log(`v2=>${v2}, type=>${typeof v2}`);

// Hoisting : js 엔진이 변수나 함수의 선언문을 자동으로 최상단으로 끌어올려줌.
// 선언 > 사용 순서가 뒤바뀌어도 된단 얘기
// var는 가능. let, const는 불가
console.log(v6);
var v6;     // 정상

// console.log(v10);
// let v10;    // 에러

// 함수 호출
hello();
// 함수 선언
function hello() {
    console.log('hi');
}

// 변수 scope : 변수를 사용할 수 있는 범위(영역)

    // 전역(global) 변수 : 함수나 블럭 밖에서 선언한 변수. 어디서든 사용 가능. 
    // 함수 변수 : 함수 내에서 선언한 변수. (함수의 local 변수)
    // 블럭 변수 : 블럭 내에서 선언한 변수. (블럭의 local 변수. 단, var로 선언해버리면 global 변수로 행동헤버림!!! 그니까 쓰지말자)