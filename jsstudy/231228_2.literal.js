// literal : 코드에 쓰여 있는 값
// 모든 리터럴은 타입을 가짐

    // 숫자 : 정수, 실수, 2진수, 8진수, 16진수
    // 문자열
    // boolean
    // null
    // undefined
    // 객체
    // 배열
    // 함수
    // 정규표현식

let v1 = 100;
console.log(v1, typeof v1); // typeof : 타입을 모를때 타입 알아내려고 씀. return the type

let v6 = '문자열';
console.log(v6, typeof v6);

let v7 = true;
console.log(v7, typeof v7);

let v10 = {};
console.log(v10, typeof v10);
console.log(v10 instanceof Object); // instanceof : 타입 비교하려고 씀. return true or false

let v11 = [];
console.log(v11, typeof v11);
console.log(v11 instanceof Array);

let v12 = function() {};
console.log(v12, typeof v12);
console.log(v12 instanceof Function);

let v13 = /abc/;
console.log(v13, typeof v13);
console.log(v13 instanceof RegExp);

// 표현식(expression) : 값으로 평가될 수 있는 모든 것
// 문장(statement) : 프로그램의 구성 단위 (최소 실행 단위), 끝에 ; 붙이기!!!
// 토큰(token) : 문장의 구성단위. 문법적으로 더이상 쪼갤 수 없는 코드 요소

let vlet = 1+3 ;
// 표현식 : 1+3, vlet, 1, 3, vlet = 1+3
// 문장 : let vlet, let vlet = 1+3
// 토큰 : let, vlet, = , 1, +, 3, ;

// if의 () 안에는 값(표현식)만 들어갈 수 있다. 문장이 들어가면 에러남.
if(vlet2 = 1+3) {
    console.log('vlet2 = 1+3 은 표현식');
}