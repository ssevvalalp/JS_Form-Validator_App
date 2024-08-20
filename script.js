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


    function checkLength(input, min, max){
        if(input.value.length < min){
            error(input, `${input.id} en az ${min} karakter olmalı`);
        }else if (input.value.length > max){
            error(input, `${input.id} en fazla ${max} karakter olmalı`);
    }else{
        success(input);
    }
}

function checkPasswordMach(input1, input2){
    if(input1.value !== input2.value){
        error(input2, 'Parolalar eşleşmiyor');
    }
}

    //form için submit olayı gerçekleşir
    form.addEventListener('submit', function(event){

        event.preventDefault(); //submit olmaması için
    
        checkRequired([username,email,password,repassword]);  
        checkEmail(email);
        checkLength(username,7,15);
        checkLength(password,7,12);
        checkPasswordMach(password,repassword);


    });