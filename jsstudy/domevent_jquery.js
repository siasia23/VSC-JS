// domevent.js를 jquery 코드로 바꾸보자

$(function() {
    /*
    $("#btn1").on("click", function() { // click 이벤트에 대한 콜백함수 function

        $("#result").text($(this).val()); // text=문자로, js의 this 쓰려면 $로 감싸야함, val=value

    });
    */

    $(".btn").on("click", function() {
        $("#result").text($(this).val());
    });

    // 합계 버튼 클릭 시 이벤트 처리
    $("#btnplus").on("click", function() {
    
        // 입력된 두 숫자를 가져와서 합을 계산
        var num1 = parseFloat($("#num1").val()) || 0;
        var num2 = parseFloat($("#num2").val()) || 0;
                
        // 합을 결과란에 출력
        $("#result2").text(num1 + num2);
    });
        
    // 실습 3) 텍스트입력상자에 숫자 두개를 넣고 +,-,*,/ 버튼 누르면
    //         result3에 결과 출력
    $('.btn3').on("click", function() {
        let txt3Val1 = parseFloat($(".txt3").eq(0).val());
        let txt3Val2 = parseFloat($(".txt3").eq(1).val());
        switch($(this).val()) {
        case '+':
            $("#result3").html(txt3Val1 + txt3Val2);
            break;
        case '-':
            $("#result3").html(txt3Val1 - txt3Val2);
            break;
        case '*':
            $("#result3").html(txt3Val1 * txt3Val2);
            break;
        case '/':
            $("#result3").html(txt3Val1 / txt3Val2);
            break;
        }
    });
});