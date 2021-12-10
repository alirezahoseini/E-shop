// Classes -------------------
const ui = new Ui();





// EventListeners -------------
eventlisteners();
function eventlisteners(){

    // show mobile menu
    document.querySelector("#mobile-toggler").addEventListener("click", () => {
        // show menu
        ui.addingCustomClass("#mobile-menu", "active");
        // show background filter
        ui.addingCustomClass("#back-dark-filter", 'active');
    });

    // hidde mobile menu
    document.querySelector("#back-dark-filter").addEventListener("click", () => {
        // hidde menu
        ui.removeClassFromElement("#mobile-menu", "active");
        // hidde background filter
        ui.removeClassFromElement("#back-dark-filter", 'active');
    });

    // change header heigth with top scroll
    document.addEventListener("DOMContentLoaded", headerChangeHeigth)
}




// Functions -------------------

// change header heigth with top scroll
function headerChangeHeigth(e){
    // access to header
    const header = document.querySelector("header");
    // created counter
    let counter = 0;

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
            
        }else{
            // hide header
            header.classList.remove('sticky');
        }

        // transparent bacground header  desctop size
        if(window.innerWidth > 991){
            // access to light icons
            const lightIcons = document.querySelectorAll('.light-icons');
            const aTags = document.querySelectorAll("header #navbar a");

            // if user scroll 0 
            if(header.classList.contains('home')){
                if(scrollPosition <  120){
                    // transparent bsckground 
                    header.style.backgroundColor = 'transparent';
                    header.style.boxShadow = 'none';
                    header.style.color = '#fff';
    
                    // change  icons color
                    lightIcons[0].src = '../files/image/header/e-shop-light-icon.svg';
                    lightIcons[1].src = '../files/image/header/search-icon.svg';
                    lightIcons[2].src = '../files/image/header/cart-icon.svg';
                    lightIcons[3].src = '../files/image/header/avatar-icon.svg';
    
                    // aTags color change to white
                    aTags.forEach((element) => {
                        element.style.color = '#fff'
                    });
                }else{
                    // white background 
                    header.style.backgroundColor = '#fff';
                    header.style.boxShadow = '0 2px 25px rgba(26, 26, 26, 0.151)';
                    
                    
                    // change  icons color
                    lightIcons[0].src = '../files/image/header/e-shop-dark-icon.svg';
                    lightIcons[1].src = '../files/image/header/search-icon-black.svg';
                    lightIcons[2].src = '../files/image/header/cart-icon-black.svg';
                    lightIcons[3].src = '../files/image/header/avatar-icon-black.svg';
                    
                    // aTags color change black
                    aTags.forEach((element) => {
                        element.style.color = '#000'
                    });
                }
            }
        }

    })

    
    




    
}