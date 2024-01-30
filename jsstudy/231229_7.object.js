/*객체*/

//기본타입을 제외한 모든 타입은 참조 타입(객체)
//객체는 0개 이상의 프라퍼티로 구성 
//프라퍼티는 프라퍼티명(키)과 프라퍼티값(밸류)로 구성
//js에서 객체는 연관배열(Associative Array) :키가 문자열인 배열
//자바의 객체는 상속관계이고, 자바스크립트의 객체는 사용하는 관계  

//객체 생성법

//1. 객체 리터럴 
const obj1 = {
    name: '노민경',
    age: 18,
    address: '서울'
};

console.log(obj1,typeof obj1);

//2.Object 생성자
// 객체리터럴로 객체를 생성해도 내부적으로 Object 생성자로 해석
const obj2 =new Object();
obj2.name='노민경';
obj2.age=18;
obj2.address='seoul';

console.log(obj2,typeof obj2);

//3. Object.create 

const obj3 = Object.create(Object); // Object 타입의 객체를 생성
obj3.name='노민경'; //Function의 이름이라 읽기전용 
obj3.nameing='노민경';
obj3.age=18;
obj3.address='seoul';
console.log(obj3,typeof obj3);

// 4.생성자 함수
function Person(name,age,address){
    this.name =name;
    this.age =age;
    this.address=address;
}

const person = new Person('홍길동','20','seoul');
console.log(person);

const person2 = new Person('노민경','20','seul');
console.log(person,typeof person);
console.log(person instanceof Person);
console.log(person instanceof Object);

// Person은 Object를 상속받았다 (x), 부모와 자식 관계가 아님
// Person은 Object를 확장했다 (o) 동료 관계 

// 매우중요
// prototype 프라퍼티
// 생성자함수는 prototype 이라는 프라퍼티를 가진다.
// 자바스크립트의 모든 객체는 적어도 하나의 다른 객체를 상속(확장)한다.
// prototype 프라퍼티는 상속(확장)해 준 객체의 참조

//Person 생성자함수가 가진 prototype 이라는 프라퍼티를 통해서 
//Person 객체에 hobby 라는 프라퍼티를 새로 생성 
Person.prototype.hobby=['장기','바둑'];
//Person 객체에 hobby 라는 메소드(프라퍼티)를 생성(동적 확장)
Person.prototype.printHobby = function(){
    console.log(this.hobby);
};

person.printHobby;

console.log(typeof Person.prototype);
console.log(Person.prototype instanceof Object);


person2.hobby=["게임","등산"];
person2.printHobby();

console.log(person2);

const me = new Person ('민경','20','서울','피아노');
me.hobby='피아노';
me.printHobby();

console.log(me);
console.log(person instanceof Person);
console.log(person instanceof Object);

for(prop in person) {
    console.log(prop,person[prop]);
}

for(prop in person2) {
    console.log(prop,person2[prop]);
}

//객체 프라퍼티 반복 
//방법 1 
for (prop in obj2){
    console.log(prop,obj1[prop]);
};

//방법 2 : 프로젝트 이름들을 출력  
for (prop of Object.getOwnPropertyNames(obj1)){
    console.log(prop,obj1[prop]);
}

//객체 프라퍼티 추가 
obj1.hobby =["축구","야구"];
obj1["gender"]="남";

//객체 메서드 추가 
obj1.printName=function(){
    console.log(this.name);
};

obj1.printName();

//전체가 공유하는 것은 prototype 
// 개인만 사용하는것은 객체 추가 

//객체 메서드 제거
delete obj1.printName;


var score =80;
var copy =score;

console.log(score);
console.log(copy);

score =100;
console.log(score);
console.log(copy);

/////////////////////////////////////////////////////////////////////

/*객체*/
//기본타입을 제외한 모든 타입은 참조타입(객체)
//객체는 0개이상의 프라퍼티로 구성됨
//프라퍼티는 프라퍼티명(key)+프로퍼티값(value) 구성
//js에서 객체는 연관배열(키=인덱스가 문자열인 배열)

//객체생성법
//1.객체리터럴
const obj1 = {
    name : "홍길동",
    age : 20,
    address : "지구 어딘가"
};
console.log(obj1, typeof obj1);

//2.object 생성자
//객체리터럴로 객체를 생성해도 내부적으로 Object생성자로 
//변환되어 해석
const obj2 = new Object();
obj2.name = "강감찬";
obj2.age = 20;
obj2.address = "너네집";
console.log(obj2, typeof obj2);

//3.Object.create
const obj3 = Object.create(Object);
//오브젝트 타입의 객체생성 // 앞이 타입 object, 뒤가 객체
obj3.name = "이순신";//Function의 이름이라 읽기전용. 아직은 모름
obj3.age = 20;
obj3.address = "발 너네집";
console.log(obj3, typeof obj3);

//4.생성자 //자바처럼 생성
function Person(name, age, address){
    this.name = name;
    this.age = age;
    this.address = address;
}
const person = new Person("유관순", 19, "임시정부");
console.log(person, typeof person);
console.log(person instanceof Person);//true
console.log(person instanceof Object);//true

//***매우중요****/
//prototype 프로퍼티
//생성자 함수는 prototype이라는 프로퍼티를 가진다.
//함수를 만들면 자동으로 prototype가 자동으로 생성
//자바스크립트의 모든 객체는 적어도 하나의 다른 객체를 상속(확장)한다.
//prototype프로퍼티는 상속(확장)해 준 객체의 참조

//Person생성자 함수가 가진 prototype이라는 프로퍼티를 통해서
//Person객체에 hobby라는 프라퍼티를 새로 생성(동적 확장)
//실행시간에 동적으로 hobby-프로퍼티를 생성해줌
Person.prototype.hobby = ['등산','헬스','슬마시기'];

//Person객체에 printhobby라는 메서드(프라퍼티)를 새로 생성(동적확장)
//실행시간에 만든거임Person의+prototype(기존에있던것들).hobby(추가한거)
//실행시간에 만든거임+prototype(기존에있던것들).printHobby(추가한거)
Person.prototype.printHobby = function(){
    console.log(this.hobby);
    //여기서 this는 호출한객체임. 밑에서 console을 보면
    //person.hobby니까 person이 this고 호출한 객체 = person을 말함
};
person.printHobby();
console.log(person.hobby);
console.log(typeof Person.prototype);
console.log(Person.prototype instanceof Object);
console.log(person instanceof Person);
console.log(person instanceof Object);

//person1과 person2는 다른 참조를 가짐
const person2 = new Person('시발람아', 100, '무덤');
person2.hobby=["게임", "등산"];//위에서 Person타입에 hobby추가되었음
person2.printHobby();
for (prop in person){
    console.log(prop, person[prop]);    
}
for (prop in person2){
    console.log(prop, person2[prop]);    
}


//const obj1 = {
//    name : "홍길동",
//    age : 20,
//    address : "지구 어딘가"
//};
console.log(obj1, typeof obj1);
for(prop in obj1){
    console.log(prop, obj1[prop]);
}
//방법2번 of // getOwn~Names메서드를 사용
for(prop of Object.getOwnPropertyNames(obj1)){
    console.log(prop, obj1[prop]);
}

//객체프로퍼티 추가
//hobby가 키 // 축구야구가 value
obj1.hobby = ["축구", "야구"];
//gender가 키 //남이 value
obj1["gender"] = "남";

//객체메서드 추가
obj1.printName = function() {
    console.log(this.name);
};
obj1.printName();

//객체 메서드 제거
delete obj1.printName;

