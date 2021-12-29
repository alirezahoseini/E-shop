// everything in local storage
class NewLoacalStorage{

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