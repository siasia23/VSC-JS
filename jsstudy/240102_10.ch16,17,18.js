// property attribute : 속성, 메타 정보
// 객체 프라퍼티가 생성될 때 js 엔진이 자동으로 생성
    // [[value]] : 프라퍼티 값
    // [[Witerable]] : 값을 변경할 수 있는지
    // [[Enumerable]] : 프라퍼티 나열할 수 있는지
    // [[Configurable]] : 프라퍼티 삭제할 수 있는지

// js 엔진이 만들면 writerable, enumerable, configurable : true (default)
// property descriptor 객체 : property attribute의 정보를 가진 객체
// property 1개 당, descriptor 1개 생성됨

const person = {
    name : '짱구'
}

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
console.log();

person.age = 5;

console.log(Object.getOwnPropertyDescriptors(person));  // s !!!!!
console.log();

// property = 데이터 프라퍼티, 접근자 프라퍼티
    // 데이터 프라퍼티 : 값을 저장하는 프라퍼티. value 포함
    // 접근자 프라퍼티 : 값을 읽거나 쓰는 메소드 제공. get, set 포함

const person2 = {
    firstName : '짱구',
    lastName : '윤',
    
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');  // 문자열을 공백 기준으로 잘라라
    }
}

console.log(person2.firstName, person2.lastName);
console.log();

person2.fullName = '김 철수';   // set 호출
console.log(person2);
console.log(person2.fullName);  // get 호출
console.log(Object.getOwnPropertyDescriptor(person2, 'fullName'));

// 프라퍼티 정의
const person3 = {};

Object.defineProperty(person3, 'firstName', {
    value : '짱구',
    writable : true,
    enumerable : true,
    configurable : true
})

Object.defineProperty(person3, 'lastName', {
    value : '윤'
})

