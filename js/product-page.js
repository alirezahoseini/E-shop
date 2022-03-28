// Classes ------------------------------------------------------>
const productCarusel = new ProductCarusel();


// Eventlisteners ----------------------------------------------->
eventlisteners()
function eventlisteners(){
  
}




// Functions ---------------------------------------------------->

// loading product data from api and set in DOM
loadingData();
function loadingData(){
   // access data from api with fetch --------->
   fetch('../files/json/product-page-data.json').then((response) => {
     // open response and access to json file data
      response.json().then((finallyResponse) => {
        // send data to set data in DOM function
        setDataInDOM(finallyResponse[0])
      }).catch((err) => {
        // show error message
        ui.showMessage("dont connect to server", 'danger');
        console.log(err);
      })
   }).catch((err) => {
     // show error message
     ui.showMessage("dont connect to server", 'danger');
     console.log(err);
   });

   // set product data to DOM content --------->
   function setDataInDOM(productData){
     console.log(productData);


     // acess to the article tag
     const article = document.querySelector('article');

    //  created product images box 
    createdProductImages();
    function createdProductImages(){
      // access to images
      const images = productData.images;
      // each in images for created product images carusel
      images.forEach(img => {
        // created product images carusel slide in DOM
        productImageCarusel.addSlide(1, [
          `
          <div class="swiper-slide">
              <img src="${img}" />
          </div>
          `
        ])
      });

      // each in images for created product images Light box
      images.forEach(img => {
        // created product images light box slide in dom
        productImageLightbox.addSlide(1, [
          `
          <div class="swiper-slide">
            <div class='swiper-zoom-container'>
              <img src="${img}" />
            </div>
          </div>
            `
        ])
      });
    }

    // created product info *********
    createdProductInfo()
    function createdProductInfo(){
      // created Parent section
      const parentSection = document.createElement('div');
      // set parent section classes
      parentSection.classList = 'col-12 col-md-6 mr-lg-5 product-info  px-0 px-md-1';
      // set parent section attributes
      parentSection.setAttribute('product-id', productData.productId);
      parentSection.setAttribute('maxQuntity', productData.maxQuantity);
      // created parent section template
      parentSection.innerHTML = `
        <div class="row px-1 mx-0 mx-lg-auto" style="width: 99%;">
        </div>
      `;

      /*
        All options append in row
       */
      // access to the row
      const row = parentSection.firstElementChild;

      /// offer price checking
      if(productData.offerSale){
        // add offer class to parent section
        parentSection.classList.add('offer');
      }

      // created product id
      const productIdTag = document.createElement('div');
      // set product id tag classes
      productIdTag.classList = 'col-12 mb-4 product-id d-flex align-items-center justify-content-between';
      // created product id tag template
      productIdTag.innerHTML = `
        <span class="badge-red sale-badge">SALE</span>
        <span>Product ID: ${productData.productId} </span>
      `;
      // append product id tag to ROW
      row.appendChild(productIdTag);


      // created product title tag
      const productTitleTag = document.createElement('div');
      // set product title tag classes
      productTitleTag.classList = 'col-12 product-title mb-2';
      // created product title tag template
      productTitleTag.innerText = productData.title ;
      // append productTitle tag to ROW
      row.appendChild(productTitleTag);


      // created product Price tag
      const productPriceTag = document.createElement('div');
      // set product Price tag classes
      productPriceTag.classList = 'col-12 product-prices mb-4';
      // created product Price tag template
      productPriceTag.innerHTML = `
        <span class="d-flex align-items-center justify-content-start">
            <div class="offer-price mr-4">
                $${productData.offerPrice}
            </div>
            <div class="price">
                $${productData.price}
            </div>
        </span>
        <span class="product-brand ml-lg-auto my-3">${productData.brand}</span>
      `;
      // append productPrice tag to ROW
      row.appendChild(productPriceTag);


      // created product select color tag
      const selectColorTag = document.createElement('div');
      // set product select color tag classes
      selectColorTag.classList = 'col-12 font-7 mb-3';
      // created product select color tag template
      selectColorTag.innerHTML = `
      <p>Color:</p>
      <div class="color-box">
      </div>
      `
      // access to the color box
      const colorBox = selectColorTag.querySelector('.color-box');
      // each in colors 
      productData.colors.forEach(color => {
        // created color input in DOM
          colorBox.innerHTML += `
          <input type="radio" name="productColor" aria-color='${color.colorCode}' id="${color.id}">
          `
      });
      // set checked in first color
      colorBox.firstElementChild.setAttribute('checked', 'true')
      // append product select color tag to ROW
      row.appendChild(selectColorTag);


      // created product chosse tag
      const chosseSizeTag = document.createElement('div');
      // set product chosse size tag classes
      chosseSizeTag.classList = 'col-12 font-7 my-3';
      // created product chosse size tag template
      chosseSizeTag.innerHTML = `
        <span class="d-inline-block mr-3 mb-3">Size:</span><span class="d-inline-block">See size table</span><br>
        <select name="choose-size" id="choose-size">
          <option value="null">Choose size</option>
        </select>
      `
      // access to the sizes box
      const sizesBox = chosseSizeTag.querySelector('#choose-size');
      // each in sizes
      productData.sizes.forEach(size => {
        // created size input in DOM
          sizesBox.innerHTML += `
              <option value="${size.id}">${size.name}</option>
          `
      });
      // append product chosse size tag to ROW
      row.appendChild(chosseSizeTag);


       // created more buttons tag
       const moreButtonsTag = document.createElement('div');
       // set product more buttons tag classes
       moreButtonsTag.classList = 'col-12 font-7 my-3';
       // created product chosse size tag template
       moreButtonsTag.innerHTML = `
        <p>Quantity:</p>
        <div class="more-buttons d-flex align-items-center">
            <div class="counter">
                <span id="decrease">-</span>
                <span id="current">1</span>
                <span id="increase">+</span>
            </div>
            <button class="add-to-cart" type="button">ADD TO CART</button>
            <i class="feather-icon icon-heart"></i>
        </div>
       `
       // append more buttons tag to ROW
      row.appendChild(moreButtonsTag);

      
      
      /// append parent section to article
      article.appendChild(parentSection);

    }

    // created Review and Descrition *********
    createdReviewAndDescription()
    function createdReviewAndDescription(){
      /// set description in DOM ----->
      // access to the description tag
      const descriptionTag = document.querySelector("#description #text")
      // set description to text box
      descriptionTag.innerHTML = productData.description;


      /// created rateing box ----->
      // access to the rateing tag
      const rateingTag = document.querySelector("#rateing");
      // created div
      const div = document.createElement("div");
      // set div classes
      div.classList = "row mx-0 px-0 w-100";
      // created div template
      div.innerHTML = `
        <!-- total score -->
        <div class="col-12 col-lg-6">
            <div class="total-socre" total-socre="${productData.score.totalScore}">
                <h4>${productData.score.totalScore}</h4>
                <div class="total-socre-stars">
                    <div class="stars-outer">
                        <div class="stars-inner"></div>
                    </div>
                </div>
                <div class="counter mt-2">
                    <i class="feather-icon icon-user mr-2"></i>
                    <span>${productData.score.commentsCounter} All opinions</span>
                </div>
            </div>
        </div>
        <!-- End of total score -->
        <!-- stars counter  -->
        <div class="col-12 col-lg-6 text-lg-left mt-3 mt-lg-0">
            <div class="stars-counter">
                <ul>
                    <li>
                        <i class="feather-icon icon-star-s"></i>
                        <span>1</span>
                        <div class="progress-bar" id="progress-bar-1">
                            <div class="prograss" style="width:${productData.score.oneStar}%"></div>
                        </div>
                    </li>
                    <li>
                        <i class="feather-icon icon-star-s"></i>
                        <span>2</span>
                        <div class="progress-bar" id="progress-bar-2">
                            <div class="prograss" style="width:${productData.score.twoStar}%"></div>
                        </div>
                    </li>
                    <li>
                        <i class="feather-icon icon-star-s"></i>
                        <span>3</span>
                        <div class="progress-bar" id="progress-bar-3">
                            <div class="prograss" style="width:${productData.score.threeStar}%"div>
                        </div>
                    </li>
                    <li>
                        <i class="feather-icon icon-star-s"></i>
                        <span>4</span>
                        <div class="progress-bar" id="progress-bar-4">
                            <div class="prograss" style="width:${productData.score.fourStar}%"></div>
                        </div>
                    </li>
                    <li>
                        <i class="feather-icon icon-star-s"></i>
                        <span>5</span>
                        <div class="progress-bar" id="progress-bar-5">
                            <div class="prograss" style="width:${productData.score.fiweStar}%"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- End of stars counter  -->
        <button class="add-comment-btn mx-auto mt-3">ADD OPINIONS</button>
      `

      // append div in rateing tag
      rateingTag.appendChild(div)



    }
    

    // Execute the rest of the code after loading the product information ---->
    // product images light box show and hide buttons
    lightBoxBtns();
    //set colors
    setColors();
    // description and reviews tabs
    tabs();
    // load comments from API
    loadComments();
    // add new comment
    addNewComment();
    // fill in the total score stars
    fillTotalScoreStars();
    // recommend products loaded from API
    recommentProduct();
    // product counter from product info section 
    productCounterFromProductInfo(productData.maxQuantity);
   }

}

