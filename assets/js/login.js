let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.querySelector('form');
let textForm = document.getElementById('textForm');
let textEmail = document.getElementById('textEmail');
let textPassword = document.getElementById('textPassword');
let closed = document.getElementById('closed');
let open = document.getElementById('open');

form.addEventListener('submit' , (e) => {
    e.preventDefault()
    
    if(email.value == '' && 
        password.value == '') {
        textForm.textContent = 'Você precisa preencher todos os campos!'
    } else if (
        validaEmail(email.value) === true &&
        validaPassword(password.value) === true
    ) {
        console.log(email.value);
        console.log(password.value);
        textForm.textContent = '';
        textEmail.textContent = '';
        textPassword.textContent = '';
    } else {
        console.log ("Requisição não atendida");
    }
});

email.addEventListener('keyup', () => {
    if(validaEmail(email.value) !== true) {
        textEmail.textContent = "O formato do email deve ser nome@servidor.com"
    } else {
        textEmail.textContent = '';
    }
})

password.addEventListener ('keyup', () => {
    if(validaPassword(password.value) !== true) {
        textPassword.textContent = "6 a 12 caracteres, uma letra maiúscula, um número e não conter símbolos"
    } else {
        textPassword.textContent = ''
    }
});

closed.addEventListener('click', () => {
    if(password.value) {
      password.type == 'password' ? password.type = 'text' : password.type = 'password';
      password.focus();
      closed.style.display = 'none';
      open.style.display = 'inline-block';
    }
});
  
open.addEventListener('click', () => {
    if(password.value) {
      password.type == 'text' ? password.type = 'password' : password.type = 'text';
      password.focus();
      open.style.display = 'none';
      closed.style.display = 'inline-block';
    }
});

function validaPassword (password) {
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!@#$%^&*_=+-]).{6,12}$/;
    return passwordPattern.test(password)
}
    
function validaEmail (email) {
    let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email)
}

