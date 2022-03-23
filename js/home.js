// Classes 
const productCarusel = new ProductCarusel();




// Eventlisteners
eventlisteners();
function eventlisteners(){
    // header slider runing
    document.addEventListener("DOMContentLoaded", headerSlider);
    // product crusel runing
    document.addEventListener("DOMContentLoaded", productCaruselsRun);
}







// functions------------------------------> 
// product carusels 
function productCaruselsRun(){
    // carusel 1 --- > just for you products
    productCarusel.newCarusel ('../files/json/products/just-for-you.json', 'just-for-you');
    // carusel 2 --- > womens-coat products
    productCarusel.newCarusel('../files/json/products/womens-coat.json', 'womens-coat');
    // carusel 3 --- > womens-skirts products
    productCarusel.newCarusel( '../files/json/products/womens-skirts.json', 'womens-skirts');
}

// header slider runing 
function headerSlider(){
    // set loading to slider ------->
    // access to the slider
    const slider = document.getElementById('my-slider');

    // load slides from api ------------->
    loadSlides();
    async function loadSlides(){
        // send request to api
        fetch('../files/json/home-page-header-slider.json').then((response) => {
            // opening server response
            response.json().then((jsonData) => {
                // created slides
                createdSlides(jsonData);
            }).catch((err) => {
                console.log(err);
            })
        })
    }

    // created slides -----------> 
    function createdSlides(slidesData){
        // access to the loading
        const loading = slider.querySelector('.loading');
        // access to the slider wrapper
        const wrapper = slider.querySelector('.slider-wrapper');
        // each in slides data
        slidesData.forEach(slide => {
            // created div
            const div = document.createElement('div');
            // add slide to class list
            div.classList.add('slide');
            // set slide background
            div.style.backgroundImage = `url('${slide.image}'`;

            // created slide template
            div.innerHTML = `
                <div class="row p-0 mx-0">
                    <div class="col-12 justify-content-center align-items-center">
                        <h2>
                            ${slide.title}
                        </h2>
                    </div>
                </div>
                <div class="row mx-0 px-0">
                    <div class="col-12">
                        <a href="#" class="shop-btn">
                            <img src="../files/image/header banner/go-shop-arrow.svg" alt="shop now">
                            <p>SHOP NOW</p>
                        </a>
                    </div>
                </div>
            `
            // append div to slider wrapper
            wrapper.appendChild(div);
        });
        // active slider
        activeSlider();
    }

    // active header slider
    function activeSlider(){

        // access to slides
        const slides = slider.querySelectorAll('.slide');
        // add active class to first slide
        slides[0].classList.add('active');
        // access to slider navigation buttons
        const nextBtn = document.querySelector(".next-slide");
        const prevBtn = document.querySelector(".prev-slide");
        // access to the slider progress
        const sliderProgress = document.querySelector('.slider-progress');
        const progress = sliderProgress.firstElementChild;

        // set progress bar ------------>
        // created counter 
        let i = 0;
        // access to progress heigth
        const progressHeight = 100 / slides.length;
        // set progress heigth 
        progress.style.height = progressHeight + '%';
        // created progress position
        let progressPosition = 0;
    
        // // buttons -------------------->
        // // next slide button
        // nextBtn.addEventListener('click', () => {
        //     // transform slider progress
        //     progressPosition += progressHeight;
        //     progress.style.top = `${progressPosition}%`
    
        //     // hide this slide
        //     slides[i].classList.remove('active');
        //     // show next slide
        //     slides[i + 1].classList.add('active');
        //     // active prevSlide button
        //     prevBtn.style.pointerEvents = 'painted';
        //     prevBtn.style.opacity = 1;
        //     // counter + 1
        //     i++;
            
        //     // disabled next btn
        //     if(i == slides.length - 1){
        //         nextBtn.style.pointerEvents = 'none';
        //         nextBtn.style.opacity = .5;
        //      }
        // });
        // // prev slide button
        // prevBtn.addEventListener('click', (e) => {
        //     // transform slider progress
        //     progressPosition -= progressHeight;
        //     progress.style.top = `${progressPosition}%`;
            
        //     // hide this slide
        //     slides[i].classList.remove('active');
        //     // show prev slide
        //     slides[i - 1].classList.add('active');
        //     // active next slide btn
        //     nextBtn.style.pointerEvents = 'painted';
        //     nextBtn.style.opacity = 1;
        //     // counter - 1
        //     i--;
            
        //     // disabled prev button
        //     if(i == 0){
        //         prevBtn.style.pointerEvents = 'none';
        //         prevBtn.style.opacity = .5;
        //     }
        // });

        // auto player --------------------->
        autoPlayer();
        function autoPlayer(){
            // variables ----------->
            // created counter 
            let counter = 0;
            // set slider player delay
            const delay = 2700;
        



            /// move forward ------------->
            moveForward()
            function moveForward(){
                // set interval for move slides 
                const go = setInterval(() => {
                    // transform slider progress
                    progressPosition += progressHeight;
                    progress.style.top = `${progressPosition}%`
            
                    // hide this slide
                    slides[i].classList.remove('active');
                    // show next slide
                    slides[i + 1].classList.add('active');
                    // active prevSlide button
                    // prevBtn.style.pointerEvents = 'painted';
                    // prevBtn.style.opacity = 1;
                    // counter + 1
                    i++;
                    
                    // disabled next btn
                    // if(i == slides.length - 1){
                    //     nextBtn.style.pointerEvents = 'none';
                    //     nextBtn.style.opacity = .5;
                    // }
    
                    counter++
                }, delay);
                
                // set time out for stop move forward and active move backward
                setTimeout(() => {
                    // stop move forward
                    clearInterval(go);
                    // active move backward
                    moveBackward();
                }, delay * slides.length - 1);


                
            }

            /// move backward <--------
            function moveBackward(){
                // set interval for move slides 
                const go = setInterval(() => {
                    // transform slider progress
                    progressPosition -= progressHeight;
                    progress.style.top = `${progressPosition}%`
                    
                    // hide this slide
                    slides[i].classList.remove('active');
                    // show prev slide
                    slides[i - 1].classList.add('active');
                    // active next slide btn
                    // nextBtn.style.pointerEvents = 'painted';
                    // nextBtn.style.opacity = 1;
                    // counter - 1
                    i--;
                    // disabled prev button
                    // if(i == 0){
                    //     prevBtn.style.pointerEvents = 'none';
                    //     prevBtn.style.opacity = .5;
                    // }

                    counter--;
                }, delay);
                // set time out for stop move backward and active move forward
                setTimeout(() => {
                    // stop move forward
                    clearInterval(go);
                    // active move backward
                    moveForward();
                }, delay * slides.length - 1);
            }
        }
        
    
        // access to end count from scroll progress
        const endCount = document.querySelector('#end-count');
        
        // set slides length to end counter
        endCount.innerHTML += slides.length;
    }
}


