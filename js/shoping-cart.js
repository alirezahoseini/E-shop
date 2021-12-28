/*
 shoping cart and my favorites codces 
*/

// classes ---------------------------------------------
const newLoacalStorage = new NewLoacalStorage();

// variables ----------------------------------------------

// created base array
let cart = [];
const favorites = [];
// access to the shoping cart 
const shopingCartParent = document.querySelector('#shoping-cart');
// access to the all products
const allProductTags = document.querySelectorAll('.swiper-slide');
// access to the my cart DIV
const myCartDIV = document.querySelector('.my-cart');
// access to the my favorites DIV
const myFavoritesDIV = document.querySelector('.my-favorites');
// created cartCount 
let cartCount = 0;

// eventListeners ----------------------------------------------
eventlisteners();
function eventlisteners(){
    // show old product from local storage to the shoping cart
    document.addEventListener('DOMContentLoaded', accessToTheLocalStorageData);
}


// functions ----------------------------------------------

// access to the local storage data
function accessToTheLocalStorageData(){
    // access to the data
    cart = newLoacalStorage.getItem('myCart');
    // if cart is empty
    if(cart === null){
        // created new array
        cart = [];
        // calculate total 
        calculateTotal();
    // else add product to the shoping cart
    }else{
        cart.forEach((productInfo) => {
            // show product to the dom
            showProductToTheDom(productInfo);
            // calculate total 
            calculateTotal();
            // access to the cart items
            const cartItems = document.querySelectorAll('.cart-item');
            // active buttons
            cartItems.forEach((item) => {
                if(item.getAttribute('data-id') === productInfo.dataId){
                    increaseItem(item, productInfo);
                    decreaseItem(item, productInfo);
                    removeItem(item, productInfo);
                }
            });
            // access to the add to cart button
            const addToTheCartBtn = document.querySelector(`.swiper-slide[data-id="${productInfo.dataId}"] .add-to-cart`);
            // add added class to the add to cart button
            addToTheCartBtn.classList.add('added');
        })
    }
}


// add productc to the cart
allProductTags.forEach(productItem => {
    // access to the add to cart button
    const addToCartBtn = productItem.querySelector('.add-to-cart');
    /// access to the add to product button and add click event
    addToCartBtn.addEventListener('click', () => {
        // access to the product info
        const productInfo = accessToProductInfo(productItem);

        // if cart length === 0
        if(cart.length === 0){
            // add product to the cart array
            cart.push(productInfo);
            // add added class to the add to cart button
            addToCartBtn.classList.add('added')
            // show success message 
            ui.showMessage('product added', 'success');
            // show product to the dom
            showProductToTheDom(productInfo);
            // calculate total 
            calculateTotal();
            // access to the cart items
            const cartItems = document.querySelectorAll('.cart-item');
            // active buttons
            cartItems.forEach((item) => {
                if(item.getAttribute('data-id') === productInfo.dataId){
                    increaseItem(item, productInfo);
                    decreaseItem(item, productInfo);
                    removeItem(item, productInfo);
                }
            })
        // if cart length > 0 
        }else{
            // checking added class exist ---> if exsist show err message
            if(addToCartBtn.classList.contains('added')){
                // show err message
                ui.showMessage('This product exist to the cart', 'alert')
            }else{
                // add product to the cart array
                cart.push(productInfo);
                // add added class to the add to cart button
                addToCartBtn.classList.add('added');
                // show success message 
                ui.showMessage('product added', 'success');
                // show product to the dom
                showProductToTheDom(productInfo);
                // calculate total 
                calculateTotal();
                // access to the cart items
                const cartItems = document.querySelectorAll('.cart-item');
                // active buttons
                cartItems.forEach((item) => {
                    if(item.getAttribute('data-id') === productInfo.dataId){
                        increaseItem(item, productInfo);
                        decreaseItem(item, productInfo);
                        removeItem(item, productInfo);
                    }
                })
            }
        }
    })
});

// access to the product info
function accessToProductInfo(product){
    // data id 
    const dataId = product.getAttribute('data-id');
    // quntity
    const quntity = Number( product.getAttribute('quntity'));
    // product img
    const image = product.firstElementChild.children[0].children[0].getAttribute('src');
    // product title
    const title = product.firstElementChild.children[1].children[0].innerHTML;
    // product price
    let price = document.querySelector(`div[data-id="${dataId}"] .default-price`).innerHTML;
    price = price.split('$');
    price = Number(price[1]);
    // product new price
    let offPrice;
    try{
        offPrice = document.querySelector(`div[data-id="${dataId}"] .off-price`).innerHTML;
        offPrice = offPrice.split('$');
        offPrice = Number(offPrice[1]);
    }catch{
        offPrice = 0;
    }

    // created product info object
    const productInfo = {
        dataId : dataId,
        quntity : quntity,
        image : image,
        title : title,
        price : price,
        offPrice : offPrice,
    }
    return productInfo;
};  


