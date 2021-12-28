// everything in local storage
class NewLoacalStorage{
    // created base itemes
    // firstLoadingDataFromLcealStorag(){
    //     // created base key to local storage ------------------>
    //     // access to local storage favorites vlaues
    //     const myFavorites = this.getItem('myFavorites');
    //     // access to local storage cart vlaues
    //     const myCart = this.getItem('myCart');
    //     // if my favorites dose not exist
    //     if(myFavorites == undefined){
    //         localStorage.setItem('myFavorites','[]');
    //     }
    //     // if my cart dose not exist
    //     if(myCart == undefined){
    //         localStorage.setItem('myCart','[]');
    //     }

    //     // loaded old data from local storage ------------------>
    //     // access to old favorits
    //     const oldFavotites = this.getItem('myFavorites');
    //     // access to old products
    //     const oldProducts = this.getItem('myCart');

    //     // add old favorites to the list
    //     oldFavotites.forEach(element => {
    //         // created favorites
    //         ui.addingProductToTheFavoritsList(element);
    //     });
    //     // add old products to the list
    //     oldProducts.forEach(element => {
    //         // created product in cart
    //         ui.addingProductToTheCart(element);
    //     });

        
    // }

    // getItem
    getItem(key){
        // access to the item
        const item = JSON.parse(localStorage.getItem(key));
        return item;
    }
    // setItem
    setItem(key, value){
        // convert value array to string
        const item = JSON.stringify(value);
        // set item
        localStorage.setItem(key, item);
    }

   
}