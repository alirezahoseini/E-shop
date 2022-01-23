// classes --------------------------------------------------------->
const formValidtion = new FormValidation();
const ui = new Ui();


// eventlisteners --------------------------------------------------------->
eventlisteners();
function eventlisteners(){
    // after DOM Loaded 
    document.addEventListener('DOMContentLoaded', () => {
        // phone selector is run
        phoneSelectorInForgotForm();
        // show and hide password
        showAndHidePassword();
        // form changer - switch in forms
        formChanger();
        // form validations
        loginFormValidation();
        singupFormValidation();
        forgotFormValidation();
    })
}



// functions --------------------------------------------------------->

// phone selector in forgot pass form
function phoneSelectorInForgotForm(){
    // access to the phone selector 
    const phoneSelectorTag = document.querySelector('#phone-selector');
    // access to the select country
    const selectCountry = phoneSelectorTag.firstElementChild;
    // access to the all options
    const options = selectCountry.querySelectorAll('.option');
    // access to the arrow
    const arrow = selectCountry.querySelector('.arrow');

    // 
    arrow.addEventListener('click', () => selectCountry.classList.add('show') )

    // each in country options
    options.forEach((option) => {
        // add click event in country options
        option.addEventListener('click', () => {
            // remove active class as option tag
            selectCountry.querySelector('.active').classList.remove('active');
            // add active class to the selected option
            option.classList.add('active');
            // remove show class in select country
            selectCountry.classList.remove('show');
        });
    })
}


// show and hide password in login form
function showAndHidePassword(){
    // access to the login form
    const loginForm = document.querySelector('#login')
    // access to the password tag
    const passTag = loginForm.querySelector('.password');
    // access to the input
    const passInput = passTag.firstElementChild;
    // access to the eye icon
    const eyeIcon = passTag.lastElementChild;
    
    // add click event in eye icon
    eyeIcon.addEventListener('click', () => {
        // if showPass class exist
        if(eyeIcon.classList.contains('showPass')){
            // remove show pass class
            eyeIcon.classList.remove('showPass');
            // set password type
            passInput.setAttribute('type', 'password');
            // change eye icon to eye-off
            eyeIcon.classList.replace('icon-eye', 'icon-eye-off');
        }else{
            // add show pass class
            eyeIcon.classList.add('showPass');
            // set text type
            passInput.setAttribute('type', 'text');
            // change eye-off icon to eye
            eyeIcon.classList.replace('icon-eye-off', 'icon-eye');

        }
    })
}


// switch in form
function formChanger(){
    // access to forms
    const loginForm = document.querySelector('#login-form');
    const singupForm = document.querySelector('#singup-form');
    const forgotForm = document.querySelector('#forgot-form');

    // login form switchers ----------->
    loginFormSwitchers();
    function loginFormSwitchers(){
        // access to login switch buttons
        const toSingupBtn = loginForm.querySelector('.form-switcher');
        const toForgotBtn = loginForm.querySelector('.form-section a');

        // add click event in toSingup button
        toSingupBtn.addEventListener('click', () => {
            // add active class to singup form
            singupForm.classList.add('active');
            // remove active class from login form
            loginForm.classList.remove('active');
        });

        // add click event in toForgot button
        toForgotBtn.addEventListener('click', () => {
            // add active class to forgot form
            forgotForm.classList.add('active');
            // remove active class from login form
            loginForm.classList.remove('active');
        });
    }

    // singup form switchers ----------->
    sigupFormSwitchers();
    function sigupFormSwitchers(){
        // access to sigup switch button
        const toLoginBtn = singupForm.querySelector('.form-switcher');
     
        // add click event in toLogin button
        toLoginBtn.addEventListener('click', () => {
            // add active class to login form
            loginForm.classList.add('active');
            // remove active class from singup form
            singupForm.classList.remove('active');
        });
    }

    // forgot form switchers ----------->
    forgotFormSwitchers();
    function forgotFormSwitchers(){
        // access to forgot switch button
        const toLoginBtn = forgotForm.querySelector('.form-switcher');
     
        // add click event in toLogin button
        toLoginBtn.addEventListener('click', () => {
            // add active class to login form
            loginForm.classList.add('active');
            // remove active class from forgot form
            forgotForm.classList.remove('active');
        });
    }


}

