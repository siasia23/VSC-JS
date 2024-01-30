// 형변환

let num = 3;
let numStr = String(num);   // string type으로 바꾸는 함수

let str = '100';
let strNum = Number(str);   // number type으로 바꾸는 함수

let str2 = 'true';
let str2Bool = Boolean(str2);   // boolean type으로 바꾸는 함수

console.log(numStr, typeof numStr);
console.log(strNum, typeof strNum);
console.log(str2Bool, typeof str2Bool);

console.log(1 + 'hello');   // hello가 string type이어서 여기서 +는 문자열 접합 연산이 됨
console.log(true + 'hello');    // 여기도 마찬가지
console.log(1 + '100'); // 여기도

console.log(3 * '100'); // 수리연산자여서 100이 number type이 됨
console.log(true * '100');  // 수리연산자여서 true가 number type 됐고, 그 값은 1

console.log(false || 1);    // 논리 OR 연산

// 단축평가 : || (논리합) 또는 &&(논리곱) 연산
    // 1. || : 왼쪽이 true > 오른쪽 패스
    // 2. && : 왼쪽이 false > 오른쪽 패스
let v1 = true || '흥!';
    v1 = '흥' || true ;
let v2 = false && '흥!';
    v2 = '흥!' && false;

// optional chaining : ES11 (2020년) 에 생김
    // ?. : 좌항이 null or undefined > return undefined
    //      그렇지 않으면 우항 수행
    // null error 방지하려고
let n = null;
// let nValue = n.value;   // null error
let nValue = n ?. value;    // n이 null이면 undefined 처리. (null error 안 남)

// nullish coaliscing : ES11 (2020년) 에 생김
    // ?? : 좌항이 null or undefined > 우항
    //      그렇지 않으면 좌항
    // null error 방지하려고
let n2 = null;
let n2Value = n2 ?? '워우어어';
