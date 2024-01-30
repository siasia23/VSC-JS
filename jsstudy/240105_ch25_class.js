/*클래스(class)*/

// -JS의 클래스는 prototype기반의 상속을 구현하기 쉽도록 정리한 문법적설탕(Syntactic Sugar)
// -js는 모든것은 값. 값=함수, class=함수
//  js는 생성자함수와 클래스를 통해 객체를 생성하는 두가지 방법을 제공
// -생성자 함수는 new연산자로 호출되거나 new연산자없이 호출될수있음(없으면 일반함수)
//  클래스는 new연산자로만 호출이 가능함

//클래스선언(일반적)
class Person{

}
console.log('typeof Person: ', typeof Person);//function

//클래스선언(표현식사용, 익명/기명)
const Car = class{}; //함수표현식
console.log('typeof Car: ', typeof Car);    //function
const Tire = class Tire{};
console.log('typeof Tireconsole: ', typeof Tire);   // function
console.log();

// 클래스에는 생성자, 프로토타입 메소드, 정적 메소드 선언
class Cat {

    // 생성자
    constructor(name) {
        this.name = name;
    }

    // 프로토타입 메소드. 프로토타입 객체에 등록됨. 생성된 객체명.sayHi로 호출
    // 클래스의 프라퍼티
    sayHi() {
        console.log(`Hi 나는 ${this.name}`);    // name = constructor param name
    }

    // 정적 메소드. 함수에 등록됨. 클래스명.sayHi로 호출
    // 클래스.prototype의 프라퍼티
    static sayHi() {
        console.log(`Hi 나는 ${this.name}`);    // name = Object(class) name
    }
}

const cat = new Cat('Nero');
console.log(cat.name);

cat.sayHi();    // Hi 나는 Nero
Cat.sayHi();    // Hi 나는 Cat
console.log();

// 클래스에 프라퍼티 추가
class Dog {

    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    printName() {
        console.log(this.name);
    }

    makeSound() {
        console.log(this.sound);
    }
}

const dog1 = new Dog('치와와','치치');
const dog2 = new Dog('진돗개','멍멍');

dog1.printName();
dog1.makeSound();

dog2.printName();
dog2.makeSound();
console.log();

Dog.prototype.age = 10;
console.log(dog1.age);  // 10
console.log(dog2.age);  // 10

dog1.age = 15;
console.log(dog1.age); //15
console.log(dog2.age); //10

console.log(Dog.age); // undefined
console.log(Dog.prototype.age); //10
console.log();

// 접근자 프라퍼티 (get, set 문법 활용)
class Phone {
    name = '폰';
    get name() {
        return this.name;
    }
    set name(name) {
        this.name = name;
    }
}

const phone = new Phone('아이폰');

phone.name = '갤럭시';  // set name 호출됨

console.log(phone.name);    // 갤럭시   // get name 호출됨
console.log();

// private property
class Mouse {
    #name;
    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }
}

const mouse = new Mouse();

// mouse.#name = '제리';
// console.log(mouse.#name);    // error

mouse.name = '제리';    // set name 호출
console.log(mouse.name);    // get name 호출
console.log();

// static property(필드) : 클래스명으로만 접근 가능
class Desk {
    static name;    // static
    static #brand;  // static private

    static getName() {
        return this.name;
    }
}

Desk.name = '책상';
Desk.brand = '이케아';  // Desk의 property로 brand를 추가한 느낌. #brand != brand // 섀도잉

console.log(Desk.name); // 책상
console.log(Desk.brand);    // 이케아   
console.log(Desk.getName());    // 책상
console.log();

// 상속
class Animal {
    name;
    eat() {
        console.log('먹어버림');
    }
}

class Bird extends Animal {
    sound() {
        console.log('짹');
    }
}

class Mammal extends Animal {
    sound() {
        console.log('어흥');
    }
}

const eagle = new Bird();

eagle.name = '독수리';
console.log(eagle.name);    // 독수리

eagle.eat();
eagle.sound();

const tiger = new Mammal();
tiger.name = '호랑';
console.log(tiger.name);

tiger.eat();
tiger.sound();

// super
class Parent {
    constructor(name) {
        this.name = name;
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}

const child = new Child('아들', 30);
console.log(child);