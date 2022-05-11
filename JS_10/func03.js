// func1 이라는 이름으로 함수 선언하기
const func1 = function () {};

// 한 개의 매개변수를 갖는 함수 선언하기
const func2 = function (num) {
  console.log(num);
};

// 두 개의 매개변수를 갖는 함수 선언하기
// 이 함수는 return 을 수행한다.
const func3 = function (num1, num2) {
  return num1 + num2;
};

const result = func3(200, 300);
console.log(result);

/*
    함수 호이스팅
    func4() 함수는 아직 선언문이 발견되지 않았다.
    js는 즉시 실행을 멈추고 이후에 있는 모든 코드를 scan 한다.
    마침 다른 라인에서 func4() 함수 선언문을 만났다.
    이순간 js는 함수 호출코드와 함수 선언 코드를 서로 바꿔치기 한다.
*/
func4();
function func4() {
  console.log("나는 func4 입니다.");
}

/*
    js 에서 const 시작하는 함수 선언
    새로운 js 에서는 기존에 function 으로 시작하는 함수 대신
    변수처럼 const 로 시작하는 함수 선언 명령문이 도입되었다.

    const 로 시작하는 함수는  실행과정에서 호이스팅이 일어나지 않는다.

    반드시 함수를 호출하기 전에 선언문이 있어야 한다.
*/
const func5 = function () {
  console.log("나는 func5 입니다.");
};
func5();
