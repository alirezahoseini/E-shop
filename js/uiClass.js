// Evreything in html ui -----------------------------
class Ui {

    // ------ adding Custom class to element
    addingCustomClass(element, classes){
        // access to element 
        const myElement = document.querySelector(element);

        // adding classes to element
        myElement.classList.add(classes);
    }

    // ------ removeing  class from element
    removeClassFromElement(element, classes){
        // access to element 
        const myElement = document.querySelector(element);

        // removeing classes from element
        myElement.classList.remove(classes);
    }

    // show message 
    showMessage(message, theme){
        // theme classes -------> 
        // normal ===> bg white - color black
        // alert ===> bg gold - color white
        // success ===> bg green - color white
        // danger ===> bg red - color white

        // access to message box
        const messageBox = document.querySelector('#show-message');

        // created icon class
        let icon = ''
        // if theme == normal 
        if(theme == 'normal'){
            icon = 'icon-smile'
        }
        // if theme == alert  
        if(theme == 'alert'){
            icon = 'icon-alert-circle'
        }
        // if theme == success 
        if(theme == 'success'){
            icon = ' icon-check-circle'
        }
        // if theme == normal 
        if(theme == 'danger'){
            icon = 'icon-alert-triangle'
        }

        // created div tag
        const div = document.createElement('div');

        // created themplate
        div.innerHTML = `
            <span>
            <i class="feather-icon icon-x"></i>
            <i class="feather-icon ${icon}"></i>
            <p>${message}</p>
            </span>
            <span id='timer'>
                <span class='progress'></span>
            </span>
        `;
        // set message theme
        div.classList.add(theme);

        // append message to message box
        messageBox.appendChild(div);

        // access to progress
        const progress = div.querySelector('.progress');

        // created progress counter
        let progressCounter = 0;
        
        // show message to the user after .2s
        setTimeout(() => {
            // show message
            div.classList.add('show');
            // run progress
            setInterval(() => {
                progressCounter += 1;
                progress.style.width = progressCounter + '%'
            }, 48);
        }, 200);


        // hide message after 5s 
        setTimeout(() => {
            div.classList.add('hide');
        }, 5000);

        // remove message after 3.3s 
        setTimeout( () => {
            div.remove()
        }, 5900);

        // access to the remove message button
        const removeMessageBtn = div.querySelector('.icon-x');
        // set click event and hide message
        removeMessageBtn.addEventListener('click', () => div.classList.add('hide'))
    }

    
    // adding product to favorit list
    // addingProductToTheFavoritsList(productInfo){
    //     // hide empty tag 
    //     ui.addingCustomClass('.my-favorites .empty', 'hide')
    //     // access to the favorits list
    //     const favoritsList = document.querySelector('.my-favorites');

    //     // if off price exist
    //     if(productInfo.offPrice !== 0){
    //         // created item template
    //         favoritsList.innerHTML += `
    //             <!-- cart item -->
    //             <div class="cart-item row my-4" data-id='${productInfo.dataId}' quntity='1'>
    //                 <div class="symbol">
    //                     <i class="feather-icon icon-heart"></i>
    //                 </div>
    //                     <i class="feather-icon icon-x remove-item"></i>
    //                 <div class="col-4 cart-img">
    //                     <a href="#">
    //                         <img src="${productInfo.image}" class="img-fluid rounded">
    //                     </a>
    //                 </div>
    //                 <div class="col-7 cart-info">
    //                     <a href="#">
    //                         <p class="cart-title">
    //                             ${productInfo.title}
    //                         </p>
    //                     </a>
    //                     <div class="cart-price">
    //                         Price: <span class='text-meuted'>$${productInfo.price}</span> 
    //                     </div>
    //                     <div class="cart-off-price">
    //                         Offer Price: <span>$${productInfo.offPrice}</span> 
    //                     </div>
    //                 </div>
    //             </div>
    //             <!-- End of cart item -->
    //         `
    //     }else{
    //         // created item template
    //         favoritsList.innerHTML += `
    //             <!-- cart item -->
    //             <div class="cart-item row my-4" data-id='${productInfo.dataId}' quntity='1'>
    //                 <div class="symbol">
    //                     <i class="feather-icon icon-heart"></i>
    //                 </div>
    //                     <i class="feather-icon icon-x remove-item"></i>
    //                 <div class="col-4 cart-img">
    //                     <a href="#">
    //                         <img src="${productInfo.image}" class="img-fluid rounded">
    //                     </a>
    //                 </div>
    //                 <div class="col-7 cart-info">
    //                     <a href="#">
    //                         <p class="cart-title">
    //                             ${productInfo.title}
    //                         </p>
    //                     </a>
    //                     <div class="cart-price">
    //                         Price: <span>$${productInfo.price}</span> 
    //                     </div>
    //                 </div>
    //             </div>
    //             <!-- End of cart item -->
    //         `

