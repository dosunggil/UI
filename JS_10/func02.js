// 선언과 동시에 값 지정, 선언과 동시에 초기화;
const num1 = 10;

// 선언과 동시에 값 지정 또는 선언 후 값 지정
// 선언과 초기화 동시에 하지 않아도 됨
let num2;
num2 = 100; // 이후에 값을 다시 저장 (변경) 할 수 있음
num2 = 200;

// 함수 선언
// 매개변수로 num1 을 갖는 func1 이라는 이름의 함수 선언
function fun1(num1) {
  console.log(num1);
}

fun1();
fun1(100);

// 두개의 매개변수를 갖는 add 함수 선언
// 이 함수는 두개의 아규먼트 값을 덧셈하여 return 한다.
function add(num1, num2) {
  return num1 + num2;
}

const result1 = add(100, 200);
console.log(result1);

const str = add("kr", "대한");
console.log(str);