// login form validation
function loginFormValidation(){
    //access to the login form
    const form = document.querySelector('form#login');
      // created validate count 
      let validateCount = {
        email : false,
        password : false
    }

    // access to the email input
    const emailInput = form.querySelector('input[name="email"]');
    // access to the password input
    const passwordInput = form.querySelector('input[name="password"]');


    // email validation ---------------->
    emailInput.addEventListener('blur', () => {
        // access to the email value
        const emailInputValue = emailInput.value;
        // validation email
        const emailValidation = formValidtion.emailValidation(emailInputValue);
        // chacking value empty 
        if(emailInputValue == null || emailInputValue === '' || emailInputValue === ' ' || emailInputValue.length < 6){
            // show err message
            ui.showMessage('Email not entered.!', 'alert');
            // change border color
            emailInput.style.borderColor = 'red';
        }else if(!emailValidation){
            // show err message
            ui.showMessage('The entered email is not valid.!', 'danger');
            // change border color
            emailInput.style.borderColor = 'red';
        }else{
            // set success border color
            emailInput.style.borderColor = 'rgb(43, 255, 0)';
            // check submit activer
            validateCount.email = true;
            submitActiver();
        }
    });

    
    // password validation -------------------->
    passwordInput.addEventListener('blur', () => {
        // access to the password value
        const passwordInputValue = passwordInput.value;
        // chacking pasvalue empty
        if(passwordInputValue == null || passwordInputValue === '' || passwordInputValue === ' '){
            // show err message
            ui.showMessage('Password not entered.!', 'alert');
            // change border color
            passwordInput.style.borderColor = 'red';
        } else if(passwordInputValue.length < 6){
            // show err message
            ui.showMessage('Password must be longer than 6 characters', 'alert');
            // change border color
            passwordInput.style.borderColor = 'red';
        }else{
            // set success border color
            passwordInput.style.borderColor = 'rgb(43, 255, 0)';
            // check submit activer
            validateCount.password = true;
            submitActiver();
        }
    });

    // active submit button after chacking all inputs
    function submitActiver(){
        // access to the submit btn
        const submitBtn = form.querySelector('button.submit-btn');
        // created true counter
        let counter = 0;
        // each in input result
        for (const key in validateCount) {
            if(validateCount[key] !== false){
                // up counter
                counter += 1;
                if(counter == 2){
                    // active button
                    submitBtn.classList.add('active');
                    // change btn type to submit
                    submitBtn.setAttribute('type','submit');
                }else{
                    // disabled button
                    submitBtn.classList.remove('active');
                    // change btn type to button
                    submitBtn.setAttribute('type','button');
                }
            }
        }
    }
}

