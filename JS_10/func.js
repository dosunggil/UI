const num1 = 100;
const num2 = 200;
const num3 = 300;
const sum = num1 + num2 + num3;
console.log("결과: " + sum);

function add(num1, num2) {
  console.log("add 함수 결과 :", num1 + num2);
}

add(100, 200);

function view(res) {
  console.log(res.text);
}
// data 객체를 선언하고
// text 와 html Field 변수를 추가하고
// text 에 "Korea", html 에 "<p>Korea</p>" 문자열을 저장하라
const data = { text: "Koreatext", html: "<p>Koreahtml</p>" };
view(data);

// js 에 빈 객체 선언하기
const vo = {};
// 빈 vo 객체에 변수 추가하기 (추가하면서 초기화를 같이)
vo.text = "Koreavo";
vo.name = "조도성";
console.log(vo);

function myfunc(result) {
  console.log(result);
  console.log(result.name);
}

myfunc(vo);
