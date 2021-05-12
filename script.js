const username = document.querySelector('#username');
const pass1 = document.querySelector('#pass1');
const pass2 = document.querySelector('#pass2');
const email = document.querySelector('#email');
const btnClear = document.querySelector('.button-clear');
const btnSend = document.querySelector('.button-send');
const btnClose = document.querySelector('.button-close');
const divFormBox = document.querySelectorAll('.form-box');
const errors = document.querySelectorAll('.error');
const popup = document.querySelector('.popup');
// FIRST WAY (approach based on condition)
const btnClearFcn = e => {
    e.preventDefault();
    const inTable = [username, pass1, pass2, email];
    inTable.forEach(element => {
        element.value = '';
    });
    divFormBox.forEach(element => {
        element.classList.remove('error-input');
    });
}
const btnSendFcn = (e) => {
    e.preventDefault();
        if(username.value.length > 3 && pass1.value.length > 4 && pass2.value == pass1.value && email.value.includes('@') && email.value.includes('.pl') && email.value.length > 5 ) {
            popup.classList.add('show-popup');
        } 
        else if(username.value.length < 4 ) {
            divFormBox[0].classList.add('error-input');
            // error.style.visibility = 'visible';
            errors[0].textContent = 'Enter min 4 characters';
        }
        else if(pass1.value.length < 5) {
            divFormBox[1].classList.add('error-input');
            errors[1].textContent = 'Enter min 5 characters';
        }
        else if(pass2.value !== pass1.value) {
            divFormBox[2].classList.add('error-input');
            errors[2].textContent = 'Oops passwords must be the same';
        }
        else if(email.value.length < 5 || email.value.includes('@') == false || email.value.includes('.pl') == false) {
            divFormBox[3].classList.add('error-input');
            errors[3].textContent = 'email is not valid (@, min 5 characters, domain)';
        }
    }
// functions with conditions for inputs (visibility for errors)
const usernameFcn = () => {
    if(username.value.length > 3 ) {
        divFormBox[0].classList.remove('error-input');
    }
}
const pass1Fcn = () => {
    if(pass1.value.length > 4 ) {
        divFormBox[1].classList.remove('error-input');
    }
}
const pass2Fcn = () => {
    if(pass2.value.length > 4 && pass2.value == pass1.value ) {
        divFormBox[2].classList.remove('error-input');
    }
}
const emailFcn = () => {
    if(email.value.includes('@') && email.value.includes('.pl') && email.value.length > 5) {
        divFormBox[3].classList.remove('error-input');
    }
}
//events 
btnClear.addEventListener('click', btnClearFcn);
btnSend.addEventListener('click', btnSendFcn);
username.addEventListener('input', usernameFcn);
pass1.addEventListener('input', pass1Fcn);
pass2.addEventListener('input', pass2Fcn);
email.addEventListener('input', emailFcn);


