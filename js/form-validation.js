// forms validation with REGEX

class FormValidation{

    // Email validation
    emailValidation(inputValue){
        // created regex pattern
        const pattern = /(([a-zA-Z0-9]{2,}[^\B\!\#\$\^\&\*\%\(\)\_\+\;\:\'\"\-])(\@)(([a-zA-Z0-9]{2,}[^\B\!\#\$\^\&\*\%\(\)\_\+\;\:\'\"\-])(\.)([a-zA-Z0-9]{1,7}[^\B\!\#\$\^\&\*\%\(\)\_\+\;\:\'\"\-])))/gi;
        // access to the value string 
        const value = inputValue;
        // validtion
        const test = pattern.test(value);
        // return this test
        return test;
    }

    // Name validation
    nameValidation(inputValue){
        // created pattern
        const pattern = /([\W\d\_])/i;
        // access to the value string 
        const value = inputValue;
        // validtion
        const test = pattern.test(value);
        // return test
        return test;
    }

    // Phone number validation
    phoneNumberValidation(inputValue){
        // created pattern
        const pattern = /((^[1-9][0-9])\d+)/gm;
        // access to the value string 
        const value = inputValue;
        // validtion
        const test = pattern.test(value);
        // return test
        return test;
    }
}