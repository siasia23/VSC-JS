// 실습1. 3을 탐색해서 콘솔에 출력
$(function(){
    let menu2 = $("#table1 tr:first td:last").text();
    console.log(menu2);
});

// 실습2. 메뉴2를 탐색해서 콘솔에 출력
$(function(){
    // $("#table1 > tr:first > td:eq(1)").
    let menu2 = $("#ul1 li:first").next().text();
    console.log(menu2);
});

// 실습3. 마지막 div 내의 p의 문자열을 콘솔에 출력
$(function(){
    let menu2 = $("#wrapper div:last p").text();
    console.log(menu2);
});