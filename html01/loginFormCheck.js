function allCheck() {
    if (!idCheck()) {
        return false;
    } else if (!passwordCheck()) {
        return false;
    } else if (!emailCheck()) {
        return false;
    } else if (!nameCheck()) {
        return false;
    } else if (!RRN()) {
        return false;
    } else if (!habbyselect()) {
        return false;
    } else if (!introduce()) {
        return false;
    } else {
        return true;
    }

}

/**
 * ID`
 */
function idCheck() {
    var userId = document.formname.userid
    if (userId.value == '' || !(userId.value.length >= 4 && userId.value.length <= 12)) {
        window.alert("ID는 공백 없이 4 ~ 12 글자 사이의 글자만 입력 가능 합니다.");
        userId.focus();
        return false;
        // 영문 대소문자, 숫자 확인
    } else if (!checkEngAndNumber(userId.value)) {
        window.alert("영문 대소문자, 숫자만 입력 하세1111111111요.")
        userId.focus();
        return false;
    } else {
        return true;
    }
}

/**
 * password
 */
function passwordCheck() {
    var userPw = document.formname.userpw;
    var userPw2 = document.formname.userpw2;

    if (userPw.value == '' || !(userPw.value.length >= 4 && userPw.value.length <= 12)) {
        window.alert("비밀번호를 4글자 이상 입력해 주세요.")
        userPw.focus();
        return false;
    } else if (checkEngAndNumber(userPw.value)) {
        window.alert("영문 대소문자, 숫자로 입력 하세요.")
        userPw.focus();
        return false;
    } else if (userPw.value !== userPw2.value) {
        window.alert("비밀번호가 다릅니다.")
        userPw2.focus();
        return false;
    } else {
        return true;
    }
}

/**
 * email check
 */
function emailCheck() {
    var userMail = document.formname.usermail
    if (userMail.value.length == 0) {
        window.alert("메일 주소를 입력해 주세요.")
        userMail.focus();
        return false;
    } else if (userMail.value.indexOf("@") == -1 || userMail.value.indexOf(".") == -1 || userMail.value.length <= 5) {
        window.alert("이메일 형식이 잘못 되었습니다.")
    } else {
        return true;
    }
}

/**
 * name check
 */
function nameCheck() {
    var userName = document.formname.username
    if (userName.value.length == '') {
        window.alert("이름을 입력하세요.")
        userName.focus();
        return false;
    } else if (!checkEngAndKor(userName)) {
        window.alert("이름은 한글 영어만 가능 합니다.")
        userName.focus();
        return false;
    } else {
        return true;
    }
}

/**
 * 주민번호 체크, 생년 원일
 */
function RRN() {
    var rrn = document.formname.userrrn;
    // console.log(rrn.value);

    var juminarr = rrn.value.split("");
    var year1 = document.formname.year;
    var mon = document.formname.month;
    var day = document.formname.day;

    var sum = 0;
    var num = 2;

    if (rrn.value.length == 0 || rrn.value.length != 13) {
        alert("다시 입력 하세요");
        return false;
    } else {
        // 1.
        for (var i = 0; i < juminarr.length - 1; i++) {
            sum += Number(juminarr[i]) * num;
            console.log("for 문 num : " + num)
            console.log("for 문 sum : " + sum)
            num++;
            if (num == 10) {
                num = 2;
            }
        }
        console.log("for 문 완료 값 : " + sum);

        //3.
        var a = sum % 11;
        //4.
        var b = 11 - a; //검증 숫자

        if (b == 10) {
            b = 0;
        } else if (b == 11) {
            b = 1;
        }
        console.log(b); // 4

        if (b != juminarr[12]) {
            alert("틀렸습니다.");
            return false;
        } else {
            alert("올바른 주민 번호 입니다.")
            year2 = '19' + juminarr[0] + juminarr[1];
            year1.value = year2;
            console.log(year1.value)
            mon2 = juminarr[2] + juminarr[3];
            mon.value = mon2;
            day1 = juminarr[4] + juminarr[5];
            day.value = day1
            return true;
        }

    }
}

/**
 * 취미생활
 */
function habbyselect() {
    var habby = document.getElementsByName("habby");
    let count = 0;

    for (var i = 0; i < habby.length; i++) {
        if (habby[i].checked) {
            count++;
        }
        console.log(count);
    }
    if (count < 2){
        alert("더 체크하세요");
        return false;
    } else {
        alert("ok");
        return true;
    }

}

/**
 * 자기소개
 */
function introduce(){
    var memo = document.formname.memo;

    if (memo.value.length < 20) {
        window.alert('20자 이상 작성 하셔야 합니다.')
        return false;
    } else {
        return true
    }

}

/**
 * 영어 + 한국어 check
 */
function checkEngAndNumber(value) {
    var count = 0;

    for (var i = 0; i < value.length; i++) {
        if ((value.charCodeAt(i) >= 65 && value.charCodeAt(i) <= 90) || (value.charCodeAt(i) >= 97 && value.charCodeAt(i) <= 122) || (value.charCodeAt(i) >= 48 && value.charCodeAt(i) <= 57)) {
            count += 1;
        }
    }

    console.log(count == (value.length))
    if (count == (value.length)) {
        return true;
    } else {
        return false;
    }
}

/**
 * 영어 + 숫자 체크 password
 */
function checkEngAndKor(value) {

    var count = 0;

    for (var i = 0; i < value.length; i++) {

        if ((value.charCodeAt(i) >= 65 && value.charCodeAt(i) <= 90) || (value.charCodeAt(i) >= 97 && value.charCodeAt(i) <= 122) || (value.charCodeAt(i) >= 44032 && value.charCodeAt(i) <= 55203)) {
            console.log('matched')
            count += 1;
        }
    }

    if (count === (value.length)) {
        return true;
    } else {
        return false;
    }
}