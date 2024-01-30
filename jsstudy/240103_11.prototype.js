// prototype

// js의 모든 객체는 함수를 통해 생성됨
// 그렇게 생성된 객체는 prototype이라는, 상속을 위한 property가 생성됨
// 굳이 따지면 js는 상속 모델이 아닌 위임(Delegation) 모델 사용함

// 각 ㄱ객체의 프라퍼티는 각 객체에 저장. 
// 각 객체의 메소드는 각 객체의 프로토타입에 저장.

// 모든 객체는 [[Prototype]]이라는 내부 슬롯 가짐. 그 값은 프로토타입의 참조.
// 모든 프로토타입은 생성자 함수의 참조인 constructor라는 프라퍼티 가짐

// 객체 리터럴에 의해 생성된 객체의 프로토타입은 Object.prototype
// 생성자 함수만 prototype 생성.
// 생성자 함수로 생성된 객체의 prototype은 생성자함수.prototype
// 거기에 접근하려면 __proto__ or Object.getPrototypeOf 사용

// 선언식 함수, 함수 리터럴은 생성될 때 prototype property 가짐
// 화살표 함수, 메소드는 생성될 때 protorype property 안 가짐

// __proto__
const yun = {
    name : '윤짱구',
    age : 5
}

console.log(yun);

console.log(yun.__proto__ === Object.prototype);                            // true (상속 받았으니까 같음)
console.log(yun.__proto__.constructor === Object.prototype.constructor);    // true (이것도)

console.log(yun.__proto__.constructor === Object);                          // true (constructor == constructor)
console.log(yun.__proto__.constructor === Object());                        // false (constructor != 객체)
console.log(yun.__proto__.constructor === new Object());                    // false (Object(), new Object() 똑같은 표현)

console.log('---------------');

yun.hobby = ['축구', '술'];
console.log(yun);

// Object의 prototype에 메소드를 추가해보자
Object.prototype.printHobby = function() {
    console.log(this.hobby);
}

// yun은 Object를 상속 받은 놈이니까 Object의 메소드 사용(접근) 가능
// 이 때 메소드 내의 this는 '해당 메소드를 호출한 객체(여기서는 yun)'의 참조
// this는 나중에 더 자세히 하는 걸로
yun.printHobby();

console.log('---------------');

yun.__proto__.printName = function() {
    console.log('새이름');
}

Object.prototype.printName();

console.log('---------------');

// 생성자 함수를 통한 객체 생성
    // 문제점 : 동일한 메소드가 객체마다 생성됨
function Circle(radius) {
    this.radius = radius,
    this.getArea = function() {
        return Math.PI * this.radius**2;
    }
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea == circle2.getArea);    // false (각 객체마다 메소드를 하나씩 가져버림)

console.log(circle1.getArea());
console.log(circle2.getArea());
console.log('---------------');

// 화살표함수, 메소드는 prototype 안 가짐
console.log((() => {}).prototype);  // undefined

const myObj = {
    name() {
        return this.name;
    }
}

console.log(myObj.prototype);   // undefined
console.log('---------------');

// 프로토타입 기반 상속 : 프라퍼티는 각자, 메소드는 공유
// js에서는 상속을 프로토타입으로 진행함
function Circle2(radius) {
    this.radius = radius;
}

Circle2.prototype.getArea = function() {
    return Math.PI * this.radius**2;
}

const circle3 = new Circle2(1);
const circle4 = new Circle2(2);

console.log(circle3.getArea == circle4.getArea);    // true (메소드 공유)

console.log(circle3.getArea());
console.log(circle4.getArea());
console.log('---------------');

// [[Prototype]] 숨김 프라퍼티 사용하는 이유 : 순환참조 방지
// 순환참조 : 서로서로 참조를 무한루프. a > b > a > b > a...
const a = {};
const b = {};

// 순환참조 시켜서 에러를 내보자
// a.__proto__ = b;
// b.__proto__ = a;
console.log('---------------');

// 객체리터럴로 생성된 객체의 프로토타입은 __proto__로 접근
const person = {};  // 이 놈은 생성자 함수를 따로 갖지 않아 > 그럼 Object의 생성자 함수를 갖다 써버림

console.log(person.__proto__ === Object.prototype);     // true
console.log(person.__proto__.constructor);      // Object
console.log('---------------');

// 생성자함수로 생성된 객체의 프로토타입은 prototype으로 접근
function Person() { 
    // 생성자함수 Person
    // 이 놈의 프로토타입은 Function의 프로토타입임
}

const person2 = new Person();   // person2는 생성자함수 Person의 객체 > 이 놈의 프로토타입은 Person의 프로토타입

console.log(person2.__proto__ === Person.prototype);    // true
console.log(person2.__proto__ === Object.prototype);    // false

console.log(Person.__proto__ === Object.prototype);     // false
console.log(Person.__proto__ === Function.prototype);   // true

console.log(Function.__proto__ === Object.prototype);   // false
console.log('---------------');

Function.__proto__ = Object.prototype;
console.log(person2.__proto__ === Function.__proto__);
console.log('---------------');

// Object.getPrototypeOf

// o라는 객체
const o = {
    newo : 'newo'
}

// o라는 객체의 프로토타입
const op = Object.getPrototypeOf(o);

