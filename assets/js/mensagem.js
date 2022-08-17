let form = document.querySelector('form');
let nome = document.getElementById('nome');
let telefone = document.getElementById('telefone');
let nomeAnimal = document.getElementById('nomeAnimal');
let mensagem = document.getElementById('mensagem');
let textForm = document.getElementById('textForm');
let textTelefone = document.getElementById('textTelefone');
let textNome = document.getElementById('textNome');
let textnomeAnimal = document.getElementById('textnomeAnimal');
let textMensagem = document.getElementById('textMensagem');


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(nome.value == "" && 
        telefone.value == "" && 
        nomeAnimal.value == "" && 
        mensagem.value == "") {
        textForm.textContent = "Você precisa preeencher todos os campos";
    } else if (
        validaTelefone(telefone.value) === true &&
        validaNome(nome.value) === true &&
        validanomeAnimal(nomeAnimal.value) !== true &&
        validaMensagem(mensagem.value) !== true
    ) {
        console.log(nome.value);
        console.log(telefone.value);
        console.log(nomeAnimal.value);
        console.log(mensagem.value);
        textTelefone.textContent = "";
        textNome.textContent = "";
        textnomeAnimal.textContent = "";
        textMensagem.textContent = "";
        textForm.textContent = "";
    } else {
        textForm.textContent = "Você precisa preeencher todos os campos";
        console.log ("Requisição não atendida");
    }

});

nome.addEventListener("keyup", () => {
    if(validaNome(nome.value) !==true ) {
        textNome.textContent = "Nome e Sobrenome. Não utilizar números."
    } else {
        textNome.textContent = " ";
    }
})

telefone.addEventListener("keyup", () => {
    if(validaTelefone(telefone.value) !== true ) {
        textTelefone.textContent = "O formato deverá ser +xx (xx) xxxxx-xxxx";
    } else {
        textTelefone.textContent = " ";
    }
});

nomeAnimal.addEventListener("keyup", () => {
    if(validanomeAnimal(nomeAnimal.value)) {
        textnomeAnimal.textContent = "O campo nome do animal não pode estar vazio"
    } else {
        textnomeAnimal.textContent = " ";
    } 
});

mensagem.addEventListener("keyup", () => {
    if(validaMensagem(mensagem.value)) {
        textMensagem.textContent = "Escreva um texto antes de enviar seu formulário."
    } else {
        textMensagem.textContent = " ";
    } 
});

function validaNome(nome) {
    let nomePattern = /[A-Z][a-z]* [A-Z][a-z]*/
    return nomePattern.test(nome);
}

function validaTelefone(telefone) {
    let telefonePattern = 
        /^\+?\d{2}?\s*\(\d{2}\)?\s*\d{4,5}\-?\d{4}$/g;
    return telefonePattern.test(telefone);
}

function validanomeAnimal(nomeAnimal) {
    return nomeAnimal.trim() === "";
}

function validaMensagem(mensagem) {
    return mensagem.trim() === "";
}