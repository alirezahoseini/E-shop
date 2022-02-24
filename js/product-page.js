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
    // product counter from product info section 
    productCounterFromProductInfo();
    // description and reviews tabs
    tabs();
    
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

// product counter from product info section 
function productCounterFromProductInfo(){
  // access to the current tag
  const currentTag = document.querySelector('.counter #current');
  // access to counter buttons
  const decrease = document.querySelector('.counter #decrease');
  const increase = document.querySelector('.counter #increase');
  // access to product info tag for find quntity
  let prInfoTag = document.querySelector('.product-info');

  // add event on decrease button
  decrease.addEventListener('click', () => {
    // access to the current value
    const currentValue = document.querySelector('.counter #current').innerText;
    // created new value 
    let newValue = 0;
    if(currentValue > 1){
      newValue = currentValue - 1;
      // set new value
      currentTag.innerText = newValue;
      // set quntity
      prInfoTag.setAttribute('quntity', currentTag.innerText = newValue);
    }else{
      // show err message
      ui.showMessage('The minimum number is one.!', 'alert');
    }
  });
  // add event on increase button
  increase.addEventListener('click', () => {
    // access to the current value
    const currentValue = document.querySelector('.counter #current').innerText;
    // created new value 
    let newValue = 0;
    if(currentValue < 3){
      newValue = Number(currentValue) + 1;
      // set new value
      currentTag.innerText = newValue;
      // set quntity
      prInfoTag.setAttribute('quntity', currentTag.innerText = newValue);
    }else{
      // show err message
      ui.showMessage('The maximum inventory of this product is 3.!', 'alert');
    }
  });
}

// description and reviews tabs
function tabs(){
  // access to the tab buttons
  const desBtn = document.querySelector('.dec-tab');
  const revBtn = document.querySelector('.rev-tab');
  // access to sections
  const description = document.querySelector('#description');
  const reviews = document.querySelector('#reviews');
  
  // add click event on buttons 
  desBtn.addEventListener('click',() => {
    // hidde reviews section
    reviews.classList.add('d-none');
    // show descripton section
    description.classList.remove('d-none');
    // active des btn
    desBtn.classList.add('active');
    // desabled rev btn 
    revBtn.classList.remove('active');
  });
  revBtn.addEventListener('click',() => {
    // hidde description section
    description.classList.add('d-none');
    // show reviews section
    reviews.classList.remove('d-none');
    // active rev btn
    revBtn.classList.add('active');
    // desabled des btn 
    desBtn.classList.remove('active');
  });
}

// adding product the shoping cart
// function addToCartButton(){
//   // access to the add to cart button
//   const btn = document.querySelector('.more-buttons .add-to-cart');
//   // add click event on btn
//   btn.addEventListener('click', () => {
//     // access to the product info
//     const productInfo = getProductInfo();

//   });

//   // access to product info
//   function getProductInfo(){
//     // access to product info tag
//     const productInfoTag = document.querySelector('.product-info');
//     // access to vlaues -->
//     // data id
//     const dataId = productInfoTag.getAttribute('data-id');
//     // quntity
//     const quntity = productInfoTag.getAttribute('quntity');
//     // image
//     const image = document.querySelector('.product-image-preview').firstElementChild.firstElementChild.firstElementChild.getAttribute('src');
//     // title
//     const title = productInfoTag.querySelector('.product-title').innerText;
//     // price
//     // access to price tag
//     const priceTag = productInfoTag.querySelector('.product-prices');
//     let price = 0;
//     let offerPrice = 0;
//     // chaking offer 
//     if(priceTag.classList.contains('offer')){
//       // set offer price
//       offerPrice = priceTag.querySelector('.offer-price').innerText;
//       offerPrice = offerPrice.split('$');
//       offerPrice = Number(offerPrice[1]);
//       // set old price
//       price = priceTag.querySelector('.price').innerText;
//       price = price.split('$');
//       price = Number(price[1]);
//     }else{
//       // set price 
//       price = priceTag.querySelector('.price').innerText;
//       price = price.split('$');
//       price = Number(price[1]);
//     }

//     // whole product data
//     const data = {
//       dataId : dataId,
//       quntity : quntity,
//       image : image,
//       title : title,
//       price : price,
//       offerPrice : offerPrice
//     }
//     // return data
//     return data;
//   }

// }






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