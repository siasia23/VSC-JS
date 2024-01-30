/* this */

//현재 메모리상에서 참조(사용)되고 있는 객체 자신을 가르키는 키워드
//참조되고 있는 객체의 참조값을 가지고 있는 참조변수
//기본적으로 함수내의 this는 함수를 호출해서 실행하도록 만든 = 객체
//다만, 화살표함수는 화살표함수를 둘러싼 실행컨텍스트에 따라서 this가 결정됨
//즉, 화살표함수는 그 주변에 제일 가까운 나를 참조하는 객체를 말함
//js에서 this를 이해하려면 함수 호출자, 실행컨텍스트, 예외사항을 알아야한다.
//실행컨텍스트(Execution Context): 현재실행되고 있는 환경/상황,
//즉, 현재 사용되고 있는 메모리 또는 실행흐름이라고 이해하면 됨
//-js에서 동일한 함수내의 this라고 해도 누가 호출했냐에 따라 바뀜
//-동적바인딩 : this에 객체의 참조가 동적으로 바인딩(연결,저장)되는 것을 this의 동적바인딩
//js에서는 call, apply, bind함수를 통해서 함수내의this를
//렉시컬(정적)하게 결정할 수 있는 방법을 제공함

//함수선언식 내의 this는 함수를 호출한 객체
//f함수는 글로벌프라퍼티
function f() {
    console.log(this);
}
//f();
//window.f();
{
    console.log(this);//{ }  => 전역객체가 찍힌다.
}
console.log('#############################################################');

//리터럴로 만들어짐
const obj = {
    name: '홍길동',
    printName: function(){//객체 안에 있으니 메서드
        console.log(this.name);
    },
    printNumbers: (a,b)=> console.log(this.name, a, b),
    printThis: () => console.log(this)
};
obj.printName();//홍길동 this = name이니까
//printName을 obj가 불렀음. 따라서 this는 obj가 되고 this.name = obj의 name

//화살표함수는 컨텍스트를 따라가서 this는 window => undefined
//obj는 전역프라퍼티 그래서 화살표함수의 this는 전역
//실행컨텍스트 여기서는 전역
obj.printNumbers(3,4);//undefiend // 3,4
obj.printThis();//{} // window


//생성자 함수로 객체를 호출한 함수(화살표함수포함)내
//this는 생성된 객체
//실행컨텍스트가 생성된 객체인 person
 function Person(name, age){
    this.name = name;
    this.age = age;
    this.printPerson = function(){
        console.log(this.name, this.age);
    },
    this.printPerson2 = () => console.log(this.name, this.age);
 }

//여기서 실행컨텍스트가 객체 => person임
const person = new Person('홍길동', 30);
person.printPerson(); //Person 홍길동, 30
person.printPerson2(); //{} 홍길동, 30
//일반함수와 생성자함수르 객체를 생성한 생성자함수의 차이
//일반함수의 실행컨텍스트 = 전역
//생성자함수로 만들어진 실행컨텍스트는 만들어진 객체(person)가 실행컨텍스트
