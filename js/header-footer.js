// Classes -------------------
const ui = new Ui();
const shopingCart = new ShopingCart();
const newLocalStoage = new NewLoacalStorage();





// EventListeners -------------
eventlisteners();
function eventlisteners(){

    // hide loader
    window.addEventListener('load', () => {
        document.querySelector("#loader").classList.add('hide');
    });

    // run shoping cart 
    document.addEventListener('DOMContentLoaded', runShopingCart);

    // run mobile menu
    document.addEventListener('DOMContentLoaded', runMobileMenu);

    // back dark filter clicked --->  hidde mobile menu || shoping cart
    document.querySelector("#back-dark-filter").addEventListener("click", hideBackDarkFilter);

    // change header heigth with top scroll
    document.addEventListener("DOMContentLoaded", headerChangeHeigth)
}




// Functions -------------------

// every thing in shoping cart
function runShopingCart(){

    // show shoping cart
    document.querySelector('#cart-icon').addEventListener('click', showShopingCart );

    // user click shoping cart close btn ---> hide shoping cart
    document.querySelector("#shoping-cart .close-btn").addEventListener('click', () => {
        // hide shoping cart
        ui.removeClassFromElement("#shoping-cart", "active");
        // hide background filter
        ui.removeClassFromElement("#back-dark-filter", 'active');
    });

    // show shoping cart 
    function showShopingCart(){
        // show shoing cart
        ui.addingCustomClass("#shoping-cart", "active");
        // hidde background filter
        ui.addingCustomClass("#back-dark-filter", 'active');

    };

    // shoping cart switcher  ------------
    // access to cart switcher
    const cartSwitcher = document.querySelector('.cart-switcher');
    // access to cart switcher btns
    const cartSwitcherBtns = cartSwitcher.children;
    const myCartBtn = cartSwitcher.children[0];
    const myFavoritesBtn = cartSwitcher.children[1];

    // access to cart and favorits sections
    const cart = document.querySelector('.my-cart');
    const favorits = document.querySelector('.my-favorites');

    // active my cart
    myCartBtn.addEventListener('click', () => {
        // active my cart 
        myCartBtn.classList.add('active');
        cart.classList.add('active');
        // disabled my favorites
        myFavoritesBtn.classList.remove('active');
        favorits.classList.remove('active');
    });
    // active my favorites
    myFavoritesBtn.addEventListener('click', () => {
        // active my favorites 
        myFavoritesBtn.classList.add('active');
        favorits.classList.add('active')
        // disabled my cart
        myCartBtn.classList.remove('active');
        cart.classList.remove('active')
    });

//     // ----------------------------------> runing shoping cart 
//     // created base item to local storage
//     newLocalStoage.firstLoadingDataFromLcealStorag();
//     // cart items counter
//     ui.cartCounter();


//     // add to my cart is  --------------->
//     runCart();
//     function runCart(){
//         // add to cart  -*-*-*-*-*-*-*-*-*--
//         // access to all add to cart buttons
//         const addToCartButtons = document.querySelectorAll('.add-to-cart');
//         // each in buttons
//         addToCartButtons.forEach(button => {
//             // if clicked button
//             button.addEventListener('click', () => {
//                 // add to the my cart 
//                 shopingCart.addToMyCart(button);
//             })
//         });
//         // run shoping cart product counter
//         // myCart calculater -- counter product
//         myCartCounterProduct()
//         function myCartCounterProduct(){
//             // access to all products
//             const cartItems = document.querySelectorAll('.my-cart .cart-item');
//             console.log(cartItems.length);
//             if(cartItems.length > 0){
//                 cartItems.forEach(item => {
//                     if(item.getAttribute('action') === 'increase'){
//                         item.getAttribute('quntity') += 1;
//                     }
//                 });
//             }
//         }
//     }

//     // add to favorits is run --------------->
//     runFavorites();
//     function runFavorites(){
//         // add to favorites  -*-*-*-*-*-*-*-*-*--
//         // access to user selected product
//         document.addEventListener('click', (e) => {
//             // deleagation user click and add product to my favorites
//             if(e.target.classList.contains('add-favorites-icon')){
//                 // add product to favorites list
//                 shopingCart.addToFavorites(e.target);
//             }
//         });

//         // remove from favorites  -*-*-*-*-*-*-*-*-*--
//         shopingCart.removeItem();
//     }
}

