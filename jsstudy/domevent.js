window.onload = function() {
 /*
    const btn1 = document.getElementById("btn1");

    btn1.addEventListener("click", function(event) {

        const result = document.getElementById("result");

        result.innerHTML = this.value + "버튼이 클릭됨!";   // this = btn1


    })
 */

    // 실습1. 버튼들 중에서 클릯된 버튼의 아이디를 result에 출력
    for (let i=1; i <= 5; i++) {

        const btn = document.getElementById("btn" + i);
    
        btn.addEventListener("click", function() {

            const result = document.getElementById("result");
            result.innerHTML = this.id;

        });
    }

    // 실습2. 합계 출력
    const btnplus = document.getElementById("btnplus");

    btnplus.addEventListener("click", function() {

        let text = document.getElementsByClassName("txt");  // 값 여러개를 받으면 배열로 들어감
        const result2 = document.getElementById("result2");

        result2.innerHTML = parseInt(text[0].value) + parseInt(text[1].value);  // 배열 인덱스 사용

    })
    
    // 실습 3. 텍스트입력상자에 숫자 두개를 넣고 +,-,*,/ 누르면 result3에 결과 출력
    const result3 = document.getElementById('result3'); 
    const txt3s = document.getElementsByClassName('txt3');
    const btn3s = document.getElementsByClassName('btn3');

    for (btn3 of btn3s) {

        btn3.addEventListener("click", function() {

        let txt3Val1 = parseFloat(txt3s[0].value);
        let txt3Val2 = parseFloat(txt3s[1].value);

        switch(this.value) {
            case '+':
            result3.innerHTML = txt3Val1 + txt3Val2;
            break;

            case '-':
            result3.innerHTML = txt3Val1 - txt3Val2;
            break;

            case '*':
            result3.innerHTML = txt3Val1 * txt3Val2;
            break;

            case '/':
            result3.innerHTML = txt3Val1 / txt3Val2;
            break;
        }
    })};

    // 실습4. li를 클릭하면 화면 배경색 변경
    // const red = document.getElementsByName("red");
    // const blue = document.getElementsByName("blue");
    // const green = document.getElementsByName("green");

    // const li = document.getElementsByTagName("li");

    // li.addEventListener("click", function(){
    //     document.style.backgroundColor = "#li.value";
    // })

    // document.style.backgroundColor = getElementsByTagName("li").value;

    const liselector = document.getElementsByClassName('col');
    const rs4 = document.getElementById("result4");

    for (let i = 0; i < liselector.length; i++) {

        liselector[i].addEventListener("click", function (event) {
            
            switch (i) {
                case 0:
                    liselector[i].style.backgroundColor = "red";
                    break;
                case 1:
                    liselector[i].style.backgroundColor = "blue";
                    break;
                case 2:
                    liselector[i].style.backgroundColor = "green";
                    break;
            }

            rs4.innerHTML = this.textContent; 
        });
    }
    
    // 실습 5. 체크한 과일명들을 result5에 출력
    const arr = [];
    const checkbox = document.getElementsByName("cb");
    const result5 = document.getElementById("result5");

    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            arr.push(checkbox[i].value);
        }
    }

    document.getElementById("result5").textContent = arr;
    // result5.innerHTML = arr;

    // 실습 6
    document.getElementById('btnscore').addEventListener('click', function () {

        // 학생데이터 객체생성
        const studentsData = [
            { name: '홍길동', korean: 100, english: 100, math: 100 },
            { name: '강감찬', korean: 90, english: 90, math: 90 },
            { name: '이순신', korean: 80, english: 80, math: 80 }
        ];
        
        const tableBody = document.getElementById('tbl').getElementsByTagName('tbody')[0];
        
        // 데이터를 테이블에 출력
        for (let i = 0; i < studentsData.length; i++) {
            const student = studentsData[i];
            // tbody행 식별자선언
            const row = tableBody.getElementsByTagName('tr')[i];
            // i행의 td인덱스에 객체값 집어넣기  
            row.getElementsByTagName('td')[0].textContent = student.name;
            row.getElementsByTagName('td')[1].textContent = student.korean;
            row.getElementsByTagName('td')[2].textContent = student.english;
            row.getElementsByTagName('td')[3].textContent = student.math;
            }
        });

    // 실습 7.

}