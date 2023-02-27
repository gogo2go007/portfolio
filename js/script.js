// Splitting();
// AOS.init();

// 타이핑영역
let text = "퍼블리셔 \n 고영은 입니다."
let viewText = "";
let i = 0;

let autoTyping = setInterval(typing,300);

function typing(){
  viewText = text[i++];

  if(viewText == "\n"){
    document.querySelector(".typing").innerHTML +="<br>"
  }
  else{
    document.querySelector(".typing").innerHTML += viewText;
  }

  if(i>text.length-1){
    clearInterval(autoTyping);
  }
}

// 메뉴 스크롤 이동 영역
const btn = document.querySelectorAll(".h_menu li");
const section = document.querySelectorAll(".section");

for(let i = 0; i < btn.length; i++){

  btn[i].addEventListener("click",function(e){
    for(let j = 0; j < btn.length; j++) {
      btn[j].classList.remove("on");
    }
      // a태그가 가지고 있는 기본기능(페이지 이동) 멈춤
      e.preventDefault();
      // 해당 섹션구역의 위치값으로 스크롤바가 부드럽게 이동
      let scrollMove = section[i].offsetTop; // 위치값을 새로 받아옴
      btn[i].classList.add("on");
      window.scrollTo({
          top:scrollMove,
          behavior:"smooth"
      });
  });
}

// 스와이퍼영역
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const toun28Tablet = document.querySelector(".toun28_tablet");
const toun28Mobile = document.querySelector(".toun28_mobile");
const eggdropTablet = document.querySelector(".eggdrop_tablet");
const eggdropMobile = document.querySelector(".eggdrop_mobile");

// 반응형 웹에 있는 데스크탑/태블릿/모바일 버튼을 누르면 각각의 크기에 맞는 새 창이 뜬다.
toun28Tablet.addEventListener("click",function(){
  let url = "https://gogo2go.cafe24.com/toun28_renew/"; 
  window.open(url,"toun28Tablet","width=1020px,height=1080px,left=300px,top=0px");
  //window.open(url,"이름","크기,위치");  
});
toun28Mobile.addEventListener("click",function(){
  let url = "https://gogo2go.cafe24.com/toun28_renew/"; 
  window.open(url,"toun28Mobile","width=479px,height=700px,left=500px,top=100px");
  //window.open(url,"이름","크기,위치");  
});
eggdropTablet.addEventListener("click",function(){
  let url = "https://gogo2go.cafe24.com/eggdrop/"; 
  window.open(url,"eggdropTablet","width=1020px,height=1080px,left=300px,top=0px");
  //window.open(url,"이름","크기,위치");  
});
eggdropMobile.addEventListener("click",function(){
  let url = "https://gogo2go.cafe24.com/eggdrop/"; 
  window.open(url,"eggdropMobile","width=375px,height=700px,left=500px,top=100px");
  //window.open(url,"이름","크기,위치");  
});
















