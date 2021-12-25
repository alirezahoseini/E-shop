// everything in shoping cart
class ShopingCart{

    // add poducts to my favorites
    addToFavorites(selectedProduct){
        // access to the favorites from localStorage
        const myFavorites = newLocalStoage.getItem('myFavorites');
        // access to the product
        const product = selectedProduct.parentElement.parentElement.parentElement.parentElement;
        // access to product info ----> function
        const productInfo = this.accessToProductInfo(product);

        // if favorites list was empty
        if(myFavorites.length > 0){
            // checking product exist to my favorites
            // access to selected product 
            const myProductLikeIcon = document.querySelector(`div[data-id='${productInfo.dataId}'] .add-favorites-icon`).parentElement;
            // if added class exist ----> dont add
            if(myProductLikeIcon.classList.contains('added')){
                // show alert to user 
                ui.showMessage('This product is in the favorites list', 'alert');
            }else{
                // pushing this product to the my favorites array
                myFavorites.push(productInfo);
                // set new favorites to the local storage
                newLocalStoage.setItem('myFavorites', myFavorites);
                // adding product to the favorites list
                ui.addingProductToTheFavoritsList(productInfo);
                // show message to user
                ui.showMessage('Product added to favorites', 'success');
                // update cart counter
                ui.cartCounter();
            }
        }else{
            // pushing this product to the my favorites array
            myFavorites.push(productInfo);
            // set new favorites to the local storage
            newLocalStoage.setItem('myFavorites', myFavorites);
            // adding product to the favorites list
            ui.addingProductToTheFavoritsList(productInfo);
            // show added message 
            ui.showMessage('Product Added to favorites list', 'success');
            // update cart counter
            ui.cartCounter();
        }
    }

    // add poducts to my cart
    addToMyCart(selectedProduct){
        // access to the products from localStorage
        const myProducts = newLocalStoage.getItem('myCart');
        // access to the product
        const product = selectedProduct.parentElement.parentElement;
        // access to product info ----> function
        const productInfo = this.accessToProductInfo(product);
        // if my cart was empty
        if(myProducts.length > 0){
            // checking product exist to my favorites
            // access to selected product 
            const myProductAddToCartBtn = document.querySelector(`div[data-id='${productInfo.dataId}'] .add-to-cart`);
            // if added class exist ----> dont add
            if(myProductAddToCartBtn.classList.contains('added')){
                // show alert to user 
                ui.showMessage('This product is in the your cart', 'alert');
            }else{
                // pushing this product to the my products array
                myProducts.push(productInfo);
                // set new products to the local storage
                newLocalStoage.setItem('myCart', myProducts);
                // adding product to the product list in my cart ui
                ui.addingProductToTheCart(productInfo);
                // show message to user
                ui.showMessage('Product added to shping cart', 'success');
                // update cart counter
                ui.cartCounter();
            }
        }else{
            // pushing this product to the my products array
            myProducts.push(productInfo);
            // set new products to the local storage
            newLocalStoage.setItem('myCart', myProducts);
            // adding product to the products list
            ui.addingProductToTheCart(productInfo);
            // show added message 
            ui.showMessage('Product Added to shoping cart', 'success');
            // update cart counter
            ui.cartCounter();
        }
    }

    // access to product info
    accessToProductInfo(product){
        // data id 
        const dataId = product.getAttribute('data-id');
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
            image : image,
            title : title,
            price : price,
            offPrice : offPrice
        }
        return productInfo;
    };  
    
    // remove item from shoping cart
    removeItem(){
        document.querySelector('#cart-icon').addEventListener('click', () => {
            // access to the favorites list
            const favoritesList = document.querySelectorAll('.shoping-wrapper .cart-item');
            // created evevntlisteners in cart items
            favoritesList.forEach((cart, index) => {
                // add click event
                cart.addEventListener('click', (e) => {
                    // delegation click and find cart info
                    if(e.target.classList.contains('remove-item')){
                        // access to list id
                        const selectedList = e.target.parentElement.parentElement.classList;
                        // created list id
                        let listId = '';
                        // set list id
                        if(selectedList.contains('my-favorites')){
                            listId = 'myFavorites';
                        }else{
                            listId = 'myCart';
                        }
                        // final confirm -- > true & fulse 
                        finalConfirm();
                        function finalConfirm (){
                            // access to the question box
                            const box = document.querySelector('#question');
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
                                let result = true;
                                // hide question box
                                box.classList.remove('active');
                                div.remove();
                                // if true --> remove product
                                e.target.parentElement.remove();
                                // access to local list
                                const list = newLocalStoage.getItem(listId);
                                // each in local list
                                list.forEach((item , index) => {
                                    if(item.dataId == cart.getAttribute('data-id')){
                                        list.splice(index, 1);
                                        newLocalStoage.setItem(listId, list);
                                        ui.showMessage('Product removed', 'danger');
                                        ui.cartCounter();
                                        // remove added class from like icon
                                        if(listId == 'myFavorites'){
                                            document.querySelector(`div[data-id='${item.dataId}'] .add-to-favorites`).classList.remove('added');     
                                        }else{
                                            document.querySelector(`div[data-id='${item.dataId}'] .add-to-cart`).classList.remove('added');     
                                        }
                                    }
                                })
                            })
                            cancel.addEventListener('click', () =>{
                                let result = false;;
                                // hide question box
                                box.classList.remove('active')
                                div.remove();
                                // return result
                                return result;
                            })
                        }
                    }
                });
            });
        });
    }

   
    

    
}