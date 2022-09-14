const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.querySelector('form');
const textForm = document.getElementById('textForm');
const textEmail = document.getElementById('textEmail');
const textPassword = document.getElementById('textPassword');
const closed = document.getElementById('closed');
const open = document.getElementById('open');
const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

form.addEventListener('submit' , (e) => {
    e.preventDefault()
    
    if(email.value == '' && 
        password.value == '') {
        textForm.textContent = 'Você precisa preencher todos os campos!'
    } else if (
        validaEmail(email.value) === true &&
        validaPassword(password.value) === true
    ) {
        textForm.textContent = '';
        textEmail.textContent = '';
        textPassword.textContent = '';
        
        login(email.value, password.value)
    } else {
        console.log ("Requisição não atendida");
    }

});

function login(email, password) {
    const usuarioCadastrado = usuarios.find(elemento => elemento.email === email)

    if(usuarioCadastrado) {
        if(usuarioCadastrado.password === password) {
            window.location = "home.html"
        } else {
            textForm.textContent = "Password inválido"
        }
    } else {
        textForm.textContent = "Email não encontrado"
    }
}

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

function verificaEmail (email) {
    if (email.value === usuarios.email) {
        return email
    } else {
        textEmail.textContent = 'Email digitado não confere.';
    }
}

