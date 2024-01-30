// eval() 함수 : js 문장을 해석해서 실행하는 함수. 앞뒤로 () 붙임.
let var1 = "1+2";
let result1 = eval("("+var1+")");

// json 문자열
let firstname = "짱구";
let lastname = "윤";

let str1 = `
    (
        "firstname":"${firstname}",
        "lastname":"${lastname}",
        "age":5
    )
`;  
// 따옴표 아님!! esc 밑에 있는 점!

// 위의 json 문자열을 json 객체로 변환
const jsonObj = eval("(" + str1 + ")");
jsonObj.firstname = "맹구";

// json 배열 문자열을 json 배열 객체로 변환
let str2 = `
    [1, "아추워", true, new Object(), "function(){}"]
`;
let arrObj = eval("("+str2+")");
arrObj[0] = 100;

// json 객체를 json 문자열로 변환
const jsonObj = {
    firstname : "짱구",
    lastname : "윤"
};
let str3 = jsonObj.stringify(jsonObj);

// json 문자열을 json 객체로
let jsonObj2 =  JSON.parse(str3); 