// singup form validation
function singupFormValidation(){
    //access to the singup form
    const form = document.querySelector('form#singup');

    // created validate count 
    let validateCount = {
        fName : false,
        lName : false,
        email : false,
        password : false,
        tryPass : false,
        privacy : false
    }
    // access to the inputs and input values
    const firstName = form.querySelector('input[name="fname"]');
    const lastName = form.querySelector('input[name="lname"]');
    const email = form.querySelector('input[name="email"]');
    const password = form.querySelector('input[name="password"]');
    const tryPassword = form.querySelector('input[name="try-password"]');


    // first name validation ----------->
    firstName.addEventListener('blur', () => {
        // access to the first name value
        const firstNameValue = firstName.value;
        // first name validated with REGEX 
        const fNameValidationRx = formValidtion.nameValidation(firstNameValue);
        // input is empty 
        if(firstNameValue == null || firstNameValue === '' || firstNameValue === ' '){
            // show err message
            ui.showMessage('First name not entered.!', 'alert');
            // change border color
            firstName.style.borderColor = 'red';
        }else if(fNameValidationRx){
            // show err message
            ui.showMessage('This first name not valid.!', 'danger');
            // change border color
            firstName.style.borderColor = 'red';
            // check submit activer
            validateCount.fName = false;
            submitActiver();
        }else{
            // set success border color
            firstName.style.borderColor = 'rgb(43, 255, 0)';
            // check submit activer
            validateCount.fName = true;
            submitActiver();
        }
    });

    // last name validation ----------->
    lastName.addEventListener('blur', () => {
        // access to the last name value
        const lastNameValue = lastName.value;
        // last name validated with REGEX 
        const lNameValidationRx = formValidtion.nameValidation(lastNameValue);
        // input is empty 
        if(lastNameValue == null || lastNameValue === '' || lastNameValue === ' ' || lastNameValue.length < 3){
            // show err message
            ui.showMessage('Last name not entered.!', 'alert');
            // change border color
            lastName.style.borderColor = 'red';
        }else if(lNameValidationRx){
            // show err message
            ui.showMessage('This last name not valid.!', 'danger');
            // change border color
            lastName.style.borderColor = 'red';
            // check submit activer
            validateCount.lName = false;
            submitActiver();
        }else{
            // set success border color
            lastName.style.borderColor = 'rgb(43, 255, 0)';
            // check submit activer
            validateCount.lName = true;
            submitActiver();
        }
    });

    // email validation ----------->
    email.addEventListener('blur', () => {
        // access to the Email value
        const emailValue = email.value;
        // Email validated with REGEX 
        const emailValidationRx = formValidtion.emailValidation(emailValue);
        // input is empty 
        if(emailValue == null || emailValue === '' || emailValue === ' '){
            // show err message
            ui.showMessage('Email not entered.!', 'alert');
            // change border color
            email.style.borderColor = 'red';
        }else if(!emailValidationRx){
            // show err message
            ui.showMessage('This Email not valid.!', 'danger');
            // change border color
            email.style.borderColor = 'red';
            // check submit activer
            validateCount.email = false;
            submitActiver();
        }else{
            // set success border color
            email.style.borderColor = 'rgb(43, 255, 0)';
            // check submit activer
            validateCount.email = true;
            submitActiver();
        }
    });



    // password validation ----------->
    password.addEventListener('blur', () => {
        // access to the password value
        const passwordValue = password.value;
        // input is empty 
        if(passwordValue == null || passwordValue === '' || passwordValue === ' '){
            // show err message
            ui.showMessage('Password not entered.!', 'alert');
            // change border color
            password.style.borderColor = 'red';
        }else if(passwordValue.length < 6){
            // show err message
            ui.showMessage('Password must be longer than 6 characters', 'alert');
            // change border color
            password.style.borderColor = 'red';
            // check submit activer
            validateCount.password = false;
            submitActiver();
        }else{
            // set success border color
            password.style.borderColor = 'rgb(43, 255, 0)';
            // check submit activer
            validateCount.password = true;
            submitActiver();
        }
    });

    // try password validation ----------->
    tryPassword.addEventListener('blur', () => {
        // access to the try  password value
        const tryPasswordValue = tryPassword.value;
        // access to the try password value
        const passwordValue = form.querySelector('input[name="password"]').value;
        // input is empty 
        if(tryPasswordValue == null || tryPasswordValue === '' || tryPasswordValue === ' '){
            // show err message
            ui.showMessage('Confirm password not entered.!', 'alert');
            // change border color
            tryPassword.style.borderColor = 'red';
        }else if(tryPasswordValue !== passwordValue ){
            // show err message
            ui.showMessage('Passwords not mach', 'danger');
            // change border color
            tryPassword.style.borderColor = 'red';
            // check submit activer
            validateCount.tryPass = false;
            submitActiver();
        }else{
            // set success border color
            tryPassword.style.borderColor = 'rgb(43, 255, 0)';
            // check submit activer
            validateCount.tryPass = true;
            submitActiver();
        }
    });

    // privacy checkbox validation
    form.querySelector('input[name="privacy"]').addEventListener('change', () => {
        // access to the check box value
        const checkBoxValue = form.querySelector('input[name="privacy"]').checked;
        // check submit activer
        validateCount.privacy = checkBoxValue;
        submitActiver();
    })

    // active submit button after chacking all inputs
    function submitActiver(){
        // access to the submit btn
        const submitBtn = form.querySelector('button.submit-btn');
        // created true counter
        let counter = 0;
        // each in input result
        for (const key in validateCount) {
            if(validateCount[key] !== false){
                // up counter
                counter += 1;
                if(counter == 6){
                    // active button
                    submitBtn.classList.add('active');
                    // change btn type to submit
                    submitBtn.setAttribute('type','submit');
                }else{
                    // disabled button
                    submitBtn.classList.remove('active');
                    // change btn type to button
                    submitBtn.setAttribute('type','button');
                }
            }
        }
    }
   
}


