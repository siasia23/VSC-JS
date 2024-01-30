$(function(){
    $("*").css("font-size", "1em"); // * : html의 모든 요소들에 대해 적용
    $("#ul1").css("background-color", "blue");
    $(".lis").css("font-weight", "bold");
    $("#ul1 .lis").css("background-color", "#ffcc00");
    $("#ul1>.lis").css("background-color", "#ffcc00");
    $("p:first").css("background-color", "gray");
    $("[style]").css("font-size", "1.2em"); // style이라는 속성을 가진 모든 것들에 대해 적용
    $("p[id='p1']").css("font-size", "1.5em");
    $("p[id!='p1']").css("font-size", "1.5em");
    $(":button").css("background-color", "red"); // 콜론 붙이면 '모든' 버튼들에 대해

    $("#table1 tr:even").css("background-color", "#ccc"); // :even : 짝수번째의 tr들에 대해
    $("#table1 tr:odd").css("background-color", "#333333"); // :odd : 홀수번째의 tr들에 대해
});