// 프로토타입에 프라퍼티 추가
op.name = 'op';

// 메소드도 추가
op.print = function() {
    console.log('op');
}

console.log(op);
console.log('---------------');

// 프로토타입 상속
const p = new Object();

p.name = 'p';
p.__proto__ = o ;

console.log(Object.getPrototypeOf(p));
console.log('---------------');

// 프로토타입 체인
const grandParent = {
    name : 'grandParent',
    age : 80,
    printGrandParent : () => {console.log('grandParent!');}
}

const parent = {
    name : 'parent',
    age : 50,
    __proto__ : grandParent,
    printParent : () => {console.log('parent!');}
}

const child = {
    name : 'child',
    age : 20,
    __proto__ : parent,
    printChild : () => {console.log('child!');}
}

console.log(grandParent.__proto__ === Object.prototype);    // true

console.log(parent.__proto__ === grandParent.prototype);    // false
console.log(child.__proto__ === parent.prototype);          // false
console.log('---------------');

console.log(parent.__proto__.name);     // grandParent
console.log(grandParent.__proto__.name);
console.log('---------------');

// ???? 뭔가 새로운걸 함
const obj1 = {
    name : '머하는거지',
    age : 333
}

const obj1Prototype = Object.getPrototypeOf(obj1);
obj1Prototype.hobby = ['놀기', '나가기'];

const obj2 = {
    name : '아힘들다',
    age : 10,
    __proto__ : obj1
}

console.log(obj2.hobby);

const obj3 = {
    name : '모르겟다',
    age : 2525,
    __proto__ : obj2
}

const obj3Prototype = Object.getPrototypeOf(obj3);
obj3Prototype.hobby = ['죽도록놀기', '어디든나가기'];
console.log('---------------');

console.log(obj1.hobby);
for (prop in obj1) {
    console.log(prop, obj1[prop]);
}
console.log('---------------');

console.log(obj2.hobby);
for (prop in obj2) {
    console.log(prop, obj2[prop]);
}
console.log('---------------');

console.log(obj3.hobby);
for (prop in obj3) {
    console.log(prop, obj3[prop]);
}
console.log('---------------');

// 정적프라퍼티 / 정적메소드
    // 생성자함수객체에 선언한 프라퍼티와 메소드
    // 생성자함수객체를 통해서만 참조가 가능
    // 생성자함수를 통해 생성된 객체에서는 참조가 불가능
    // 생성된 객체들이 공유 
function PC() {
    name :'퍼스널컴퓨터'
}

PC.price = 10000;           // 정적 프라퍼티

PC.getPrice = function(){   // 정적 메소드
    return this.price;
}

console.log(PC.price);      // 10000
console.log(PC.getPrice()); // 10000

//인스턴스라 접근안됨 
const pc1 = new PC();
const pc2 = new PC();

//console.log(pc1.price);       //error
//console.log(pc1.getPrice);    //error

//객체로는 접근을 못하니까 생성자함수 찾아서 접근
console.log(pc1.constructor.price);
console.log(pc1.constructor.getPrice());
console.log('---------------');

// in 연산자 : 프로퍼티 존재 확인 (ES6의 Reflect.has)
console.log('name' in pc1);             // true
console.log('prototype' in Object);     // true
console.log(Reflect.has(pc1, 'name'));  // true
console.log(Reflect.has(pc1, 'price')); // false
console.log('prototype' in pc1);        // false
console.log('prototype' in PC);         // true
console.log('---------------');

// Object.keys, 
// Object.values,
// Object.entries(ES8)
const gum  = {
    brand : '롯데',
    name : '자일리톨',
    price : 1000
}

console.log(Object.keys(gum));
console.log(Object.values(gum));
console.log(Object.entries(gum));
console.log('---------------');

// 실습 1. 생성자함수 아무거나 하나 만들고 객체 2개 생성해서 출력
function Robot(name, number) {
    this.name = name,
    this.number = number;
}

const robot1 = new Robot('로봇1', 100);
const robot2 = new Robot('로봇2', 200);

console.log(robot1);
console.log(robot2);
console.log('---------------');

// 실습 2. 분류가 가능한 어떤 것을 선택해서 3단계 이상의 상속구조 만들기
// 예 ) 동물 > 새 > 닭
const animal = {
    tier : 1,
    name : '동물'
}

const bird = {
    tier : 2,
    name : '새',
    __proto__ : animal
}

const chicken = {
    tier : 3,
    name : '닭',
    __proto__ : bird
}

for (prop in chicken) {
    console.log(prop, chicken[prop]);
}

// 실습 3. 
// http://172.30.1.34:9999/ajaxTest/members.xml
// 1. AJAX 통신으로 xml 데이터 읽어오기
// 2. js로 member 객체 생성하고, admin 객체와 user 객체가 member 객체를 상속받도록 하기
// 3. 읽어온 데이터를 화면(HTML or console)에 출력

// ajaxtest.html
// ajaxtest.js


// 실습 4. 
// http://172.30.1.34:9999/ajaxTest/members.json
// 1. AJAX 통신으로 json 데이터 읽어오기
// 2. js로 member 객체 생성하고, admin 객체와 user 객체가 member 객체를 상속받도록 하기
// 3. 읽어온 데이터를 화면(HTML or console)에 출력