// forgot form validation
function forgotFormValidation(){
    //access to the forgot form
    const form = document.querySelector('form#forgot');
      // created validate count 
      let validateCount = {
        email : false,
        number : false
    }

    // access to the email input
    const emailInput = form.querySelector('input[name="email"]');
    // access to the password input
    const numberInput = form.querySelector('input[name="phone"]');


    // email validation ---------------->
    emailInput.addEventListener('blur', () => {
        // access to the email value
        const emailInputValue = emailInput.value;
        // validation email
        const emailValidation = formValidtion.emailValidation(emailInputValue);
        // chacking value empty 
        if(emailInputValue == null || emailInputValue === '' || emailInputValue === ' ' || emailInputValue.length < 6){
            // show err message
            ui.showMessage('Email not entered.!', 'alert');
            // change border color
            emailInput.style.borderColor = 'red';
        }else if(!emailValidation){
            // show err message
            ui.showMessage('The entered email is not valid.!', 'danger');
            // change border color
            emailInput.style.borderColor = 'red';
        }else{
            // set success border color
            emailInput.style.borderColor = 'rgb(43, 255, 0)';
            // check submit activer
            validateCount.email = true;
            submitActiver();
        }
    });

    // set max length in phone number input
    numberInput.addEventListener('input' , () => {
        // access to the value
        value = numberInput.value;
        // if number length == 10 silce
        numberInput.value = value.slice(0,10);
    })

    // number validation -------------------->
    numberInput.addEventListener('blur', () => {
        // access to the number value
        const numberInputValue = numberInput.value;
        // namber validated with REGEX
        const numberValidateRX = formValidtion.phoneNumberValidation(numberInputValue);

        // chacking number value empty
        if(numberInputValue == null || numberInputValue === '' || numberInputValue === ' '){
            // show err message
            ui.showMessage('Phone number not entered.!', 'alert');
            // change border color
            numberInput.style.borderColor = 'red';
        } else if(numberInputValue.length < 10){
            // show err message
            ui.showMessage('Phone number must be longer than 10 characters', 'alert');
            // change border color
            numberInput.style.borderColor = 'red';
        }else if(!numberValidateRX){
            // show err message
            ui.showMessage('Phone number not valid', 'danger');
            ui.showMessage('Phone number should not start with 0, such as: +98 9100165330', 'normal');
            // change border color
            numberInput.style.borderColor = 'red';
        }else{
            // set success border color
            numberInput.style.borderColor = 'rgb(43, 255, 0)';
            // check submit activer
            validateCount.number = true;
            submitActiver();
        }
    });

    // active submit button after chacking all inputs
    function submitActiver(){
        // access to the submit btn
        const submitBtn = form.querySelector('button.submit-btn');
        // created true counter
        let counter = 0;
        // each in input result
        for (const key in validateCount) {
            if(validateCount[key] !== false){
                // up counter
                counter += 1;
                if(counter == 1){
                    // active button
                    submitBtn.classList.add('active');
                    // change btn type to submit
                    submitBtn.setAttribute('type','submit');
                }else{
                    // disabled button
                    submitBtn.classList.remove('active');
                    // change btn type to button
                    submitBtn.setAttribute('type','button');
                }
            }
        }
    }
}