    //     }

    //     // adding aded class to heart btn ----->
    //     // access to like btn
    //     const myProductLikeIcon = document.querySelector(`div[data-id='${productInfo.dataId}'] .add-favorites-icon`).parentElement;
    //     // add aded class to btn
    //     myProductLikeIcon.classList.add('added');
    // }

    // // adding product to my cart list
    // addingProductToTheCart(productInfo){
    //     // hide empty tag 
    //     ui.addingCustomClass('.my-cart .empty', 'hide')
    //     // access to the favorits list
    //     const cartList = document.querySelector('.my-cart');
    //     // if off price exist
    //     if(productInfo.offPrice !== 0){
    //         // created item template
    //         cartList.innerHTML += `
    //             <!-- cart item -->
    //             <div class="cart-item row my-4" data-id='${productInfo.dataId}' quntity='${productInfo.quntity}'>
    //                 <div class="symbol">
    //                     <i class="feather-icon icon-shopping-cart"></i>
    //                 </div>
    //                 <i class="feather-icon icon-x remove-item"></i>
    //                 <div class="col-4 cart-img">
    //                     <a href="#">
    //                         <img src="${productInfo.image}" class="img-fluid rounded">
    //                     </a>
    //                 </div>
    //                 <div class="col-7 cart-info">
    //                     <a href="#">
    //                         <p class="cart-title">
    //                             ${productInfo.title}
    //                         </p>
    //                     </a>
    //                     <div class="counter">
    //                         <p>Number:</p>
    //                         <div class="counter-input">
    //                             <button class="low">-</button>
    //                             <input type="number" name="cart-counter" class="cart-counter" min='1' value="${productInfo.counterValue}">
    //                             <button class="up">+</button>
    //                         </div>
    //                     </div>
    //                     <div class="cart-price">
    //                         Price: <span class='text-meuted'>$${productInfo.price}</span> 
    //                     </div>
    //                     <div class="cart-off-price">
    //                         Offer Price: <span>$${productInfo.offPrice}</span> 
    //                     </div>
    //                 </div>
    //             </div>
    //             <!-- End of cart item -->
    //         `
    //     }else{
    //         // created item template
    //         cartList.innerHTML += `
    //             <!-- cart item -->
    //             <div class="cart-item row my-4" data-id='${productInfo.dataId}' quntity='${productInfo.quntity}'>
    //                 <div class="symbol">
    //                     <i class="feather-icon icon-shopping-cart"></i>
    //                 </div>
    //                 <i class="feather-icon icon-x remove-item"></i>
    //                 <div class="col-4 cart-img">
    //                     <a href="#">
    //                         <img src="${productInfo.image}" class="img-fluid rounded">
    //                     </a>
    //                 </div>
    //                 <div class="col-7 cart-info">
    //                     <a href="#">
    //                         <p class="cart-title">
    //                             ${productInfo.title}
    //                         </p>
    //                     </a>
    //                     <div class="counter">
    //                         <p>Number:</p>
    //                         <div class="counter-input">
    //                             <button class="low" action='decrease'>-</button>
    //                             <input type="number" name="cart-counter" class="cart-counter" min='1' value="${productInfo.counterValue}">
    //                             <button class="up" action='increase'>+</button>
    //                         </div>
    //                     </div>
    //                     <div class="cart-price">
    //                         Price: <span>$${productInfo.price}</span> 
    //                     </div>
    //                 </div>
    //             </div>
    //             <!-- End of cart item -->
    //         `

    //     }

