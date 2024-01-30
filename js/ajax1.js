let btn = document.getElementById("btn");
btn.onclick = function() {

/* AJAX 단계 */

// 1. xhr 객체 생성
let xhr = new XMLHttpRequest();

// 2. 객체 초기화 (통신 초기화)
xhr.open("get", "http://127.0.0.1:5500/asset/plaintext.txt", true);
    // 방식 : get
    // 요청할 url
    // 동기로 할거면 true, 비동기는 false

// 3. 요청 전송
xhr.send();

// 4. callback 처리
    // onreadystatechange : xhr 객체의 이벤트 속성. 뒤따르는 함수의 기능을 저장
    // readyState : 클라이언트의 요청 상태. 0~4 존재
    // status : 서버의 응답 상태 (200, 404...)
    // statustext : 서버의 응답할 때 문자열 (forbidden, not found...)
xhr.onreadystatechange = function() {
    if (xhr.readyState==4 && xhr.status==200) {
        document.getElementById("greeting").innerHTML = xhr.responseText;
    }
}
}

let btn2 = document.getElementById("btn2");
btn2.onclick = function() {

    let xhr = new XMLHttpRequest();

    xhr.open("get", "http://127.0.0.1:5500/asset/csv.csv", true);

    xhr.send();

    xhr.onreadystatechange = function() {
        const respArray = xhr.responseText.split(",");
        if (xhr.readyState==4 && xhr.status==200) {
            document.getElementById("greeting").innerHTML = xhr.responseText;
        }
    }
}

let btn3 = document.getElementById("btn3");
btn3.onclick = function() {

    let xhr = new XMLHttpRequest();

    xhr.open("get", "http://127.0.0.1:5500/asset/json.json", true);

    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState==4 && xhr.status==200) {
            const jsonObj = JSON.parse(xhr.responseText);
            document.getElementById("greeting").innerHTML = jsonObj.student1.sname;
        }
    }
}

let btn4 = document.getElementById("btn4");
btn4.onclick = function() {

    let xhr = new XMLHttpRequest();

    xhr.open("get", "https://koreanjson.com/users/1", true);

    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState==4 && xhr.status==200) {
            const jsonObj = JSON.parse(xhr.responseText);
            document.getElementById("greeting").innerHTML = jsonObj.city;
        }
    }
}

let btn5 = document.getElementById("btn5");
btn5.onclick = function() {

    let xhr = new XMLHttpRequest();

    xhr.open("get", "https://api.dbpia.co.kr/v2/search/search.xml", true);

    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState==4 && xhr.status==200) {
            let xmlObj = xhr.responseXML;
            let rootEle = xmlObj.documentElement;
            let errEle = rootEle.getElementsByTagName("error")[0];
            let codeEle = errEle.getElementsByTagName("Code")[0];
            document.getElementById("greeting").innerHTML 
                = codeEle.firstChild.nodeValue;
        }
    }
}