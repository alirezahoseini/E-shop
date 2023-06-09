
// product carousel class 
class ProductCarousel {
    newCarousel(dataLink, carouselParentId){
      // created shoping cart class
      const shopingCart = new ShopingCart();
    
      // send request to server with fetch
      fetch(dataLink).then((firstRespons) => {
        firstRespons.json().then((finallyRespons) => {
          // send products to create DOM function
          createdCarouselToDOM(finallyRespons);
        })
      }).catch((error) => {
        ui.showMessage('dont connect to server', 'danger');
        console.log(error);
      });
  
      // created product carousel to DOM 
      async function createdCarouselToDOM(products){
        // access carusel id
        const carouselId = document.querySelector(`#${carouselParentId} .swiper`).getAttribute('id');
        // access carousel and created new swiper
        const mySwiper = new Swiper(`#${carouselId}`, {
            spaceBetween: 30,
            navigation: {
              nextEl: ".button-next",
              prevEl: ".button-prev",
            },
            breakpoints: {
              "@0.50": {
                slidesPerView: 1,
                spaceBetween: 20,
              },
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
              },
            }
          });
  
        // each in products and created product cart
        products.forEach(product => {

          // if offerPrice not exist 
          if (product.offerPrice != 0){
            // not exist ---->
              // calculating offer
            const claculate = product.price - product.offerPrice
            const offer = Math.round(claculate / (product.price / 100)) ;

            // set product info in div and created product cart template
            mySwiper.addSlide(1, [
              `
              <!-- start slide -->
              <div class="swiper-slide product-cart flex-column" data-id='${product.productId}' quntity='1'>
                <div class='icons'>
                  <div class='add-to-favorites'>
                    <i class="feather-icon add-favorites-icon icon-heart" title="Add to Favorites" ></i>
                  </div>
                  <div class="sell">${offer}%</div>
                </div>
                <a href='product-page.html?id=${product.productId}'>
                    <!-- product image -->
                    <div class="product-image">
                        <img src="${product.images[0]}" width='640px' loading='lazy' alt="${product.title}">
                        
                    </div>
                    <!-- End of product image -->
                    <!-- product body -->
                    <div class="product-body">
                        <h3>${product.title}</h3>
                        <div class="new-price">
                            <p class="off-price">$${product.offerPrice}</pc>
                            <p class="default-price">$${product.price}</p>
                        </div>
                    </div>
                    <!-- End of product body -->
                  </a>
                  <div class="add-to-cart" title='Add to cart'>
                      <span></span>
                      <i class="feather-icon"></i>
                  </div>
              </div>
              <!-- End of slide -->
              `
            ]); 
            

          }else{
            // set product info in div and created product cart template
            mySwiper.addSlide(1, [
              `
              <!-- start slide -->
              <div class="swiper-slide product-cart flex-column" data-id='${product.productId}' quntity='1'>
                <div class='icons'>
                  <div class='add-to-favorites'>
                    <i class="feather-icon add-favorites-icon icon-heart" title="Add to Favorites" ></i>
                  </div>
                </div>
                <a href='product-page.html?id=${product.productId}'>
                    <!-- product image -->
                    <div class="product-image">
                        <img src="${product.images[0]}" loading='lazy' alt="${product.title}">
                    </div>
                    <!-- End of product image -->
                    <!-- product body -->
                    <div class="product-body">
                        <h3>${product.title}</h3>
                        <div class="new-price">
                            <p class="default-price">$${product.price}</p>
                        </div>
                    </div>
                    <!-- End of product body -->
                </a>
                <div class="add-to-cart">
                    <span></span>
                    <i class="feather-icon"></i>
                </div>
              </div>
              <!-- End of slide -->
              `
            ]);
          }
        });
        // run carousel
        shopingCart.run(carouselParentId);
        // add hide class to loading
        const loading = document.querySelector(`#${carouselId} .carusel-loading`);
        loading.classList.add('hide')
      }
    };
  
  }