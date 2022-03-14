// products carusel runing
productCaruselRuning();
function productCaruselRuning(){
    // swiper products carusel
        var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },
        breakpoints: {
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          }
        },
      });
}


