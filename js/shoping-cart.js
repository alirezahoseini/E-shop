// everything in shoping cart
class ShopingCart{

    // add poducts to my favorites
    addToFavorites(selectedProduct){
        // access to the favorites from localStorage
        const myFavorites = newLocalStoage.getItem('myFavorites');
        // access to the product
        const product = selectedProduct.parentElement.parentElement.parentElement.parentElement;
        // access to product info ----> function
        const productInfo = accessToProductInfo(product);

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
                ui.showMessage('Product added to favorites', 'success')
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
        }

        // access to product info ------------->
        function accessToProductInfo(product){
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
    }

    
   
    

    
}