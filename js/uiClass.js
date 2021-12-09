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

    
}