// show products in DOM
function showProductToTheDom(productInfo){
    // created cart item template 
    let template = '';
    // if off price exist
    if(productInfo.offPrice !== 0){
        // created item template
        template = `
            <!-- cart item -->
            <div class="cart-item row my-4" data-id='${productInfo.dataId}' quntity='${productInfo.quntity}'>
                <div class="symbol">
                    <i class="feather-icon icon-shopping-cart"></i>
                </div>
                <i class="feather-icon icon-x remove-item" action='remove'></i>
                <div class="col-4 cart-img">
                    <a href="#">
                        <img src="${productInfo.image}" class="img-fluid rounded">
                    </a>
                </div>
                <div class="col-7 cart-info">
                    <a href="#">
                        <p class="cart-title">
                            ${productInfo.title}
                        </p>
                    </a>
                    <div class="counter">
                        <p>Number:</p>
                        <div class="counter-input">
                            <button class="low" action='decrease'>-</button>
                            <span class='cart-counter'>${productInfo.quntity}</span>
                            <button class="up" action='increase'>+</button>
                        </div>
                    </div>
                    <div class="cart-price">
                        Price: <span class='text-meuted'>$${productInfo.price}</span> 
                    </div>
                    <div class="cart-off-price">
                        Offer Price: <span>$${productInfo.offPrice}</span> 
                    </div>
                </div>
            </div>
            <!-- End of cart item -->
        `
    }else{
        // created item template
        template = `
            <!-- cart item -->
            <div class="cart-item row my-4" data-id='${productInfo.dataId}' quntity='${productInfo.quntity}'>
                <div class="symbol">
                    <i class="feather-icon icon-shopping-cart"></i>
                </div>
                <i class="feather-icon icon-x remove-item" action='remove'></i>
                <div class="col-4 cart-img">
                    <a href="#">
                        <img src="${productInfo.image}" class="img-fluid rounded">
                    </a>
                </div>
                <div class="col-7 cart-info">
                    <a href="#">
                        <p class="cart-title">
                            ${productInfo.title}
                        </p>
                    </a>
                    <div class="counter">
                        <p>Number:</p>
                        <div class="counter-input">
                            <button class="low" action='decrease'>-</button>
                            <span class='cart-counter'>${productInfo.quntity}</span>
                            <button class="up" action='increase'>+</button>
                        </div>
                    </div>
                    <div class="cart-price">
                        Price: <span>$${productInfo.price}</span> 
                    </div>
                </div>
            </div>
            <!-- End of cart item -->
        `

    }
 
    // add new item to the cart
    myCartDIV.insertAdjacentHTML('afterbegin', template)
}

// increase cart Item 
function increaseItem(inItem, productInfo){
    // set addEvent listeners in incrase button
    inItem.querySelector('[action="increase"]').addEventListener('click', (e) => {
        // each in products 
        cart.forEach((product) => {
            // if find selected product in cart items
            if(product.dataId === productInfo.dataId){
                // incrase this product quntity
                product.quntity += 1;
                // update total  price
                calculateTotal();
                // update product counter
                inItem.querySelector('.cart-counter').innerHTML = product.quntity;
            }
        })
    })
}

// decrease cart Item 
function decreaseItem(inItem, productInfo){
    // set addEvent listeners in decrase button
    inItem.querySelector('[action="decrease"]').addEventListener('click', (e) => {
        // each in products 
        cart.forEach((product) => {
            // if find selected product in cart items
            if(product.dataId === productInfo.dataId){
                if(product.quntity > 1){
                    // decrase this product quntity
                    product.quntity -= 1;
                    // update total  price
                    calculateTotal();
                    // update product counter
                    inItem.querySelector('.cart-counter').innerHTML = product.quntity;
                }
            }
        })
    })
}

