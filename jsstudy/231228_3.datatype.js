let v3;
console.log(v3);

let v4 = undefined;
console.log(`${v4}, ${typeof v4}`);

let v5 = null;
console.log(`${v5}, ${typeof v5}`);

// symbol : 유일무이한 존재여서 값이 같아도 다르다고 판별됨!!
//          그래서 객체의 프라퍼티의 키로 사용됨.
let sym1 = Symbol(1);   // 1 값을 가진 심볼
let sym2 = Symbol(1);   // 이것도 1 값을 가진 심볼
console.log(sym1 == sym2);
console.log(sym1 === sym2);
console.log(typeof sym1, typeof sym2);
console.log(sym1.description === sym2.description);

// 객체의 키로 사용해보자
const persons = {
    sym1: {
        "name": "짱구"
    },
    sym2: {
        "name": "맹구"
    }
};

// 각각의 이름을 찍어내보자
console.log(persons.sym1.name);
console.log(persons.sym2.name);