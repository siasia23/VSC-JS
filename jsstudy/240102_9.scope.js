// scope : 변수, 함수의 유효 범위 (참조 범위)
// js에서는 global, local, module scope로 구분됨
// 선언 위치를 scope의 유효 범위로 보는 정적스코프(렉시컬 스코프)
    // global scope : 모든 excutive context(실행 컨텍스트 : 코드가 실행되고 있는 문맥)에서 참조 가능한 유효 범위
    // local scope : function과 block으로 구분
    // var로 선언한 변수는 block scope을 갖지 않음 = 블럭 안에 var로 선언해도 전역 변수라는 뜻
    // ES5까지 변수 중에서 var는 전역스코프, 함수는 지역스코프
    // ES6에서는 let, const : global scope, 
    //            function : local scope,
    //               block : local, module scope
// scope chain : 식별자 검색을 위해 사용되는 하위스코프에 상위스코프로의 연결
// js는 모든 식별자 선언을 hoisting 함 (단, let, const, class 선언은 제외)

// global scope
var global_var = 'global_var';
let global_let = 'global_let';
const global_const = 'global_const';

// global은 함수 안에서도 사용 가능
function f1() {
    console.log(global_var);
    console.log(global_let);
    console.log(global_const);
}
f1();

// global은 블럭 안에서도 사용 가능
{
    console.log(global_var);
    console.log(global_let);
    console.log(global_const);  
}

// local scope
// 함수 안에서 선언된 식별자는 함수스코프(함수 내에서만 참조 가능)
function f2() {
    var func_var = 'func_var';
    let func_let = 'func_let';
    const func_const = 'func_const';
    console.log(func_var);
    console.log(func_let);
    console.log(func_const);
}
f2();

// block scope
// var는 block 안에 선언해도 전역변수!! 주의!!!
{
    var block_var = 'block_var';    // global!!
    let block_let = 'block_let';
    const block_const = 'block_const';
    console.log(block_var);
    console.log(block_let);
    console.log(block_const);
}

console.log(block_var);
// console.log(block_let);     // error
// console.log(block_const);   // error

// scope chain
var sc_var = 'global_sc_var';
let sc_let = 'global_sc_let';
const sc_const = 'global_sc_const';

function f3() {
    // function local
    var sc_var = 'func_sc_var';
    let sc_let = 'func_sc_let';
    const sc_const = 'func_sc_const';
    {   
        // block local
        var sc_var = 'block_sc_var';    // global해져서 한 단계 바깥인 function scope까지 올라감
        let sc_let = 'block_sc_let';
        const sc_const = 'block_sc_const';
        console.log();
        console.log(sc_var);
        console.log(sc_let);
        console.log(sc_const);
    }
    console.log();
    console.log(sc_var);
    console.log(sc_let);
    console.log(sc_const);
}

f3();
console.log();
console.log(sc_var);
console.log(sc_let);
console.log(sc_const);

// hoisting
console.log();
console.log(h_var); // var 선언문 호이스팅은 됐고, 값 할당 전에 찍어냈으니까 undefined

h_var = 'h_var';    // 앞에 아무것도 안 쓰면 js 엔진이 자동으로 var 부여해서 동작함
console.log(h_var);

var h_var;  // hoisting 돼서 값이 부여돼버림
console.log(h_var);

console.log();

h_let = 'h_let';    // var 자동부여
console.log(h_let);

// let h_let;  // error : let은 호이스팅 불가

// 함수 호이스팅
f4();

// 선언식 함수는 코드 실행 전에 모두 호이스팅 됨
// 선언식 함수는 global의 property
function f4() {
    console.log('f4');
}

// 함수 호이스팅 & 재정의
function f4() {
    console.log('f4 redefined');
}

f4();

console.log();

var ex_var = 'ex_var';
let ex_let = 'ex_let';

function f5() {
    console.log(ex_var);    // var hoisting o > undefined
    console.log(ex_let);    // let hoisting x > error

    ex_var = 'f5_ex_var'    // 값 할당문은 호이스팅 불가. 선언문과 할당문은 별개
    ex_let = 'f5_ex_let'

    var ex_var;             // var 선언문만 호이스팅 가능
    let ex_let;
}

f5();