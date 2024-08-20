const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');



    function error(input, message){
        input.className =  'form-control is-invalid'
        const div = input.nextElementSibling;
        div.innerText = message;
        div.className = 'invalid-feedback';
    }

    function success(input){
        input.className =  'form-control is-valid'
    }


    //email regex(regular expression) js
    function checkEmail (input){

        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(re.test(input.value)){
            success(input);
        }else{
            error(input, 'hatalı bir email');
        }

    }

  



    function checkRequired(inputs){
    //  console.log(input.value);
    inputs.forEach(function(input) {    
    if(input.value === ''){
        error(input, `${input.id} is required`)
    }else{
        success(input);
    }
    });
        
    }



//form için submit olayı gerçekleşir
form.addEventListener('submit', function(event){

    event.preventDefault(); //submit olmaması için
    //console.log(username.value);

    // if(username.value === ''){
    //    error(username , 'username gerekli');
    // }else{
    //    success(username);
    // }

    // if(email.value === ''){
    //     error(email, 'email gerekli');
    // }else if(!validateEmail(email.value)){
    //     error(email, 'email formatında giriş yapınız');
    // }
    // else{
    //     success(email);
    // }

    // if(password.value === ''){
    //     error(password, 'parola gerekli');
    // }else{
    //     success(password);
    // }

    // if(repassword.value === ''){
    //     error(repassword, 'parola tekrarı gerekli ');
    // }else{
    //     success(repassword);
    // }


    checkRequired([username,email,password,repassword]);
    // checkRequired(email);
    // checkRequired(password);
    // checkRequired(repassword);
    checkEmail(email);


});