// Classes 








// Eventlisteners
eventlisteners();
function eventlisteners(){
    // header slider  runing
    document.addEventListener("DOMContentLoaded", headerSlider)
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
    // created counter 
    let i = 0;
    nextBtn.addEventListener('click', (e) => {
        slides[i].classList.remove('active');
        slides[i + 1].classList.add('active');
        prevBtn.style.pointerEvents = 'painted';
        prevBtn.style.opacity = 1;
        i++;
        
        if(i == slides.length - 1){
            nextBtn.style.pointerEvents = 'none';
            nextBtn.style.opacity = .5;
        }
        console.log(i);
    });
    
    prevBtn.addEventListener('click', (e) => {
        slides[i].classList.remove('active');
        slides[i - 1].classList.add('active');
        nextBtn.style.pointerEvents = 'painted';
        nextBtn.style.opacity = 1;
        i--;
        
        if(i == 0){
            prevBtn.style.pointerEvents = 'none';
            prevBtn.style.opacity = .5;
        }
        console.log(i);
    });
}