// remove cart Item 
function removeItem(inItem, productInfo){
    // set addEvent listeners in remove button
    inItem.querySelector('[action="remove"]').addEventListener('click', (e) => {
        //  final confirm -- > 
            // access to the question box
            const box = document.querySelector('#question');
            // if question exist 
            if(box.firstElementChild !== null){
                box.firstElementChild.remove();
            }
            // created div
            const div = document.createElement('div');
            // set template
            div.innerHTML = `
                <h4>Do you want to delete the product?</h4>
                <div class="buttons">
                    <button type="button" id="confirm">Yes</button>
                    <button type="button" id="cancel">Cancel</button>
                </div>
            `;
            // append div to the box
            box.appendChild(div);
            // show quest to the user  - -- add active class to box
            box.classList.add('active');

            // access to btns
            const confirm = document.querySelector('#question .buttons #confirm');
            const cancel = document.querySelector('#question .buttons #cancel');
            // created result 
            // created event listener
            confirm.addEventListener('click', () =>{
                // each in products 
                cart.forEach((product, index) => {
                    // if find selected product in cart items
                    if(product.dataId === productInfo.dataId){
                        // remove product in cart 
                        cart.splice(index, 1);
                        // remove product in DOM
                        inItem.remove();
                        // remove added class in product
                        allProductTags.forEach(element => {
                            if(element.getAttribute('data-id') === productInfo.dataId){
                                element.querySelector('.add-to-cart').classList.remove('added')
                            }
                        })
                    }
                });
                // hidde confirm box
                box.firstChild.remove();
                // hidde background filter
                box.classList.remove('active');
                // update total  price
                calculateTotal();
                // show message to the user
                ui.showMessage('Product removed', 'danger')
            })
            // if user canceled
            cancel.addEventListener('click', () =>{
                // hidde confirm box
                box.firstChild.remove();
                // hidde background filter
                box.classList.remove('active');
            });


    })

}


// calculating total price
function calculateTotal(){
    // set new cart to the local storage
    newLoacalStorage.setItem('myCart', cart);
    // access to the total tag
    const totalTag = document.querySelector('#total-price span');
    // access to the empty image
    const emptyImage = document.querySelector('.my-cart .empty');
    //access to the header cart counter icon
    const headerCartCounterIcon = document.querySelector('#cart-icon');
    // created total
    let total =  0;
    /// if cart empty  || cart length === 0
    if(cart.length == 0){
        total = 0;
        // show empty image
        emptyImage.classList.remove('hide');
        // hide headerCartCounterIcon
        headerCartCounterIcon.classList.add('hide');
    }else{
        // hidde empty image
        emptyImage.classList.add('hide');
        // show headerCartCounterIcon
        headerCartCounterIcon.classList.remove('hide');
        // each in cart
        cart.forEach((product) => {
            // check off price exist
            if(product.offPrice == 0){
                total += product.price * product.quntity;
            }else{
                total += product.offPrice * product.quntity;
            }
        });
    }
    // set total to the DOM
    totalTag.innerHTML = '$' + total;
    
    // set cart length to caert counter
    cartCount = cart.length;
    // access to the cart tab counter
    document.querySelector('.cart-switcher .cart-btn span').innerHTML = cartCount;
    // set cart count to the header cart icon
    headerCartCounterIcon.querySelector('#cart-icon-counter').innerHTML = cartCount;
}

// 



// everything in shoping cart
class ShopingCart{

    // // add poducts to my favorites
    // addToFavorites(selectedProduct){
    //     // access to the favorites from localStorage
    //     const myFavorites = newLocalStoage.getItem('myFavorites');
    //     // access to the product
    //     const product = selectedProduct.parentElement.parentElement.parentElement.parentElement;
    //     // access to product info ----> function
    //     const productInfo = this.accessToProductInfo(product);

    //     // if favorites list was empty
    //     if(myFavorites.length > 0){
    //         // checking product exist to my favorites
    //         // access to selected product 
    //         const myProductLikeIcon = document.querySelector(`div[data-id='${productInfo.dataId}'] .add-favorites-icon`).parentElement;
    //         // if added class exist ----> dont add
    //         if(myProductLikeIcon.classList.contains('added')){
    //             // show alert to user 
    //             ui.showMessage('This product is in the favorites list', 'alert');
    //         }else{
    //             // pushing this product to the my favorites array
    //             myFavorites.push(productInfo);
    //             // set new favorites to the local storage
    //             newLocalStoage.setItem('myFavorites', myFavorites);
    //             // adding product to the favorites list
    //             ui.addingProductToTheFavoritsList(productInfo);
    //             // show message to user
    //             ui.showMessage('Product added to favorites', 'success');
    //             // update cart counter
    //             ui.cartCounter();
    //         }
    //     }else{
    //         // pushing this product to the my favorites array
    //         myFavorites.push(productInfo);
    //         // set new favorites to the local storage
    //         newLocalStoage.setItem('myFavorites', myFavorites);
    //         // adding product to the favorites list
    //         ui.addingProductToTheFavoritsList(productInfo);
    //         // show added message 
    //         ui.showMessage('Product Added to favorites list', 'success');
    //         // update cart counter
    //         ui.cartCounter();
    //     }
    // }

   
    // // access to product info
    // accessToProductInfo(product){
    //     // data id 
    //     const dataId = product.getAttribute('data-id');
    //     // quntity
    //     const quntity = product.getAttribute('quntity');
    //     // product img
    //     const image = product.firstElementChild.children[0].children[0].getAttribute('src');
    //     // product title
    //     const title = product.firstElementChild.children[1].children[0].innerHTML;
    //     // product price
    //     let price = document.querySelector(`div[data-id="${dataId}"] .default-price`).innerHTML;
    //     price = price.split('$');
    //     price = Number(price[1]);
    //     // product new price
    //     let offPrice;
    //     try{
    //         offPrice = document.querySelector(`div[data-id="${dataId}"] .off-price`).innerHTML;
    //         offPrice = offPrice.split('$');
    //         offPrice = Number(offPrice[1]);
    //     }catch{
    //         offPrice = 0;
    //     }