// back dark filter clicked  -  hide shoping cart and hide mobile menu -----------
function hideBackDarkFilter(){
    // access to mobile menu
    const mobileMenu = document.querySelector('#mobile-menu');
    // access to shoping cart
    const shopingCart = document.querySelector('#shoping-cart');

    if(mobileMenu.classList.contains('active')){
        // hide menu
        ui.removeClassFromElement("#mobile-menu", "active");
        // hide background filter
        ui.removeClassFromElement("#back-dark-filter", 'active');
    }
        
    if(shopingCart.classList.contains('active')){
        // hide shoping cart
        ui.removeClassFromElement("#shoping-cart", "active");
        // hide background filter
        ui.removeClassFromElement("#back-dark-filter", 'active');
    }
}

// everything in mobile menu
function runMobileMenu(){
    // show mobile menu
    document.querySelector("#mobile-toggler").addEventListener("click", () => {
        // show menu
        ui.addingCustomClass("#mobile-menu", "active");
        // show background filter
        ui.addingCustomClass("#back-dark-filter", 'active');
    });
}

// change header heigth with top scroll
function headerChangeHeigth(e){
    // access to header
    const header = document.querySelector("header");
    // access to header logo
    const logo = document.querySelector('#logo img');
    // access to back to up button
    const backToUpBtn = document.querySelector('#back-to-up');
    // created counter
    let counter = 0;

    // header logo setter
    /* home default logo ---> light logo
    pages defult logo ---> multicolor logo */
    if(header.classList.contains('home')){
        if(window.innerWidth > 991){
            // desctop light logo
            logo.src =  './files/image/header/e-shop-light-icon.svg';
        }else{
            // mobile dark logo
            logo.src =  './files/image/header/e-shop-dark-icon.svg';
        }
    }else{
        // multicolor logo
        logo.src =  './files/image/footer/Group 241.svg';
    }

    // access to window scroll 
     window.addEventListener("scroll", (e) => {

        // access to window scroll 
        const scrollPosition = window.scrollY;
        // created i 
        const i = counter;
        counter = scrollPosition;
        // if user scroll More than 100 hide header 
        if(i > 100){
            // hide header
            header.classList.add('hide');
        }
        

        // if user scroll back show header
        if(i > counter){
            // show header 
            header.classList.add('sticky');
            // show back to up button
            backToUpBtn.classList.add('show');
        }else{
            // hide header
            header.classList.remove('sticky');
            // hide back to up button
            backToUpBtn.classList.remove('show');
        }

        // back to up button default hide
        if(scrollPosition <= 10){
            // hide back to up button
            backToUpBtn.classList.remove('show')
        }


        // transparent bacground header  desctop size
        if(window.innerWidth > 991){
            // access to light icons
            const navbarLinks = document.querySelectorAll("header a");
            const icons = document.querySelectorAll("header a i");

            // if user scroll 0 
            if(header.classList.contains('home')){
                if(scrollPosition <  120){
                    // transparent bsckground 
                    header.style.backgroundColor = 'transparent';
                    header.style.boxShadow = 'none';
                    
                    // change logo
                    logo.src = '../files/image/header/e-shop-light-icon.svg';

    
                    // navbarLinks color change to white
                    navbarLinks.forEach((element) => {
                        element.style.color = '#fff'
                    });
                    icons.forEach((element) => {
                        element.style.color = '#fff'
                    });
                }else{
                    // white background 
                    header.style.backgroundColor = '#fff';
                    header.style.boxShadow = '0 2px 25px rgba(26, 26, 26, 0.151)';
                    
                    
                    // change logo
                    logo.src = '../files/image/header/e-shop-dark-icon.svg';

                    
                    // navbarLinks color change black
                    navbarLinks.forEach((element) => {
                        element.style.color = '#000';
                    });
                    icons.forEach((element) => {
                        element.style.color = '#000';
                    });
                }
            }
        }

    })

    
    




    
}