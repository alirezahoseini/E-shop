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
            <i class="feather-icon ${icon}"></i>
            <p>${message}</p>
        `;
        div.classList.add(theme)

        // append message to message box
        messageBox.appendChild(div);

        // show message to the user after .2s
        setTimeout(() => {
            div.classList.add('show');
        }, 200)

        // hide message after 5s 
        setTimeout(() => {
            div.classList.add('hide');
        }, 5000);

        // remove message after 3.3s 
        setTimeout( () => {
            div.remove()
        }, 5900);
    }

    
    // adding product to favorit list
    addingProductToTheFavoritsList(productInfo){
        // hide empty tag 
        ui.addingCustomClass('.my-favorites .empty', 'hide')
        // access to the favorits list
        const favoritsList = document.querySelector('.my-favorites');

        // if off price exist
        if(productInfo.offPrice !== 0){
            // created item template
            favoritsList.innerHTML += `
                <!-- cart item -->
                <div class="cart-item row my-4" data-id='${productInfo.dataId}'>
                    <div class="symbol">
                        <i class="feather-icon icon-heart"></i>
                    </div>
                        <i class="feather-icon icon-x remove-item"></i>
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
            favoritsList.innerHTML += `
                <!-- cart item -->
                <div class="cart-item row my-4" data-id='${productInfo.dataId}'>
                    <div class="symbol">
                        <i class="feather-icon icon-heart"></i>
                    </div>
                        <i class="feather-icon icon-x remove-item"></i>
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
                        <div class="cart-price">
                            Price: <span>$${productInfo.price}</span> 
                        </div>
                    </div>
                </div>
                <!-- End of cart item -->
            `

        }

        // adding aded class to heart btn ----->
        // access to like btn
        const myProductLikeIcon = document.querySelector(`div[data-id='${productInfo.dataId}'] .add-favorites-icon`).parentElement;
        // add aded class to btn
        myProductLikeIcon.classList.add('added');
    }

    // shoping cart product counter 
    cartCounter(){
        // access to the counters 
        const favoritesCounter = document.querySelector('.favorites-btn span');
        const cartCounter = document.querySelector('.cart-btn span');

        // access to data from local storage
        const favorites = newLocalStoage.getItem('myFavorites');
        // const carts = newLocalStoage.getItem('myCart');

        // cartCounter.innerHTML = carts.length;
        favoritesCounter.innerHTML = favorites.length; 
    }

    // add cart to shopingCart
    addToShopingList(listId, cartIndex){
        
    }
    // remove cart from shopingCart
    removeFromShopingList(listId, cartIndex){

    }
    
        
}