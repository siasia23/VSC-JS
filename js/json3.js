let jsonObjStr = `
    {
        "firstname" : "짱구",
        "lastname" : "윤",
        "age" : 5,
        "hobby" : ["축구", "잠", "술"]
    }
`;
console.log(jsonObjStr);
console.log('');

// 문자열을 객체화 해보자
// JSON.parse : eval 함수를 구현해둔것
const jsonObj = JSON.parse(jsonObjStr);
console.log(jsonObj.firstname);

// 값을 바꾸고 다시 찍어보자
jsonObj.firstname = "맹구";
console.log(jsonObj.firstname);

// 배열을 찍어보자
jsonObj.hobby[1];
console.log(jsonObj.hobby[1]);

// 객체를 다시 문자열로 바꿔보자
let jsonObjStr2 = JSON.stringify(jsonObj);
console.log(jsonObjStr2);

// 배열 객체
const jsonarr = [
    {"name":"짱구", "age":5},
    {"name":"웅", "age":5},
    {"name":"맹구", "age":5}
];
// 문자열로 만들자
let jsonarrStr = JSON.stringify(jsonarr);
console.log(jsonarrStr);
// 다시 객체로 만들자
const jsonarr2 = JSON.parse(jsonarrStr);
console.log(jsonarr2[1].name);