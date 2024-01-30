/* JSON 코딩평가 : 로컬스토리지를 활용한 메모장 만들기 */
// JS시험은 본 코딩평가로 대체합니다.
// 제출기한 : 1/12(일)
// 제출방법 : 완료 후 소스코드 압축하여 트렐로에 업로드
// jsmemo.html, jsmemo.js

// 화면 : 메모 등록화면, 메모 목록화면
// 기능
//   1. 메모리스트
//   2. 메모등록
//   3. 메모삭제
//   4. 메모수정
//   5. 메모상세
//   6. 메모검색(제목, 내용)

$(function(){

    // 로컬스토리지에 memos라는 키 생성
    let memos = JSON.parse(
        
    )

    // 메모작성 버튼을 누르면 작성창 팝업
    $('#registBtn').on('click', function() {
        $('#regist').show();
    })

    // 취소 버튼을 누르면 팝업 사라짐
    $('#cancel').on('click', function() {
        $('#regist').hide();
    })

    // 확인 버튼을 누르면
    $('#confirm').on('click', function() {
        let newMemo = {};
        let memoTitle = $('#subject').val();
        let memoContent = $('#content').val();

        newMemo.title = memoTitle;
        newMemo.content = memoContent;

        localStorage.setItem('memos', JSON.stringify('memos'))
        memos.push(newMemo);
    })


})

