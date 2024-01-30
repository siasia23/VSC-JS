/* 정규표현식 */
// - 패턴(pattern)과 플래그(flag)를 정의하여 문자열내에서
//   특정한 패턴에 해당하는 문자열 존재여부를 확인하는데 사용
// - JS에서는 RegExp생성자의 객체
// - 정규표현식리터럴 : //
// - 문법 : /pattern/flags
// - 메서드
// 1) test : 패턴에 부합하는 문자열이 있으면 true, 없으면 false
// 2) match : 패턴에 부합하는 문자열(들) 배열로 변환
// 3) replace : 패턴에 부합하는 문자열을 치환

const str = 'hello! are you human?';

// 정규표현식 리터럴 생성
const re1 = /h/;
const re2 = /h/g;
console.log(re1.test(str));
console.log(re2.test(str));
const result1 = str.match(re1);
const result2 = str.match(re2);
console.log(result1);
console.log(result2);
console.log(str.replace(/hello/, 'hi'));

// 실습 1) 첫번째 h를 H로 치환
console.log(str.replace('h', 'H'));

// 실습 2) 모든 h를 H로 치환
console.log(str.replace(/h/g, 'H'));

// 실습 3) 영문자들만 추출
console.log(str.match(/[a-zA-Z]/g));

// 실습 4) 영문자가 아닌 것들만 추출
console.log(str.match(/[^a-zA-Z]/g));

// 실습 5) 영문자의 총 개수
console.log(str.match(/[a-zA-Z]/g).length);

// 실습 6) 모든 공백문자들을 제거
console.log(str.match(/[^\s]/g).join(''));  // join : 이어붙여져서 나옴
console.log(str.replace(/\s/g,''));    // 다른 방법

// 실습 7) 문자열이 3문자로 구성된 것들만 추출
console.log(str.match(/[a-zA-Z]{3}/g));

// 실습 8) 영문이나 공백문자가 아닌것들만 추출
console.log(str.match(/[^a-zA-z\s]/g));

// 실습 9) 문자열이 y로 시작하고 u로 끝나는 문자열 추출
console.log(str.match(/y.*u/));

// 실습 10) 문자열이 5개로 구성된 단어들만 추출
console.log(str.match(/[a-zA-Z]{5}/g));

// 소문자를 대문자로 치환코드
"abc".split('').forEach(ch => {             
    console.log(String.fromCharCode(ch.charCodeAt()-32));   
});
// "abc"문자열을 split하여 'a','b','c'로 변환후 forEach로 하나씩 뽑아서 ch로 전달
// String.fromCharCode()는 아스키코드를 문자로 변환시킴
// charCodeAt()는 문자를 아스키코드값으로 변환시킴
// ch에 해당하는 문자의 아스키코드값을 받아와 -32로 대문자 아스키코드값으로 바꾸고
// 그걸다시 fromCharCode()를 사용해서 받아온 대문자 아스키코드값을 문자로 변환