    //     // created product info object
    //     const productInfo = {
    //         dataId : dataId,
    //         quntity : quntity,
    //         image : image,
    //         title : title,
    //         price : price,
    //         offPrice : offPrice,
    //     }
    //     return productInfo;
    // };  

  
    
    // // remove item from shoping cart
    // removeItem(){
    //     document.querySelector('#cart-icon').addEventListener('click', () => {
    //         // access to the favorites list
    //         const favoritesList = document.querySelectorAll('.shoping-wrapper .cart-item');
    //         // created evevntlisteners in cart items
    //         favoritesList.forEach((cart, index) => {
    //             // add click event
    //             cart.addEventListener('click', (e) => {
    //                 // delegation click and find cart info
    //                 if(e.target.classList.contains('remove-item')){
    //                     // access to list id
    //                     const selectedList = e.target.parentElement.parentElement.classList;
    //                     // created list id
    //                     let listId = '';
    //                     // set list id
    //                     if(selectedList.contains('my-favorites')){
    //                         listId = 'myFavorites';
    //                     }else{
    //                         listId = 'myCart';
    //                     }
    //                     // final confirm -- > true & fulse 
    //                     finalConfirm();
    //                     function finalConfirm (){
    //                         // access to the question box
    //                         const box = document.querySelector('#question');
    //                         // if question exist 
    //                         if(box.firstElementChild !== null){
    //                             box.firstElementChild.remove();
    //                         }
    //                         // created div
    //                         const div = document.createElement('div');
    //                         // set template
    //                         div.innerHTML = `
    //                             <h4>Do you want to delete the product?</h4>
    //                             <div class="buttons">
    //                                 <button type="button" id="confirm">Yes</button>
    //                                 <button type="button" id="cancel">Cancel</button>
    //                             </div>
    //                         `;
    //                         // append div to the box
    //                         box.appendChild(div);
    //                         // show quest to the user  - -- add active class to box
    //                         box.classList.add('active');

    //                         // access to btns
    //                         const confirm = document.querySelector('#question .buttons #confirm');
    //                         const cancel = document.querySelector('#question .buttons #cancel');
    //                         // created result 
    //                         // created event listener
    //                         confirm.addEventListener('click', () =>{
    //                             // hide question box
    //                             box.classList.remove('active');
    //                             div.remove();
    //                             // if true --> remove product
    //                             e.target.parentElement.remove();
    //                             // access to local list
    //                             const list = newLocalStoage.getItem(listId);
    //                             // each in local list
    //                             list.forEach((item , index) => {
    //                                 if(item.dataId == cart.getAttribute('data-id')){
    //                                     // access to product from list, and remove selected item
    //                                     list.splice(index, 1);
    //                                     // set new list to local storage
    //                                     newLocalStoage.setItem(listId, list);
    //                                     // show remove message to the user
    //                                     ui.showMessage('Product removed', 'danger');
    //                                     // update cart counter tabs
    //                                     ui.cartCounter();
    //                                     // remove added class from like icon
    //                                     if(listId == 'myFavorites'){
    //                                         document.querySelector(`div[data-id='${item.dataId}'] .add-to-favorites`).classList.remove('added');     
    //                                     }else{
    //                                         document.querySelector(`div[data-id='${item.dataId}'] .add-to-cart`).classList.remove('added');     
    //                                     }
    //                                 }
    //                             });
    //                         })
    //                         cancel.addEventListener('click', () =>{
    //                             let result = false;;
    //                             // hide question box
    //                             box.classList.remove('active')
    //                             div.remove();
    //                             // return result
    //                             return result;
    //                         })
    //                     }
    //                 }
    //             });
    //         });
    //     });
    // }

   
    

    
}