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
            <span>
            <i class="feather-icon icon-x"></i>
            <i class="feather-icon ${icon}"></i>
            <p>${message}</p>
            </span>
            <span id='timer'>
                <span class='progress'></span>
            </span>
        `;
        // set message theme
        div.classList.add(theme);

        // append message to message box
        messageBox.appendChild(div);

        // access to progress
        const progress = div.querySelector('.progress');

        // created progress counter
        let progressCounter = 0;
        
        // show message to the user after .2s
        setTimeout(() => {
            // show message
            div.classList.add('show');
            // run progress
            setInterval(() => {
                progressCounter += 1;
                progress.style.width = progressCounter + '%'
            }, 48);
        }, 200);


        // hide message after 5s 
        setTimeout(() => {
            div.classList.add('hide');
        }, 5000);

        // remove message after 3.3s 
        setTimeout( () => {
            div.remove()
        }, 5900);

        // access to the remove message button
        const removeMessageBtn = div.querySelector('.icon-x');
        // set click event and hide message
        removeMessageBtn.addEventListener('click', () => div.classList.add('hide'))
    }

}