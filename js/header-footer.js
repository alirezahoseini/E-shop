// Classes -------------------
const ui = new Ui();





// EventListeners -------------
eventlisteners();
function eventlisteners(){
    // show mobile menu
    document.querySelector("#mobile-toggler").addEventListener("click", () => {
        // show menu
        ui.addingCustomClass("#mobile-menu", "active");
        // show background filter
        ui.addingCustomClass("#back-dark-filter", 'active');
    });

    // hidde mobile menu
    document.querySelector("#back-dark-filter").addEventListener("click", () => {
        // hidde menu
        ui.removeClassFromElement("#mobile-menu", "active");
        // hidde background filter
        ui.removeClassFromElement("#back-dark-filter", 'active');
    })
}




// Functions -------------------
