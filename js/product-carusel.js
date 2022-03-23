
// product carusel class 
class ProductCarusel {
    newCarusel(dataLink, caruselParentId){
      // created shoping cart class
      const shopingCart = new ShopingCart();
    
      // send request to server with fetch
      fetch(dataLink).then((firstRespons) => {
        firstRespons.json().then((finallyRespons) => {
          // send products to create DOM function
          createdCaruselToDOM(finallyRespons);
        })
      }).catch((error) => {
        console.log(error);
      });
  
      // created product carusel to DOM 
      async function createdCaruselToDOM(products){
        // access carusel id
        const caruselId = document.querySelector(`#${caruselParentId} .swiper`).getAttribute('id');
        // access carusel and created new swiper
        const mySwiper = new Swiper(`#${caruselId}`, {
            spaceBetween: 30,
            navigation: {
              nextEl: ".button-next",
              prevEl: ".button-prev",
            },
            autoplay: {
              delay : 2500,
              disableOnInteraction: false,
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
              <div class="swiper-slide product-cart" data-id='${product.id}' quntity='1'>
                  <a>
                      <!-- product image -->
                      <div class="product-image">
                          <img src="${product.image}" loading='lazy' alt="product 13">
                          <div class='add-to-favorites'>
                              <i class="feather-icon add-favorites-icon icon-heart" title="Add to Favorites" ></i>
                          </div>
                          <div class="sell">${offer}%</div>
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
                      <div class="add-to-cart">
                          <span></span>
                          <i class="feather-icon"></i>
                      </div>
                      <!-- End of product body -->
                  </a>
              </div>
              <!-- End of slide -->
              `
            ]); 
            

          }else{
            // set product info in div and created product cart template
            mySwiper.addSlide(1, [
              `
              <!-- start slide -->
              <div class="swiper-slide product-cart" data-id='${product.id}' quntity='1'>
                  <a>
                      <!-- product image -->
                      <div class="product-image">
                          <img src="${product.image}" loading='lazy' alt="product 13">
                          <div class='add-to-favorites'>
                              <i class="feather-icon add-favorites-icon icon-heart" title="Add to Favorites" ></i>
                          </div>
                      </div>
                      <!-- End of product image -->
                      <!-- product body -->
                      <div class="product-body">
                          <h3>${product.title}</h3>
                          <div class="new-price">
                              <p class="default-price">$${product.price}</p>
                          </div>
                      </div>
                      <div class="add-to-cart">
                          <span></span>
                          <i class="feather-icon"></i>
                      </div>
                      <!-- End of product body -->
                  </a>
              </div>
              <!-- End of slide -->
              `
            ]);
          }
        });
        // 
        shopingCart.run(caruselParentId);
      }
    };
  
  }