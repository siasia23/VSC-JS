// 향상된 for문?

// 객체를 만들어보자
const obj = {   // 이 놈의 key : name, age, adress
    name: "짱구",
    age: 5,
    address: "떡잎마을"
};

// 배열을 만들어보자
const arr = [1,2,3,4,5];

// 맵을 만들어보자
const map = new Map();  // java의 그 map!
map.set('key', 'value');
map.set('map에', '추가할 때는');
map.set('set', '사용');

// 세트를 만들어보자
const set = new Set();
set.add('set에');
set.add('추가할 때는');
set.add('add 사용');

// 문자열을 만들자
const str = '문자열임';

// for ~ in 구문 : 객체의 프라퍼티 반복에 사용
for (key in obj) {  // 여기서 key는 변수명이므로 내 맘대로 정하면 됨.
    console.log(`${key} = ${obj[key]}`);    // 위에서 정한 변수명을 넣어줌. 파라미터 느낌!
}
// 객체의 key에 접근하는 방법 2가지
    // 1. obj.name
    // 2. obj['name']

// for ~ of 구문 : Itreable(array, map, set, string...) 반복에 사용
for (ele of str) {  // 여기서 ele는 변수명이므로 내 맘대로 정하면 됨.
    console.log(ele);   // 위에서 정한 변수명을 넣어줌. 파라미터 느낌!
}