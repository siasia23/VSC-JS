// 실행컨텍스트

// 코드실행을 위해 필요한 평가단계와 실행단계에 사용되는 데이터와 환경, 실행흐름을 합친 용어
// 4가지 코드 : 전역, 함수, eval, 모듈

// js는 소스코드를 실행컨텍스트에 따라 평가단계와 실행단계로 구분해 사용.
    // 1. 평가단계 : 실행컨텍스트 생성, 선언문 실행, 선언처리된 식별자를 실행컨텍스트가 관리하는 스코프에 등록
    // 2. 실행단계 : 선언문을 제외한 코드를 순차적으로 실행 (런타임이라고 함)

// 컨텍스트 스위칭 : 호출 순서에 따라 전역-함수 실행컨텍스트가 변경되는 것
// 전역 > 함수 > 전역 > 함수 > 함수 ...

// 컨텍스트 스택 : 컨텍스트가 스위칭되면 사용할 새로운 컨텍스트가 생겨서 컨텍스트 스택에 쌓이고,
//                해당 작업을 종료하면, 컨텍스트는 소멸하고,
//                기존 컨텍스트로 컨텍스트 스위칭이 일어남.

// 렉시컬 환경 : 식별자, 식별자에 바인딩 된 값, 상위스코프 참조를 기록하고 스코프나 식별자를 관리

const x = 1;

function foo() {
    const y = 2;
    function bar() {
        const z = 3;
        console.log(x+y+z);     // 6
    }
    bar();
}

foo();

// 위 코드의 실행 과정

// 1. 전역객체 생성

// 2. 전역실행컨텍스트
    // 1) 평가 : x, foo 선언, 초기화 값
    // 2) 실행 : x=1, foo 호출 (컨텍스트 스위칭 : 전역 > foo 함수)

// 3. 함수실행컨텍스트 (foo)
    // 1) 평가 : y, bar 선언, 초기화 값
    // 2) 실행 : y=2, bar 호출 (컨텍스트 스위칭 : foo 함수 > bar 함수)

// 4. 함수실행컨텍스트 (bar)
    // 1) 평가 : z 선언
    // 2) 실행 : console.log(x+y+z)

// 함수실행컨텍스트 (bar) 종료
// 함수실행컨텍스트 (foo) 종료
// 전역실행컨텍스트 종료

//------------------------------------------------------------------------------------

// 클로저

// 외부함수보다 중첩함수가 더 오래 유지되는 경우
// 이미 소멸했어여 하는 외부함수의 변수를 중첩함수가 참조하게 되는 경우 외부함수의 변수가 유지됨.
// 그 때의 중첩함수를 클로저라 함

const b = 1;
function outer() {
    const b = 10;
    const inner = function() {
        console.log(b);
    }
    return inner;
}

const innerfunc = outer();

innerfunc();    // 10
console.log();

// 클로저의 활용
// 상태를 안전하게 변경하고 유지하기 위해 사용
// 상태를 내부에 은닉하고 특정 함수에게만 상태변경을 허용하기 위해 사용
// 외부함수의 상태를 저장한 변수가 외부함수의 실행종료 이후에도 사용되게 하기 위해 클로저 사용

// 1. 전역변수 사용한 카운터
// 증가는 되지만 num1의 값을 누구나 변경할 수 잇따. (정보은닉 실패)
let num1 = 0;

const increase1 = function() {
    return ++ num1;
}

console.log(increase1());   // 1
console.log(increase1());   // 2
console.log(increase1());   // 3
console.log();

// 2. 지역변수 사용
// num2의 값을 increase2만 변경할 수 있지만 증가가 되지 않음.
// 정보은닉 성공했지만 기능 수행 못함
const increase2 = function() {
    let num2 = 0;
    return ++ num2;
}

console.log(increase2());   // 1
console.log(increase2());   // 1
console.log(increase2());   // 1
console.log();

// 3. 클로저 사용
// num3 값을  increase3만 변경할 수 잇고 기능도 ㅇㅋ
const increase3 = (function() {
    let num3 = 0;
    return function() {
        return ++ num3;
    }
}())

console.log(increase3());   // 1
console.log(increase3());   // 2
console.log(increase3());   // 3
console.log();

// 4. 클로저를 IIFE(즉시실행함수 : 만드는 순간에 호출됨. 만들면서 실행돼버림) 형식의 생성자함수로 표현
const Counter = (function() {
    let num = 0;
    function Counter() {

    }

    Counter.prototype.increse = function() {
        return ++ num;
    }

    Counter.prototype.decrese = function() {
        return -- num;
    }
    
    return Counter
}())

const counter = new Counter();

console.log(counter.increse());     // 1
console.log(counter.increse());     // 2
console.log(counter.decrese());     // 1
console.log(counter.decrese());     // 0
console.log();