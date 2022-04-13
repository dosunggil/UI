/*현재 화면에 모든 요소들의 로딩이 다 끝나면 실행*/

/*화면에 스크롤이 발생하면 실행하기*/
document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const aaaa = window.scrollY;
  if (aaaa > 100) {
    header.classList.add("hhh");
  } else {
    header.classList.remove("hhh");
  }
});
