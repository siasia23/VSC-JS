$(function() {

    let allInfo = [];

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => printData(json))
    // .then(() => sortData(sortType))

    // .then(json => console.log(json))

    $('#sortType').on('change', function() {
        sortData($(this).val())
    })
})

// 1. user 데이터를 가져와 리스팅한다
//    (id,name,username,email,phone,website)
function printData(json) {

    // const emailA = json.filter(ele => ele.email)
    // const idA = json.filter(ele => ele.id)
    // const nameA = json.filter(ele => ele.name)
    // const phoneA = json.filter(ele => ele.phone)
    // const usernameA = json.filter(ele => ele.username)
    // const websiteA = json.filter(ele => ele.website)

    // 원본 데이터에서 필요한거만 분리해 집어넣기
    json.forEach(ele => {
        $("tbody").append(
            `<tr>
                <td>${ele.id}</td>
                <td>${ele.name}</td>
                <td>${ele.username}</td>
                <td>${ele.phone}</td>
                <td>${ele.email}</td>
                <td>${ele.website}</td>
            </tr>`
        )
    })
}

// 2. 상단에 검색옵션(아이디<id>,이름<name>,별칭<username>)으로
//    검색을 구현한다.(문자열 검색시는 정규식 사용)
const sortData = function(sortType) {
    if (sortType) {
        const sort_id_name = sortType.split("_")[0];    // id or name이 [0]에 들어감
        const sort_ASC_DESC = sortType.split("_")[1];   // ASC or DESC가 [1]에 들어감

        if (sortType.split("_")[1] == 'ASC') {
            allInfo.sort((a,b) => a[sort_id_name] - b[sort_id_name]);
        } else {
            allInfo.sort((a,b) => b[sort_id_name] - a[sort_id_name]);

        }

        printData(allInfo);
    }
}

// 3. 정렬옵션(아이디ASC/DESC, 이름 ASC/DESC)