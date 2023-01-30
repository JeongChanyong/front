function checkForm() {
    var userId = document.fmField.userId;
    // 아이디 입력 유무 체크
    if(userId.value == '' || !(userId.value.length >= 3 && userId.value.length <= 12)) {
        window.alert("아이디를 입력하시오");
        document.fmField.userId.focus();
        document.getElementById('userId').select();
        return false; // 아이디 입력이 안되어 있다면 submint 이벤트를 중지
    }
    var uerPw = document.fmField.userPw;
    // 암호 입력 유무 체크
    if(document.fmField.userPw.value == ''){
        alert('암호를 입력하세요.');
        userPw.focus();
        return false;
    }
}