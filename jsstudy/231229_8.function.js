// js는 함수 기반의 언어
// 함수는 호출할 수 있는 객체이자 값(리터럴). 변수에 저장도 가능하고 파라미터로 전달도 가능함.
// 단, 선언식 함수는 값이 아님.

// 함수는 값!
const func0 = function(a=3, b=5) {
    return a+b;
}
console.log(func0);

const str = '' + func0;
console.log(str);

// 함수 정의

// 1. 선언적 함수 : function keyword + function name
// 이건 전역함수임. global function. 어디서든 참조 가능하지만 메모리 많이 차지함.
function func1(a, b) {
    return a + b;
}
console.log(func1(3,5));    // 파라미터 전달

// 2. 함수 리터럴
const func2 = function(a, b) {
    return a + b;
}
const func3 = function f3(a, b) {   // 이름이 f3인 함수. f3은 함수리터럴(블록) 내에서만 사용 가능 (함수의 지역변수)
    return a + b;
}

// 3. 함수 생성자 : 사용 비추
const func4 = new Function('a', 'b', 'return a+b');
console.log(func4(3,5));

// 4. 화살표 함수 (arrow function) : ES6
const func5 = (a, b) => a+b;
// const func5 = function(a,b) {return a+b;}

// 함수 문장 vs 함수 표현식
function func6() {
    console.log('func6');
}
func6();    // 호출

(function func7(){
    console.log('func7');
});

// func7()  // error. 호출 불가

(function(a, b){
    console.log(a + b);
})(3,5);    // 인자 넣어서 호출

if ((function(){return 1;})())
    console.log('함수표현식');

// IIFE (Immediately Invoked Function Expression) : 즉시표현함수 : 정의되자마자 즉시 실행되는 함수
let result = (function() {
    return 1;
})();

// 함수의 인자(arguments)
// arguments : 현재 실행중인 함수에 전달된 인자 배열
// arguments.length : 전달받은 인자 배열의 개수
// arguments.callee : 인자를 전달받아 현재 실행중인 함수
function func8() {
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments.callee);
}

func8(3,5);
func8(3,5,7,9);

// function parameter and arguments
// 호출 시 arguments를 몇 개를 부여하든 함수에 정의된 parameter 개수만큼만 인식됨.
function func9(a,b,c) {
    return a+b;
}
console.log(func9(3,5,7,9));
console.log(func9(3,5,7));
console.log(func9(3,5));
console.log(func9(3));  // NaN return되지만 만약 func9가 a=0,b=0,c=0처럼 기본값을 가졌으면 return 3.

// 가변매개변수 함수 (Rest Parameter Function) : ES6
// 인자가 몇개가 들어오든 하나의 배열로 받아버림
function func10(...args) {  // ...은 문법! '스프레드 연산자'라고 함.
    console.log(args);
    console.log(arguments);
    console.log(arguments.length);
}

func10(3);
func10(3,5);
func10(3,5,7);

// Callback Function
// js에서는 파라미터에 값으로 전달되는 함수리터럴을 콜백함수라고 함

// 유형 1.
function hof(a, f) {
    return a + f(a);
}   // 선언식 함수
const cb = function(a) {
    return a ** 2;
}   // 함수 리터럴
console.log(hof(3, cb)); 

// 유형 2.
const fa = function(a, f) {
    return a + f();
}
const fb = function(a) {
    return fa(a, function(){
        return a ** 2;
    });
}
console.log(fb(3));

// 책 529p ~
// 배열 고차 함수 4가지 : sort, map, filter, reduce
const arr = [1,2,3,4,5];
console.log(arr);

// 1. sort(function(a,b){return a-b;}) : 오름차순 정렬
// 1. sort(function(a,b){return b-a;}) : 내림차순 정렬
const arrsort = arr.sort(function(a,b){
    return b-a;
})
console.log(arrsort);

// 2. map : 각 엘리먼트에 함수 작업을 수행해버림
const arr2x = arr.map(function(ele){
    return ele * 2;
})
console.log(arr2x);

