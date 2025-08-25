window.addEventListener("load", function () {

  // 모달창 닫기 (전체창 닫아야되므로 modal-wrap)
  const modal = this.document.querySelector(".modal-wrap");
  const modalClose = this.document.querySelector(".modal-close");
  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });
  // 스크롤 이벤트 = gotop버튼 처음에는 없고 스크롤 생기면 gotop버튼 생김
  const topBtn = this.document.querySelector(".top-btn");
  this.window.addEventListener("scroll", function () {
    // console.log("스크롤시작"); //스크롤 시작하면 콘솔에 "스크롤시작" 글자찍힘
    //스크롤값이 100보다 크면
    if (this.document.documentElement.scrollTop > 100) {
      topBtn.style.display = "block";
    }else{
         topBtn.style.display = "none";
    }
  });
//   topBtn을 클릭하고
  topBtn.addEventListener("click" , function(){
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    })
  })
});