    //     // adding added class to addToCart btn ----->
    //     // access to like btn
    //     const addToCartBtn = document.querySelector(`div[data-id='${productInfo.dataId}'] .add-to-cart`);
    //     // add adeed class to btn
    //     addToCartBtn.classList.add('added');
    // }

    // // shoping cart product counter 
    // cartCounter(){
    //     calculateTotalPrice();
    //     // access to the counters 
    //     const favoritesCounter = document.querySelector('.favorites-btn span');
    //     const cartCounter = document.querySelector('.cart-btn span');

    //     // access to data from local storage
    //     const favorites = newLocalStoage.getItem('myFavorites');
    //     const carts = newLocalStoage.getItem('myCart');

    //     // set counter to html
    //     cartCounter.innerHTML = carts.length;
    //     favoritesCounter.innerHTML = favorites.length; 

    //     // show and hide empty image for favorites
    //     if(favorites.length == 0){
    //         // show empty tag 
    //         ui.removeClassFromElement('.my-favorites .empty', 'hide');
    //     }else{
    //         // hide empty tag 
    //         ui.addingCustomClass('.my-favorites .empty', 'hide');
    //     }
    //     // show and hide empty image for cart
    //     if(carts.length == 0){
    //         // show empty tag 
    //         ui.removeClassFromElement('.my-cart .empty', 'hide');
    //     }else{
    //         // hide empty tag 
    //         ui.addingCustomClass('.my-cart .empty', 'hide');
    //     }
        
    //     // cart icon animated
    //     cartIconAnimated()
    //     function cartIconAnimated(){
    //         // access to the cart icon
    //         const cartIcon = document.getElementById('cart-icon');

    //         // access to cart icon counter tag
    //         const cartIconCounterTag = cartIcon.querySelector('#cart-icon-counter');
            
    //         // show and hide cart icon animation
    //         if(carts.length == 0){
    //             // hide animation
    //             cartIcon.classList.add('hide');
    //         }else{
    //             // show animation
    //             cartIcon.classList.remove('hide');
    //             // set products length to cart icon counter
    //             cartIconCounterTag.innerHTML = carts.length;
    //         }

           

    //     }

    //     // calculate total price from my cart
    //     calculateTotalPrice();
    //     function calculateTotalPrice(){

    //         // access to the product form local storage
    //         const myProducts = JSON.parse(localStorage.getItem('myCart'));
            
    //         // created total 
    //         let total = 0;
    //         // access to all prices
    //         myProducts.forEach((product , index) => {
    //             // if offer price exist 
    //             if(product.offPrice > 0){
    //                 total += product.offPrice;
    //             }else{
    //                 total += product.price;
    //             }

    //             // if counter value || product counter > 1  --> calculateing
    //             if(product.quntity > 1){
    //                 total  = total * product.quntity;
    //             }
    //         });

    //         // access to total tag
    //         const totalTag = document.querySelector('#total-price span');
    //         // set total price
    //         totalTag.innerHTML = `$${total}`;
    //     }


    // }



    // show qustion 
    // showQuestion(quest){
    //     // access to the question box
    //     const box = document.querySelector('#question');
    //     // created div
    //     const div = document.createElement('div');
    //     // set template
    //     div.innerHTML = `
    //         <h4>${quest}</h4>
    //         <div class="buttons">
    //             <button type="button" id="confirm">Confirm</button>
    //             <button type="button" id="cancel">Cancel</button>
    //         </div>
    //     `;
    //     // append div to the box
    //     box.appendChild(div);
    //     // show quest to the user  - -- add active class to box
    //     box.classList.add('active');

    //     // access to btns
    //     const confirm = document.querySelector('#question .buttons #confirm');
    //     const cancel = document.querySelector('#question .buttons #cancel');
    //     // created result 
    //     // created event listener
    //     confirm.addEventListener('click', () =>{
    //         let result = true;
    //         // hide question box
    //         box.classList.remove('active');
    //         div.remove();
    //         // return result
    //         return result;
    //     })
    //     cancel.addEventListener('click', () =>{
    //         let result = false;;
    //         // hide question box
    //         box.classList.remove('active')
    //         div.remove();
    //         // return result
    //         return result;
    //     })

    // }
}