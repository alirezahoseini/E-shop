// Classes ------------------------------------------------------>




// Eventlisteners ----------------------------------------------->
eventlisteners()
function eventlisteners(){
  // after DOM Content Loaded 
  document.addEventListener('DOMContentLoaded', () => {
    // product images light box show and hide buttons
    lightBoxBtns();
    // light box zoom effect
    zoomEffect();
    //set colors
    setColors();
  })
}




// Functions ---------------------------------------------------->

// product images light box show and hide buttons
function lightBoxBtns(){
  // access to the show light box button
  const showBtn = document.querySelector('.open-lightbox-icon');
  // access to the light box
  const lightBox = document.querySelector('#product-image-light-box');
  // access to the close button
  const closeBtn = document.querySelector('#product-image-light-box .close-btn');

  // created click event to show button and show light box
  showBtn.addEventListener('click', () => lightBox.classList.add('show'));
  // created click event to close button and close light box
  closeBtn.addEventListener('click', () => lightBox.classList.remove('show'));
}

// light box zoom effect
function zoomEffect(){
  // access to the images 
  const images = document.querySelectorAll('#product-image-light-box .light-box-images .swiper-slide img');

  // add double click event in images
  images.forEach(image => {
    // add event --- zoom in image
    image.addEventListener('mousemove', (e) => {
      // access to the click location
      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;

      // set click position and zoom to selected location
      image.style.transformOrigin = `${x}px ${y}px`;
      // zoom in image
      image.style.transform = 'scale(2)';
    });

    // add event --- zoom out image
    image.addEventListener('mouseleave', (e) => {
      // set click position and zoom to selected location
      image.style.transformOrigin = `center`;
      // zoom in image
      image.style.transform = 'scale(1)';
    });

  });
}


// set colors from aria color 
function setColors(){
  // access to the color tags
  const colorTags = document.querySelectorAll('input[name="productColor"]');
  // each in color tags
  colorTags.forEach(element => {
    // access to the aria-color
    const color = element.getAttribute('aria-color');
    element.style.setProperty('--boxAfterBackColor', color);
  });
}


// Swiper Sliders ----------------------------------------------->
// Product image carusel with Swiper Slider
var productImageCarusel = new Swiper(".product-image-preview", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      mousewheel: true,
      keyboard: true,
      lazy: true,
});

// tumbs carusel for product carusel light box with Swiper Slider
var lightBoxTumbs = new Swiper(".light-box-tumbs", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 2,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    "@0.75": {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    "@1.50": {
      slidesPerView: 5,
      spaceBetween: 30,
    }
  },
});


// light box for product images with Swiper Slider
var lightBoxImages = new Swiper(".light-box-images", {
  slidesPerView: 1,
  lazy: true,
  loop: false,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: lightBoxTumbs,
  }
});