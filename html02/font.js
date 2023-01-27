// document.write("처음 만드는 자바 스크립트");
//
// var arrNumber = new Array();
//
// arrNumber[0] = 1;
// arrNumber.push(2);
// arrNumber.push(3);
// arrNumber.push(4);
// arrNumber.push(5);
// document.writeln(arrNumber[1]);

// var firstName = "도현";
// try {
//     document.write("내 이름은" + lastName + "입니다.");
// }
// catch (ex) {
//     document.write(ex.message);
// }

// function sayHello(){ // CallbyName
//     document.writeln("안녕하세요? 자바 스크립트 함수 입니다");
// }
//
// sayHello(); // 함수 호출, CallbyName 방식

// 매개 변수가 있는 함수
// function add(num1, num2) {
//     document.write(num1 + "+" + num2 + "=" + (num1 + num2) + "입니다.");
//
// }
//
// add(1, 3); // 함수 호출, CallbyValue 방식

// 리턴 방식으로
// function add(num1, num2){
//     return num1 + num2;
// }
//
// var result = add(1,3);
// document.writeln("1 + 3 = " + result +" 입니다.")

// alert 함수 - window 생략 가능 내장 함수 이기 때문에
// window.alert("alert 함수 입니다.")

// prompt 함수 .. 입력 받은 값을 리턴 할수 있다.
// var userInput = window.prompt("당신의 이름은 무엇인가요", "");
// alert(userInput + "님 환영 합니다.")

// confirm 함수
// if (window.confirm("이루고자 하는 목표를 이루 셨나요?")){
//     alert("잘하셨어요") // confirm 반환 타입은 boolean 이기 때문에 확인 버튼은 기본적은로 true 이고 취소는 false
// } else {
//     alert("저런")
// }
//
// var result = confirm("이런 방식도 가능 해요")
//
// if(!result){
//     alert("true")
// } else {
//     alert("false")
// }

// open 함수
// window.open("https://www.naver.com", "popup2", "left=0, top=0, width=400, height=300,location=yes, status=no");

// Timer 함수
// function sayHello(){ // CallbyName
//     alert("SetInterval 함수 멈춰라!!!")
// }

// setInterval 무한 루프 함수 탈출 하기
// var count = 0;
// var timer = window.setInterval(sayHello, 1000);
// function sayHello(){
//     alert("SetInterval 5번 클릭 후 멈춤!!!")
//     count += 1
//     if (count==5){
//         clearInterval(timer);
//     }
// }


// function sayHello() {
//     var textBox = document.getElementById("myName");
//     if (textBox != null) {
//         alert(textBox.value + "님 안녕하세요")
//     }
// }

// function findSubject(){
//     //     var arrRadio = document.getElementsByName("sub");
//     //     for (var i =0 ; arrRadio.length ; i++ ) {
//     //         if (arrRadio[i].checked) {
//     //             alert(arrRadio[i].value + " 과목을 좋아 하시는군요!")
//     //             break; // 브레이크를 통해 멈춤...
//     //         }
//     //     }
//     // };

// function findSubject2() {
//     var arrRadio = document.getElementsByTagName("input") // input 태그의 모든 값을 가져옴
//     for (var i = 0; i < arrRadio.length; i++) {
//         if (arrRadio[i].type == "radio" && arrRadio[i].checked) { // input 태그중 버튼 타입도 있기에 조건식을 줌 타입이 radio 면서 체크 된 항목만 출력
//             alert(arrRadio[i].value + " 과목을 좋아 하시는군요!")
//             break; // 브레이크를 통해 멈춤...
//         }
//
//     }
//
// }

// 전체 출력
function namePrint() {


    var text = document.getElementById("myName").value; // input text 박스의 값을 가져옴

    var finalText = document.getElementById("result"); // div id = 값
    var coler1 = document.getElementById("col").value;
    var size = document.getElementById("fontsize").value;
    var font = document.getElementsByName("font");


    var tagetString = text;

    // finalText.style.color = coler1
    // finalText.style.fontSize = size;


    if (font[0].checked) {
        tagetString = tagetString.strike();
    }
    if (font[1].checked) {
        tagetString = tagetString.big();
    }
    if (font[2].checked) {
        tagetString = tagetString.small();
    }
    if (font[3].checked) {
        tagetString = tagetString.bold();
    }
    if (font[4].checked) {
        tagetString = tagetString.italics();
    }
    if (font[5].checked) {
        tagetString = tagetString.sup();
    }
    if (font[6].checked) {
        tagetString = tagetString.sub();
    }
    if (font[7].checked) {
        tagetString = tagetString.toLowerCase();
    }
    if (font[8].checked) {
        tagetString = tagetString.toUpperCase();
    }

    tagetString = tagetString.fontcolor(coler1);
    tagetString = tagetString.fontsize(size);


    finalText.innerHTML = tagetString;

}


