window.addEventListener("load", function () {
  // 모든 a태그 기본 동작 막기(#위로가는기능 삭제)
  // a태그 전체 담기 - 전체 삭제되면 별도 기능 추가해야되서 필요시에만 적용시킬것
  // const links = this.document.querySelectorAll("a");
  // links.forEach(function (link) {
  //   link.addEventListener("click", function (event) {
  //     event.preventDefault();  //기본동작 막기 - 위로가기 방지
  //   });
  // });
  // 각각의 요소를 변수에 담아놓는다
  const nav = document.querySelector(".nav");
  const headerBg = document.querySelector(".header-bg");
  // nav에 마우스 엔터 했을때 즉 호버했을때
  nav.addEventListener("mouseenter", function () {
    headerBg.style.height = "400px";
  });
  // nav에 마우스 똇을때 즉 호버를 안했을때
  nav.addEventListener("mouseleave", function () {
    headerBg.style.height = "0px";
  });
});
