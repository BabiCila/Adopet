let form = document.querySelector('form');
let email = document.getElementById('email');
let password = document.getElementById('password');
let pass_repeat = document.getElementById('pass_repeat')
let textForm = document.getElementById('textForm');
let textEmail = document.getElementById('textEmail');
let textPassword = document.getElementById('textPassword');
let textPassRepeat = document.getElementById('textPassRepeat');
let closed = document.getElementById('closed');
let open = document.getElementById('open');
let closed_repeat = document.getElementById('closed_repeat');
let open_repeat = document.getElementById('open_repeat');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    if(email.value == "" &&
       nome.value == "" &&
       password.value == "" &&
       pass_repeat.value == "") {
        textForm.textContent = 'Você precisa preencher todos os campos!'
    } else if (
        validaNome(nome.value) === true &&
        validaEmail(email.value) === true &&
        validaPassword(password.value) === true &&
        validaPass_Repeat(pass_repeat.value) !== true
    ) {
        console.log(email.value);
        console.log(nome.value);
        console.log(password.value);
        console.log(pass_repeat.value);
        textForm.textContent = "";
        textEmail.textContent = "";
        textNome.textContent = "";
        textPassword.textContent = "";
        textPassRepeat.textContent = "";
    } else {
        textForm.textContent = "Você precisa preeencher todos os campos";
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

nome.addEventListener("keyup", () => {
    if(validaNome(nome.value) !==true ) {
        textNome.textContent = "Nome e Sobrenome. Não utilizar números."
    } else {
        textNome.textContent = " ";
    }
})

password.addEventListener ('keyup', () => {
    if(validaPassword(password.value) !== true) {
        textPassword.textContent = "6 a 12 caracteres, uma letra maiúscula, um número e não conter símbolos"
    } else {
        textPassword.textContent = " ";
    }
})

pass_repeat.addEventListener ('keyup', () => {
    if(validaPass_Repeat(pass_repeat.value)) {
        textPassRepeat.textContent = " ";
    } else {
        textPassRepeat.textContent = "Você deve repetir a senha acima";
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

closed_repeat.addEventListener('click', () => {
    if(pass_repeat.value) {
      pass_repeat.type == 'password' ? pass_repeat.type = 'text' : pass_repeat.type = 'password';
      pass_repeat.focus();
      closed_repeat.style.display = 'none';
      open_repeat.style.display = 'inline-block';
    }
});
  
open_repeat.addEventListener('click', () => {
    if(pass_repeat.value) {
      pass_repeat.type == 'text' ? pass_repeat.type = 'password' : pass_repeat.type = 'text';
      pass_repeat.focus();
      open_repeat.style.display = 'none';
      closed_repeat.style.display = 'inline-block';
    }
});

function validaEmail (email) {
    let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email)
}

function validaNome(nome) {
    let nomePattern = /[A-Z][a-z]* [A-Z][a-z]*/
    return nomePattern.test(nome)
}

function validaPassword (password) {
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!@#$%^&*_=+-]).{6,12}$/;
    return passwordPattern.test(password)
}

function validaPass_Repeat (pass_repeat) {
    if(pass_repeat == password.value) {
    return pass_repeat.trim();
    }
    
}

