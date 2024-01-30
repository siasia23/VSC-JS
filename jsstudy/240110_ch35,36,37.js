// 스프레드 문법 : ...

// 이터러블한 값들의 분산을 위해 생긴 ES6의 문법
    // 이터러블한 값 : array, string, map, set, arguments, DOM컬렉션(NodeList, HTMLCollection)
// 객체는 이터러블이 아니어서 사용 불가지만 2021년부터 객체에도 사용 가능하도록 제안

console.log(...[1,2,3]);    // 1 2 3 목록 (이건 값이 아님. 변수에 할당 불가. 함수의 리턴값도 파라미터로 전달도 불가)
console.log(...'sleepy');   // s l e e p y 목록
console.log(...new Map([[1,'홍길동'],[2,'강감찬']]));
console.log(Math.max(...[1,2,3]));  // 3
console.log(Math.max([1,2,3]));  // NaN
console.log(Math.max(1,2,3));  // 3

// ...args : Rest Parameter (파라미터 여러개를 배열형태로 받는 역할)
(function(...args) {    // 이 ...은 스프레드 문법과 다름. 생긴거만 똑같다. 
    console.log(args);
})(1, 2, 3);    // [1, 2, 3]

console.log();

console.log([...[1,2], ...[3,4]]);  // [1, 2, 3, 4]
console.log();

console.log({x:1, y:2, ...{z:3}}); // {x: 1, y: 2, z: 3}

// 스프레드 문법은 값이 아니라 변수에 할당 불가
// const obj2 = ...[1,2];  // error

// -------------------------------------------------------------------------------------------
// 디스트럭처링(구조 분해) 할당

// 이터러블이나 객체를 분해해서 각각의 변수에 할당하는거.
// 배열에서 특정 요소들만 추출해서 변수화 하거나,
// 객체에서 특정 프라퍼티들만 추출해서 변수화 하는데 사용됨.
// 코드를 간결하게 하고 가독성을 높여줌.

const [one, two, three] = [1,2,3];
console.log(one, two, three);
console.log();

// console.log([a,b = [1]]);
// console.log([a,b = [1,2]]);
// console.log([a,b = [1,[2,3]]]);
console.log();

const user = {
    firstName : '이름',
    lastName: '성'
}

// console.log([firstName:fn, lastName:ln] = user);
// console.log(fn.ln)
console.log()

// 문자엵객체는 유사배열객체미므로
const str = 'Hello';
const {length} = str;
console.log(length);

// JSON 데이털
const todos = [
    {id:1, content:'HTML', completed: true},
    {id:2, content:'CSS', completed: false},
    {id:3, content:'JS', completed: false}
]

const [,{id}] = todos;
console.log(id);
console.log();

// 실습1. 세번째 객체에서 content 구조분해할당
const con3 = todos[1].content;
console.log(con3);

// 실습2. 첫번째 객체의 id보다 id 값이 큰 객체의 content를 구조분해할당
const [{id:id1}] = todos;   // id1은 변수명

todos.forEach(ele => {
    if (ele.id > id1) {
        const {content} = ele;
        console.log(content);
    }
})

// 실습3. 두번째 객체의 completed와 같은 completed를 가진 객체의 id 구조분해할당
const com2 = todos[1].completed

todos.forEach(ele => {
    if (ele.completed == com2) {
        console.log(ele.id);
    }
})
console.log();

// -----------------------------------------------------------------------------------------------------------------
// Set : 중복과 순서가 없는 자료구조
// js에서는 배열 이용해서 구현

// 숫자 set 만들어보자
const set1 = new Set([1,2,2,4]);
console.log(set1);
console.log();

// 문자 set 만들어보자
const set2 = new Set('hell');
console.log(set2);
console.log(set2.size);
console.log();

// 츄가해보자
set2.add('g');
set2.add('o');
console.log(set2);
console.log();

set2.add('a').add('b');
console.log(set2);

console.log(set2.has('a'));
console.log();

set2.delete('b');
console.log(set2);
console.log();

set2.clear();
console.log();

set1.forEach((v, v2, set) => console.log(v, v2, set));
console.log();

// --------------------------------------------------------------------------------------------
// Map
// 엔트리(키 + 값)로 구성됨
// 키는 중복 불가. 값은 중복 허용

const map1 = new Map([['name','홍'], ['age', 20]]);
console.log(map1);
console.log(map1.size);
console.log();

map1.set('hobby','잠자기');
console.log(map1);
console.log();

map1.delete('age');
console.log(map1);
console.log();

map1.clear();
console.log(map1);
console.log();

const map2 = new Map([['name','강감찬'],['age',30],['hobby','기침']]);

map2.forEach((v,k,map) => console.log(v,k,map));
console.log();

// 아래 두 개는 똑같다
for (entry of map2) {console.log(entry);};
for (entry of map2.entries()) {console.log(entry);};
console.log();

for (key of map2.keys()) {console.log(key);};
console.log();

for (value of map2.values()) {console.log(value);}
console.log();

console.log([...map2]);