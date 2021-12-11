//Evrything in products carusel
// classes ---------------------------









// eventlisteners --------------------
eventlisteners();
function eventlisteners(){
    // caruselProducts is runing
    document.addEventListener('DOMContentLoaded', caruselProducts)
}





// functions -------------------
// caruselProducts is runing
function caruselProducts(){

    //-------- gelobal variables ------- >
    // access to user screen size 
    const screenSize = window.innerWidth;
    // access to products
    const products = document.querySelectorAll('.product');
    // access to carusel
    const carusel = document.querySelector('.product-carusel[data-carusel-id="justUser"]');
    // access to carusel buttons
    const nextBtn = document.querySelector('.next-product');
    const prevBtn = document.querySelector('.prev-product');
    // access to carusel wrapper
    const caruselWrapper = document.querySelector(`.product-carusel[data-carusel-id="justUser"] .carusel-wrapper`);


    //----------- carusel set responsive codes ------------>
    // access to product width + 60 px margin
    let productWidth = document.querySelector('.product');
    productWidth = productWidth.clientWidth + 60;
    // show product counter 
    const showProductsCounter = Math.floor(screenSize / productWidth);
    // created wrapper width
    const wrapperWidth = (showProductsCounter * productWidth );
    // set wrapper width
    caruselWrapper.style.width = wrapperWidth +'px';


    //--------- carusel buttons codes --------------->
    // created left positon
    let left = 0;
    // created index product 
    let i = products.length;
    // calculate show products in default window
    const defultProducts = showProductsCounter;
    // calculate off-page balance
    let balance = i - defultProducts;
    // created strat point number || 6 - 4 = 2
    let startPoint = i - defultProducts;
    // access to loop tag
    const loop = document.querySelector(".loop");
    
    // if balance === 0  ====> disabled all buttons
    if(balance <= 0){
        ui.removeClassFromElement('.next-product', 'active');
        caruselWrapper.style.justifyContent = 'center'
    }else{
        // next product button
        nextBtn.addEventListener('click', () => {
            // low-off balance
            balance -= 1;
            // low-off left position
            left -= productWidth;
            // translate carusel to left  <===
            loop.style.left = left+'px';
            // activeing prevBtn
            ui.addingCustomClass('.prev-product' , 'active');
            // disabled next button
            if(balance == 0){
                ui.removeClassFromElement('.next-product', 'active');
            }
            
        })
        // next product button
        prevBtn.addEventListener('click', () => {
            // adding to balance
            balance += 1;
            // adding left position
            left += productWidth;
            // translate caruel to right  ===>
            loop.style.left = left+'px';
            // activeing nextBtn
            ui.addingCustomClass('.next-product' , 'active');
            // disabled preve button
            if(balance == startPoint){
                ui.removeClassFromElement('.prev-product', 'active');
            }
        })

    }


    
  



}