// 3. filter : 조건에 맞춰 필터링
const arrlt6 = arr2x.filter(function(ele){
    return ele < 6;
})
console.log(arrlt6);

// 4. reduce : 배열 요소들의 값을 누적시켜버림
    // 첫번째인자 : 콜백함수, 두번째인자 : 누적 시작할 인덱스
    // acc : 누적값, curr : 현재값
    // 숫자 연산에서는 plus, 문자열 연산에서는 접합
const arrsum = arrlt6.reduce(function(acc,curr){
    return acc + curr;
}, 0);
console.log(arrsum);

// Function Chaining : 함수를 연결해서 사용하는거
    // 함수의 return 값이 다시 함수일때
const arr2 = [1,2,3,4,5];

console.log(
    arr2.sort(function(a,b){        // arr2를 정렬해라
        return b-a;                 // 내림차순으로
    }).map(function(ele){           // 그 결과값을 mapping 해라
        return ele ** 2;
    }).filter(function(ele){        // 그 결과값을 다음 조건으로 filtering 해라
        return ele > 10;
    }).reduce(function(acc, curr){  // 그 결과값을 누적해라
        return acc + curr;
    }, 0)                           // 인덱스 0부터
);

// 위의 코드를 arrow function 형식으로 바꿔보자
const arr3 = [1,2,3,4,5];

console.log(
    arr3.sort((a,b) => b-a)
        .map(ele => ele ** 2)
        .filter(ele => ele > 10)
        .reduce((acc, curr) => acc + curr, 0)
);



/////// 실습
// 1. 함수 체이닝 : 역순으로 정렬 - 완료
const arr4 = ['a','b','c','d','e'];

console.log(
    arr4.sort(a, b => b.charCodeAt() - a.charCodeAt())
);

// 2. 함수 체이닝 : 배열 요소를 33, 34, 35, 36, 37로 변경 - 완료
const arr5 = ['a','b','c','d','e'];

console.log(
    arr5.map(ele => ele.charCodeAt() - 64)
);

// 3. 함수 체이닝 : 배열 요소를 a, bb, ccc, dddd, eeeee로 변경
const arr6 = ['a','b','c','d','e'];

console.log(
    // arr6.map(ele => )
);

// 4. [마, 라, 다, 나, 가] 로 변경
const arr7 = ['a','b','c','d','e'];

console.log(
    // arr7.
);

// 5. ASCII코드값의 총합 구하기 - 완료
const arr8 = ['a','b','c','d','e'];

console.log(
    arr8.map(ele => ele.charCodeAt())
        .reduce((acc, curr) => acc + curr, 0)
);

// 6. 
const students = [
    {"s001" : {sname: "홍길동", skor: 100, seng: 90, smath: 80}},
    {"s002" : {sname: "강감찬", skor: 90, seng: 80, smath: 70}},
    {"s003" : {sname: "이순신", skor: 80, seng: 70, smath: 60}},
    {"s004" : {sname: "장보고", skor: 70, seng: 60, smath: 50}},
    {"s005" : {sname: "최영", skor: 60, seng: 50, smath: 40}}
    ];
    
    // 함수 체이닝 과제 1)
    // 각 학생의 과목별점수와 과목별점수평균과의 차를 구하여 아래와 같이 출력하시오.
    // 홍길동 국어:+20, 영어:+20, 수학:+20
    // 강감찬 국어:+10, 영어:+10, 수학:+10
    // 이순신 국어:+0, 영어:+0, 수학:+0
    // 장보고 국어:-10, 영어:-10, 수학:-10
    // 최영 국어:-10, 영어:-20, 수학:-20
    
    // 함수 체이닝 과제 2)
    // 각 학생의 정보와 과목별총점을 아래와 같이 출력하시오.
    // s001 홍길동 국어:100 영어:90 수학:80
    // s002 강감찬 국어:90 영어:80 수학:70
    // s003 이순신 국어:80 영어:70 수학:60
    // s004 장보고 국어:70 영어:60 수학:50
    // s005 최영 국어:60 영어:50 수학:40
    // 총점 국어:400 영어:350 수학:300