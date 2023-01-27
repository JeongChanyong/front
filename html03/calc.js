
// 입력 받은 값을 저장할 변수 선언(전역 변수)
var num1;
var num2;
var operator;
// 숫자 입력 받기
function clicknumber(s) {
    console.log(typeof s)
    if (document.getElementById("display").value == 0){
        document.getElementById("display").value = s;
    } else {
        document.getElementById("display").value += s;
    }
}
// 연산자 입력
function clickOp(op) {
    console.log(op)
    num1 = document.getElementById("display").value;
    document.getElementById("display").value = ''; // num1 입력후 공백을 보여주기 위해서
    operator = op;
}
// .
function clickDot() {
    if (document.getElementById("display").value.indexOf('.') == -1){ // indexof : 특정 문자의 위치를 찾는 함수 찾는 문자열이 없으면 -1 반환
        document.getElementById("display").value += '.';                // .을 찾아야 하는데 없기 떄문에 해당 if문 실행 후 . 을 찍음
    }
}
// =
function clickEqual() {
    num2 = document.getElementById("display").value;
    clac();
}
// +/-
function clickConversion() {
    var n = document.getElementById("display").value;
    if (Number(n)>0) {
        document.getElementById("display").value = '-' + n;
    } else {
        document.getElementById("display").value = n.replace('-','');
    }
}
// 계산
function clac() {
    switch (operator) {
        case '+':
            document.getElementById("display").value = String(Number(num1) + Number(num2));
            break;
        case '-':
            document.getElementById("display").value = String(Number(num1) - Number(num2));
            break;
        case '*':
            document.getElementById("display").value = String(Number(num1) * Number(num2));
            break;
        case '/':
            document.getElementById("display").value = String(Number(num1) / Number(num2));
            break;
        case '^':
            document.getElementById("display").value = String(Number(num1) ** Number(num2));
    }
}
// 클리어
function clear1(){
    num1 = '0';
    num2 = '';
    oper = '';
    document.getElementById("display").value = '0';
}
function tan() {
    n = document.getElementById("display").value;
    document.getElementById("display").value = Math.tan((n * Math.PI) / 180);
}
function sin() {
    n = document.getElementById("display").value;
    document.getElementById("display").value = Math.sin((n * Math.PI) / 180);
}
function cos() {
    n = document.getElementById("display").value;
    document.getElementById("display").value = Math.cos((n * Math.PI) / 180);
}

