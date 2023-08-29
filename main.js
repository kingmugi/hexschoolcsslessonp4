// import Swiper JS
import Swiper from "swiper/bundle";
// import Swiper styles
import "swiper/css";
import "./assets/scss/all.scss";

const swiper = new Swiper(".marquee", {
  allowTouchMove: false,
  slidesPerView: "auto",
  speed: 8000,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const menubtn = document.querySelector("#menubtn");

  menubtn.addEventListener("click", () => {
    menu.classList.toggle("h-[122px]");
  });
});