Object.defineProperty(person3, 'fullName', {
    get() {
        return `${this.firstName} ${this.lastName}`;
    },
    set(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
});

console.log(Object.getOwnPropertyDescriptors(person3));

// 프라퍼티 한 번에 모두 설정
const person4 = {};

Object.defineProperties(person4, {

    firstName : {
        value : '짱구',
        writable : true,
        enumerable : true,
        configurable : true
    },

    lastName : {
        value : '윤',
        writable : true     // 시발 이거 안 하면 성 안 바뀜. 인간이 설정하면 default는 false니까
    },

    fullName : {
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        set(name) {
            [this.firstName, this.lastName] = name.split(' ');
        }
    }
})

person4.fullName = '훈이 이';
console.log('여기임@@@@@@@@@@@@@');
console.log(person4.fullName);
console.log(Object.getOwnPropertyDescriptors(person4));

// 생성자 함수 (constructor function) : new 연산자로 객체 생성하는 함수. java beans 비슷한걸로 이해하자
    // 선언식 함수, 함수 리터럴에서 new 연산자로 호출하면 생성자 함수
    // 메소드, 화살표함수는 new연산자로 호출할 수 없는 일반함수
    // 일반적으로 생성자 함수명은 대문자로 시작하는 관례가 있다

const car1 = {
    name : 'volvo',
    color : 'red'
};
console.log(car1);

const car2 = {
    name : 'bmw',
    color : 'blue'
};
console.log(car2);

function Car(name, color){      // 생성자 함수
    this.name = name;
    this.color = color;
}

const car3 = new Car('volov', 'red');
console.log(car3);

const car4 = new Car('bmw', 'blue');
console.log(car4);
console.log();

// 생성자함수는 return문을 사용하지 않거나 기본 타입 값을 반환하게 하면, 생성된 객체를 자동 반환
// 그때의 this는 생성된 객체를 가르킨다.

// 생성자 함수 쓰려면 return문 사용하지 말거나 기본 타입 값 리턴하도록
// 그냥 return문 반드시 무조건 제발 생략하자

function Tire() {

    this.printTireThis = function(){
        console.log(this);  // this = Tire
    }
}
const tire = new Tire();    // this = tire
tire.printTireThis();
console.log();

function Tire2() {

    this.printTireThis = function(){
        console.log(this);
    }
   
    const obj = new Object();
    // const obj = Object();
    // const obj = {};      // 리터럴
    // Object만 이렇게 3개가 똑같음
   
    return obj;     // this = obj
}

const tire2 = new Tire2();     // this = obj
// tire2.printTireThis();      // error

// 함수와 일급객체
// 일급객체 : 값인 객체
// 런타임에 생성 가능, 변수에 저장 가능, 함수 인자로 전달 가능, 함수 반환값으로도 가능

// 함수는 일급객체다.
// 함수는 객체고, 객체는 값이므로, 함수는 값이다.

function getName(name) {
    return `이름은 ${name}입니다.`
}

console.log(getName('짱구'));
console.log(Object.getOwnPropertyDescriptors(getName));
console.log();

// 함수의 기본 프라퍼티 : 함수가 생성되면 엔진이 자동 생성하는 프라퍼티
// arguments : 함수가 전달받은 인자들의 유사배열객체
// ES5에서는 유사배열객체 (length 프라퍼티를 가진, 배열처럼 생겨먹은 객체),
// ES6에서는 유사배열객체이자 iterable

// arguments.length : 전달 받은 인자의 수
// length : 함수에 정의된 파라미터의 수

function func1() {
    console.log(func1.arguments);
    console.log(func1.arguments.length);
    console.log(func1.length);
    console.log(func1.arguments[1]);
}

func1(1,2,3);
console.log();

function func2(){
    console.log(func2.name); 
    console.log(func2.caller.name); //부른놈
}

func2();
console.log();

function func3(){
    func2();
}

func3();
console.log();

// __proto__ : 객체가 상속받으려고 [[prototype]]에 접근하기 위한 프라퍼티
    // 이 놈의 getter : getPrototypeOf
    // 이 놈의 setter : setPrototypeOf
// hasOwnProperty() : 상속받은 프라퍼티가 아니라 본인이 정의한 프라퍼티면 true

const cpu = {
    name : 'i9'
}

// cpu 객체의 상위 객체는 Object
// !!!!! 어떤 객체의 __proto__ 프라퍼티는 상위 객체의 prototype property
// 상위 객체의 prototype에는 하위에 전달할 프라퍼티들과 메소드들이 있다

console.log(cpu.__proto__ === Object.prototype);    // true
console.log(cpu.hasOwnProperty('name'));            // ture

// __proto__ 프라퍼티는 내가 정의한 프라퍼티 아님.
// js 엔진이 자동 부여 (객체 생성 시 상속을 위해)
console.log(cpu.hasOwnProperty(cpu.__proto__));     // false
console.log();

for (prop in cpu) {
    console.log(`${prop} : ${cpu[prop]}`);
}
console.log();

// prototype property : 셍성자함수로 호출 가능한 함수 객체
//                      즉, constructor(생성자 함수)만이 소유하는 property
// protorype은 js에서 상속을 구현하기 위해 사용됨 

// 함수는 생성될 때 prototype property를 자동으로 가짐
function Diary(name) {
    this.name = name;
}

const diary = new Diary('2024년 일기');

// 객체는 __proto__
// 함수는 protorype
// sibal???
console.log(Diary.hasOwnProperty('prototype'));             // 생성자 함수  // true
console.log(diary.hasOwnProperty('prototype'));             // 객체         // false
console.log((function() {}).hasOwnProperty('prototype'));   // 함수 리터럴  // true
console.log({}.hasOwnProperty('prototype'));                // 객체 리터럴  // false
console.log();

// 생성자 함수 (constructor) : 객체를 생성한 함수가 뭐냐
console.log(diary.__proto__.constructor);
console.log(diary.constructor);
console.log();

const diary2 = new Diary('2025년 일기');
console.log(diary2.constructor);
console.log(diary.constructor === diary2.constructor);      // true