// 연산자

// undefined는 절대 형변환 되지 않음

console.log(+'100', typeof(+'100'));
console.log(+'백', typeof(+'백'));
console.log(+false, typeof(+false));    // false를 숫자로 변환하면 0 됨
console.log(1+null, typeof(1+null));    // null도 숫자로 변환하면 0 됨

console.log(1=='1');    // == : equal

console.log([]==false);
// console.log([]===false);    // [] : Object type
                            // false : boolean type
                            // 둘의 타입이 다르니까 false return

console.log(NaN==NaN);
console.log(NaN===NaN);     // 일종의 버그
console.log(Number.isNaN(1+undefined));     // NaN이면 true, 아니면 false return
console.log(Object.is(NaN, NaN));

console.log(0 == -0);
console.log(0 === -0);

console.log(Object.is(0, -0));

// 제곱 연산자 **
console.log(2**3);      // 2의 3승
// console.log(-2**3);  // error
console.log((-2)**3);   // -2의 3승

// delete : 객체의 프라퍼티를 제거
// 객체를 만들어보자
const obj = {
    name: "짱구",
    age: 5,
    address: "떡잎마을"
};

// adress 프라퍼티를 제거해보자
delete obj.address;

// obj의 프라퍼티들을 찍어내보자
for (key in obj) {  // key : name, age, address
    console.log(`property name:${key}, property value:${obj[key]}`);
}

// 객체의 프라퍼티 추가
// obj에 hobby라는 배열 프라퍼티를 추가해보자
obj.hobby = ['잠', '술'];

// obj의 프라퍼티들을 찍어내보자
for (key in obj) {  // key : name, age, address
    console.log(`property name:${key}, property value:${obj[key]}`);
}