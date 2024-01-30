// attribute 방식으로
function clickBtn1() {
    console.log('btn1 클릭됏다.');
};

// property 방식으로
const btn2 = document.getElementById('btn2');   // 타겟을 찾느다.

btn2.onclick = function() {
    console.log('btn2가 클릭됏다.');
}

// addEventListener 방식으로. 이벤트 여러 개 달 수 있다.
const btn3 = document.getElementById('btn3');   // 똑같이 타겟을 찾는다.

btn3.addEventListener("click", function() {
    console.log('btn3이 클릭됏다. 1번째 핸들러 호출');
})

btn3.addEventListener("click", function() {
    console.log('btn3이 한 번 더 클릭됏다. 이것은 2번째 핸들러');
})

const func1 = function(e) {
    console.log('3번째 핸들러임');
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
    console.log(e.bubbles);
    console.log(e.cancelable);
    console.log(e.defaultPrevented);
    console.log(e.isTrusted);
    console.log(e.timeStamp);
}

btn3.addEventListener('click', func1);

/*
const func2 = function() {
    console.log('왜 안 되는거임');
}
btn3.addEventListener('click', func2);  // 이름 있는 함수를 넣어보자

btn3.removeEventListener(func2);    // 이벤트를 삭제해보자
*/