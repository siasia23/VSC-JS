// 실습 1. 키보드 R 키를 누르면 화면 배경을 red로 변경
// B를 누르면 blue로, G를 누르면 green으로 변경
document.addEventListener('keydown', event => {

    const keyName = event.key;

    if (keyName === 'R' || 'r') {
        document.body.style.backgroundColor = 'red';
    }
    if (keyName === 'B' || 'b') {
        document.body.style.backgroundColor = 'blue';
    }
    if (keyName === 'G' || 'g') {
        document.body.style.backgroundColor = 'green';
    }
})

// 실습 2. #txt1에 글자 입력하면 #sp1에 똑같이 출력되도록
let txt1 = document.querySelector('#txt1');
let sp1 = document.querySelector('#sp1');

txt1.addEventListener('keyup', e => {
    sp1.textContent = e.target.value;
})

// 실습 3. 마우스 클릭하면 #sp2에 클릭한 x,y 좌표 출력
let sp2 = document.querySelector('#sp2');

document.addEventListener('click', e => {
    sp2.textContent = `x : ${e.clientX}, y : ${e.clientY}`;
})

// 실습 4. 화면의 클릭한 곳에 가로 10px, 세로 10px 노란색 상자 표시
document.addEventListener('click', e => {

    

})