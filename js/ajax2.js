let btn = document.getElementById("btn");
btn.onclick = function() {

    let xhr = new XMLHttpRequest();
    
    xhr.open("get", "http://apis.data.go.kr/B552881/kmooc/courseList?ServiceKey=fLx274GPO6X74MbwW94EcD9Qy4UFWNTZywqy5%2FFhykEOqFGg6Y2bmTmRtJg4QaQY3ImKM35CrBCivsg5U2%2BYdA%3D%3D&page=1", true);

    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState==4 && xhr.status==200) {
            let jsonStr = xhr.responseText;
            const jsonObj = JSON.parse(jsonStr);
            document.getElementById("content").innerHTML
                = jsonObj.pagination.count;
        }
    }
}