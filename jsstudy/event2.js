const outer = document.querySelector('#outer');
const inner = document.querySelector('#inner');
const btn = document.querySelector('#btn');

outer.addEventListener('click', function(e) {
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
})

inner.addEventListener('click', function(e) {
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
})

btn.addEventListener('click', function(e) {
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
    e.stopPropagation();    // 전파 방지 명령어 (버블링 중지)
})

// true 넣어보자
outer.addEventListener('click', function(e) {
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
}, true)

inner.addEventListener('click', function(e) {
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
}, true)

btn.addEventListener('click', function(e) {
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
}, true)

// default event 막기
const aEle = document.querySelector('a');

aEle.addEventListener('click', function(e) {
    e.preventDefault();
})