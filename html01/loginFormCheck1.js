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
    var regIdPw = /^[a-zA-Z0-9]{4,12}$/;
    var userId = document.formname.userid
    if (!regIdPw.test(userId.value)) {
        window.alert("ID는 공백 없이 4~12자의 영문 대,소문자와 숫자로 입력 하세요");
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
    var regIdPw = /^[a-zA-Z0-9]{4,12}$/;

    if (!regIdPw.test(userPw.value)) {
        window.alert("비밀번호를 4글자 이상 입력해 주세요.")
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
    var regMail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    if (!regMail.test(userMail.value)) {
        window.alert("메일 주소를 입력해 주세요.")
        userMail.focus();
        return false;
    } else if (!regMail.test(userMail.value)) {
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
    var regName = /^[가-힣a-zA-Z]{2,15}$/;
    if (!regName.test(userName.value)) {
        window.alert("2~ 15자로 이름을 입력하세요.  ")
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

    var regSize = /\d{13}/;

    var sum = 0;
    var num = 2;

    if (!regSize.test(rrn.value)) {
        alert("주민등록번호를 입력 하세요");
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
            alert("주민등록번호를 확인 하시고 다시 입력하세요.");
            return false;
        } else {
            // alert("올바른 주민 번호 입니다.")
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
        alert("취미 생활을 2개 이상 체크 하세요.");
        return false;
    } else {
        return true;
    }

}

/**
 * 자기소개
 */
function introduce(){

    var memo = document.formname.memo;
    

    if (memo.value.length < 20) {
        window.alert('최소 20자 이상 작성하세욘')
        return false;
    } else {
        return true
    }

}
