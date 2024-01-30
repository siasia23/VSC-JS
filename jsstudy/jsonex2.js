// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(json => console.log(json))

let cArray = []   // completed
let ncArray = []   // notcompleted

// 0. 페이지 로딩되면 getData 호출하자
$(function() {
    getData();
})

// 1. todos 데이터를 가져옴
const getData = function() {
    $.get('https://jsonplaceholder.typicode.com/todos')
        .done(result => procData(result))
        .fail(() => console.log('데이터 가져오기 실패함'))
}

// 2. "completed": true 는 왼쪽, false는 오른쪽+완료버튼
const procData = function(result) {

    cArray = result.filter(obj => obj.completed)     // "completed": true만 필터링하자
    // console.log(result.filter(obj => obj.completed));   // 필터링 됐는지 콘솔에 찍어보자
    
    ncArray = result.filter(obj => !obj.completed)

    printData(cArray, ncArray)
}

// 3. 화면에 출력
const printData = function(cArray, ncArray) {

    // 왼쪽 칸에 completed 데이터들을 넣자
    cArray.forEach(obj => {
        $("#completed ul").append(`<li>${obj.id} ${obj.title}</li>`)    
    });

    // 오른쪽 칸에 notcompleted 데이터들을 넣자
    ncArray.forEach(obj => {
        $("#notcompleted ul").append(
            `<li id=${obj.id}>
                ${obj.id} ${obj.title}
                <input type='button' value='완료하기' class='cbtn'>
            </li>`)    
    });

    attachEvent();
}

// 버튼 이벤트
const attachEvent = function() {
    $('.cbtn').on('click', function() {
        moveData($(this).parent().attr('id'));   // this = 클릭된 버튼
    })

    $(".ncbtn").on("click", function() {
        moveData($(this).parent().attr("id"));
    });
    $(".sort").on("click", function() {
        sortData($(this).attr("value"));
    });
}

// 5. 버튼누르면 완료/미완료 이동
const moveData = function(clickedId) {
    const targetObj = totalArray.filter(obj => String(obj.id)===clickedId);
    targetObj[0].completed = !targetObj[0].completed;
    if(cArray.includes(targetObj[0])) {
        cArray.splice(cArray.indexOf(targetObj[0]), 1);
        ncArray.unshift(targetObj[0]);
    } else {
        ncArray.splice(ncArray.indexOf(targetObj[0]), 1);
        cArray.unshift(targetObj[0]);
    }
    printData(cArray, ncArray);
}

// 6. 정렬
const sortData = function(sortType) {
    switch (sortType) {
        case "cASC":    cArray.sort((a, b) => a.id - b.id); break;
        case "cDESC":   cArray.sort((a, b) => b.id - a.id); break;
        case "ncASC":  ncArray.sort((a, b) => a.id - b.id); break;
        case "ncDESC": ncArray.sort((a, b) => b.id - a.id);
    }
    printData(cArray, ncArray);
    
}