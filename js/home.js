// Classes 





// Eventlisteners
eventlisteners();
function eventlisteners(){
    // header slider runing
    document.addEventListener("DOMContentLoaded", headerSlider);
    // product crusel runing
    productCaruselRuning();

    
}







// functions

// header slider runing 
function headerSlider(){
    // access to slider
    const mySlider = document.querySelector('#my-slider');
    // access to slides
    const slides = document.querySelectorAll('.slide');
    // access to slider navigation buttons
    const nextBtn = document.querySelector(".next-slide");
    const prevBtn = document.querySelector(".prev-slide");
    // access to the slider progress
    const sliderProgress = document.querySelector('.slider-progress');
    const progress = sliderProgress.firstElementChild;
    // created counter 
    let i = 0;

    // access to progress heigth
    const progressHeight = 100 / slides.length;
    // set progress heigth 
    progress.style.height = progressHeight + '%';
    // created progress position
    let progressPosition = 0;

    // next slide button
    nextBtn.addEventListener('click', (e) => {
        // transform slider progress
        progressPosition += progressHeight;
        progress.style.top = `${progressPosition}%`

        // hide this slide
        slides[i].classList.remove('active');
        // show next slide
        slides[i + 1].classList.add('active');
        // active prevSlide button
        prevBtn.style.pointerEvents = 'painted';
        prevBtn.style.opacity = 1;
        // counter + 1
        i++;
        
        // disabled next btn
        if(i == slides.length - 1){
            nextBtn.style.pointerEvents = 'none';
            nextBtn.style.opacity = .5;
        }
    });
    // prev slide button
    prevBtn.addEventListener('click', (e) => {
        // transform slider progress
        progressPosition -= progressHeight;
        progress.style.top = `${progressPosition}%`
        
        // hide this slide
        slides[i].classList.remove('active');
        // show prev slide
        slides[i - 1].classList.add('active');
        // active next slide btn
        nextBtn.style.pointerEvents = 'painted';
        nextBtn.style.opacity = 1;
        // counter - 1
        i--;
        
        // disabled prev button
        if(i == 0){
            prevBtn.style.pointerEvents = 'none';
            prevBtn.style.opacity = .5;
        }
    });
    

    // access to end count from scroll progress
    const endCount = document.querySelector('#end-count');
    
    // set slides length to end counter
    endCount.innerHTML += slides.length;
}


// products carusel runing
function productCaruselRuning(){
    // swiper products carusel
        var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },
        breakpoints: {
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        },
      });

}