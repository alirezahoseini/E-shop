// mobile mega menu Script

// variables ------------------------>
// access to the close btn
const closeBtn = document.querySelector('#mobile-menu .close-btn');
// access to the main nav
const main = document.querySelector('.main-nav');
// access to the main banners
const banners = document.querySelectorAll('.main-banner');
// access to the back buttons 
const backMainBtns = document.querySelectorAll('.back-main-btn');
// access to the sub links
const subLinks = document.querySelectorAll('.sub-link');
// access to the back-subnav buttons
const backSubNavBtns = document.querySelectorAll('.back-subnav');




// if colse button clicked hide menu
closeBtn.addEventListener('click', () => {
    // hide menu
    ui.removeClassFromElement("#mobile-menu", "active");
    // hide background filter
    ui.removeClassFromElement("#back-dark-filter", 'active');
})

// if main banners selected --> open banner sub menu
banners.forEach(banner => {
    // if banner clicked
    banner.addEventListener('click', ()=> {
        // hide main banner
        main.style.transform = 'translateX(100%)';
        // access to the sub menu
        banner.nextElementSibling.classList.add('active');
    });
});

// if back main button clicked --> hide sub menu and show main nav
backMainBtns.forEach(btn => {
    // add event to button
    btn.addEventListener('click', ()=> {
        // show main
        main.style.transform = 'translateX(0%)';
        // hide active sub menu
        btn.parentElement.parentElement.classList.remove('active');
    });
});

// if sub link clicked --> active sub menu and hide sub nav
subLinks.forEach((sublink) => {
    // if sublink clicked
    sublink.addEventListener('click', ()=> {
        // hide sub nav banner
        sublink.parentElement.parentElement.parentElement.style.transform = 'translateX(0%)';
        // access to the sub menu
        sublink.nextElementSibling.classList.add('active');
    });
})

// if back main button clicked --> hide sub menu and show main nav
backSubNavBtns.forEach(btn => {
    // add event to button
    btn.addEventListener('click', ()=> {
        // remove this menu active class
        btn.parentElement.parentElement.classList.remove('active')
        // show parent sub menu
        btn.parentElement.parentElement.parentElement.parentElement.parentElement.style.transform = 'translateX(-100%)';

    });
});