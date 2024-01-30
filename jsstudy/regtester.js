$(function () {

    $("#btn").on("click", function () {

        // 플래그 문자들을 저장할 변수
        let flagStr = '';

        // 체크된 체크박스들을 배열로 만들어서 하나씩 꺼내(foreach) 플래그 문자열 생성
        $("input.flag:checked").toArray().forEach(inEle => {
            
            const eleVal = $(inEle).attr('value');

            if (eleVal != 'test' && eleVal != 'match') {
                flagStr += $(inEle).attr('value');
            }
        });
        
        $("input.method:checked").toArray().forEach(inEle => {
            
            const eleVal = $(inEle).attr('value');

            if (eleVal == 'test') {printTest(flagStr);}
            if (eleVal == 'match') {printMatch(flagStr);}
        });
    });

})

function printTest(flagStr) {
    // 결과창에 출력
    // 정규표현식 객체 생성해서 사용자가 textarea에 입력한 문자열 테스트
    $("#result").text(
        new RegExp($("#pattern").val(), flagStr).test($("#str").val()));
}

function printMatch(flagStr) {
    $("#result2").text(
        $("#str").val().match(new RegExp($("#pattern").val(), flagStr)));
        // match는 String의 메소드니까 순서가 달라짐. 뭐라는거야
}