// product images light box show and hide buttons
function lightBoxBtns(){
  // access to the show light box button
  const showBtn = document.querySelector('.open-lightbox-icon');
  // access to the light box
  const lightBox = document.querySelector('#product-image-light-box');
  // access to the close button
  const closeBtn = document.querySelector('#product-image-light-box .close-btn');
  // access active image
  const activeImage = document.querySelectorAll(".product-image-preview  .swiper-slide");

  // created click event to show button and show light box
  showBtn.addEventListener('click', () => lightBox.classList.add('show'));
  // each in images and add click event
  activeImage.forEach(image => {
    // add click event
    image.addEventListener('click', (e) => {
      // show light box after click
      lightBox.classList.add('show');
    })
  });
  // created click event to close button and close light box
  closeBtn.addEventListener('click', () => lightBox.classList.remove('show'));
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
function productCounterFromProductInfo(maxQuantity){
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
    if(currentValue < maxQuantity){
      newValue = Number(currentValue) + 1;
      // set new value
      currentTag.innerText = newValue;
      // set quntity
      prInfoTag.setAttribute('quntity', currentTag.innerText = newValue);
    }else{
      // show err message
      ui.showMessage(`The maximum inventory of this product is ${maxQuantity}.!`, 'alert');
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


// load comments from API
function loadComments(){
  // access to the comments from api
  accessComments();
  async function accessComments(){
    // send request to server
    let comments = fetch('../files/json/reviews.json');
    comments.then((result) => {
      // cheaking response 
      result.json().then((apiData) => {
        comments = apiData;
        createdCommentToDOM(comments);
      })
    }).catch((err) => {
      console.log(err);
    });
  }

  // created and set comments to the DOM
  function createdCommentToDOM(comments){
    // access to comment box
    const commentsBox = document.querySelector('#comments ul');
    // each in comments
    comments.forEach((comment, index) => {
      // created element 
      const li = document.createElement('li')
      // created HTML template
      li.innerHTML = `
      <li class="comment d-flex align-items-start mb-4">
        <div class="comment-img mr-3">
            <img src="${comment.image}">
        </div>
        <div class="comment-body text-left">
            <h4>${comment.name}</h4>
            <div class="rate" data-rate='${comment.score}'>
              <i class="feather-icon icon-star-s"></i>
              <i class="feather-icon icon-star-s"></i>
              <i class="feather-icon icon-star-s"></i>
              <i class="feather-icon icon-star-s"></i>
              <i class="feather-icon icon-star-s"></i>
            </div>
            <p>
              ${comment.text}
            </p>
        </div>
      </li>
    `
    // append comments to comment box
    commentsBox.appendChild(li);
    // access to the stars
    const stars = li.querySelectorAll('.rate i');
    // send li and comment to fill comment stars
    fillCommentStars(stars, comment);
    });

    // fill in the comment stars
    function fillCommentStars(stars, comment){
    
      // 
      switch (comment.score) {
        case 1:
          stars[0].style.color = 'rgb(255, 153, 0)';
          break;
        case 2:
          stars[0].style.color = 'rgb(255, 153, 0)';
          stars[1].style.color = 'rgb(255, 153, 0)';
          break;
        case 3:
          stars[0].style.color = 'rgb(255, 153, 0)';
          stars[1].style.color = 'rgb(255, 153, 0)';
          stars[2].style.color = 'rgb(255, 153, 0)';
          break;
        case 4:
          stars[0].style.color = 'rgb(255, 153, 0)';
          stars[1].style.color = 'rgb(255, 153, 0)';
          stars[2].style.color = 'rgb(255, 153, 0)';
          stars[3].style.color = 'rgb(255, 153, 0)';
          break;
        case 5:
          stars[0].style.color = 'rgb(255, 153, 0)';
          stars[1].style.color = 'rgb(255, 153, 0)';
          stars[2].style.color = 'rgb(255, 153, 0)';
          stars[3].style.color = 'rgb(255, 153, 0)';
          stars[4].style.color = 'rgb(255, 153, 0)';
          break;
      }
    }
    
  } 

}

// add new comment and comment box
function addNewComment(){

  // show and hide comment box  -------------- */ ->
  function showAndHideAddCommentBox(){
    // aceess to the comment box
    const addCommentBox = document.querySelector('#add-comment-box');
    // access to the add comment button
    const addCommentButton = document.querySelector('.add-comment-btn');
    // access to the close button
    const closeBtn = document.querySelector('#add-comment-box .close-btn');
    // access to the background blur filter
    const bgBlur = document.querySelector('#back-dark-filter');


    // set click event on add comment button
    addCommentButton.addEventListener('click', () => {
      addCommentBox.classList.add('active');
      bgBlur.classList.add('active');
    })
    // set click event on close btn
    closeBtn.addEventListener('click', () => {
      addCommentBox.classList.remove('active');
      bgBlur.classList.remove('active');
    })
    // set click event on bgBlur
    bgBlur.addEventListener('click', () => {
      addCommentBox.classList.remove('active');
      bgBlur.classList.remove('active');
    });

    // take rate
    function takeRate(){
      // access to the stars
      const stars = document.querySelectorAll('.set-rate .stars .icon-star-s');

      // access to the rate text
      const reateTextTag = document.querySelector('.set-rate p');

      // base point text
      const pointTexts = ['Very good', 'Good', ' medium', 'Bad' ,'Awful'];


      // each in stars
      stars.forEach((star, index) => {
        // set click event on stars
        star.addEventListener('click', () => {
          // set point text to rate text tag
          reateTextTag.innerText = `${pointTexts[index]}`;

          // access to selected star and active stars
          if(star.classList.contains('star-5')){
            // change star color to gold
            stars[4].style.color = 'rgb(255, 153, 0)';
            // change rate taxt color
            reateTextTag.style.color = 'rgb(204, 0, 34)';
            // change embpty stars color to gray
            stars[3].style.color = 'rgb(200, 200, 200)';
            stars[2].style.color = 'rgb(200, 200, 200)';
            stars[1].style.color = 'rgb(200, 200, 200)';
            stars[0].style.color = 'rgb(200, 200, 200)';
          }else if(star.classList.contains('star-4')){
            // change star color to gold
            stars[4].style.color = 'rgb(255, 153, 0)';
            stars[3].style.color = 'rgb(255, 153, 0)';
            // change rate taxt color
            reateTextTag.style.color = 'rgb(204, 0, 143)';
            // change embpty stars color to gray
            stars[2].style.color = 'rgb(200, 200, 200)';
            stars[1].style.color = 'rgb(200, 200, 200)';
            stars[0].style.color = 'rgb(200, 200, 200)';
          }else if(star.classList.contains('star-3')){
            // change star color to gold
            stars[4].style.color = 'rgb(255, 153, 0)';
            stars[3].style.color = 'rgb(255, 153, 0)';
            stars[2].style.color = 'rgb(255, 153, 0)';
            // change rate taxt color
            reateTextTag.style.color = 'rgb(180, 0, 204)';
            // change embpty stars color to gray
            stars[1].style.color = 'rgb(200, 200, 200)';
            stars[0].style.color = 'rgb(200, 200, 200)';
          }else if(star.classList.contains('star-2')){
            // change star color to gold
            stars[4].style.color = 'rgb(255, 153, 0)';
            stars[3].style.color = 'rgb(255, 153, 0)';
            stars[2].style.color = 'rgb(255, 153, 0)';
            stars[1].style.color = 'rgb(255, 153, 0)';
            // change rate taxt color
            reateTextTag.style.color = 'rgb(54, 0, 204)';
            // change embpty stars color to gray
            stars[0].style.color = 'rgb(200, 200, 200)';
          }else if(star.classList.contains('star-1')){
            // change star color to gold
            stars[4].style.color = 'rgb(255, 153, 0)';
            stars[3].style.color = 'rgb(255, 153, 0)';
            stars[2].style.color = 'rgb(255, 153, 0)';
            stars[1].style.color = 'rgb(255, 153, 0)';
            stars[0].style.color = 'rgb(255, 153, 0)';
            // change rate taxt color
            reateTextTag.style.color = 'rgb(0, 122, 204)';
          }
        });
      });
    }
    takeRate();
  }
  showAndHideAddCommentBox();
}

// fill in the total score stars
function fillTotalScoreStars(){
  // access to score total
  const scoreTotal = document.querySelector('.total-socre').getAttribute('total-socre');
  
  // created base score
  const baseScore = 5;

  // calculate the multiplcition of base points and total points
  const starPercentage = (scoreTotal / baseScore) * 100;

  // round to nearest 10
  const starPercentageRound = `${Math.round(starPercentage) - 1.5}%`
  
  // access to the stars inner
  const starsInner = document.querySelector('.stars-inner');
  // set stars inner width
  starsInner.style.width = starPercentageRound;
}



// recommend products loaded
function recommentProduct(){
  productCarusel.newCarusel('../files/json/products/womens-coat.json', 'recommend-products');
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
      zoom : true,
});

var productImageLightbox = new Swiper(".product-lightbox", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      mousewheel: true,
      keyboard: true,
      zoom : true,
});

