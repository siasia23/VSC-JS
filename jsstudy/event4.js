// 이벤트 핸들러의 this

// 전역함수 내에서의 this = window
// 이벤트 프라퍼티와 addEventListener의 이벤트핸들러 내에서의 this = 이벤트 타겟 객체

// 이벤트 핸들러가 화살표 함수로 쓰일 때는 이벤트 타겟 객체가 아니라 window!!


// onclick attribute의 이벤트 핸들러. 전역함수
function handleClick() {
    console.log(this);  // window
}

// onclick property 이벤트 핸들러
document.querySelector('#btn1').onclick = function() {
    console.log(this);  // btn1
}

// addEventListener
document.querySelector('#btn2').addEventListener('click', function() {
    console.log(this);  // btn2
})

// addEventListener (화살표 함수)
document.querySelector('#btn3').addEventListener('click', 
    () => console.log(this)    // window
)

// 이벤트 핸들러 내에 인자 전달 (dataset 이용)
document.querySelector('#btn4').addEventListener('click', function() {
    printInfo(this.dataset.name, this.dataset.age);     // 홍길동, 30
})

const printInfo = function(name, age) {
    console.log(name, age);
}

// 커스텀 이벤트
// 빌트인 이벤트 생성자 함수를 이용하는 방법, 사용자 정의하는 방법.

// 빌트인 이벤트 생성자 함수
const myMouseEvent = new MouseEvent('click', {
    bubbles : true,
    cancleable : true,
    clientX : 100,
    clientY : 100
})

console.log();
console.log(myMouseEvent.bubbles);
console.log(myMouseEvent.cancelable);
console.log(myMouseEvent.clientX);
console.log(myMouseEvent.clientY);
console.log();

document.querySelector('#btn5').addEventListener('click', function(e) {

    e = myMouseEvent;   // 이벤트를 내가 정의한걸로 바꿔보자

    console.log(e.bubbles);
    console.log(e.cancelable);
    console.log(e.clientX);
    console.log(e.clientY);
})

// 사용자정의 이벤트 (실행하려면 dispatchEvent 필수)
const myCustomEvent = new CustomEvent('myEvent', {  // 두번째 인자로 객체

    detail : {  // 객체 안에 콜론으로 맵 형태로 내용 넣어줌
        name : '내가 만든 이벤트',
        version : '1.0'
    }

})

document.querySelector('#btn6').addEventListener('myEvent', function() {
    console.log('내가 만든 이벤트를 처리햇다!');
})

console.log(myCustomEvent.type);
console.log(myCustomEvent.detail.name);
console.log(myCustomEvent.detail.version);

document.querySelector('#btn6').dispatchEvent(myCustomEvent);   // dispatchEvent : 이벤트 트리거