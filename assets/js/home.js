const cardPet = document.getElementById('card_pet');

async function buscaPet() {
    const resultado = await fetch(`http://localhost:3000/pets`)
    const resultadoConvertido = await resultado.json();
    


    cardPet.innerHTML = resultadoConvertido.map(animal => 
            ` <div class="card__bg mt-4 mb-3 col-12 col-md-6 col-lg-9 ms-lg-3 mt-lg-0">
            <div class="row g-0">
            <div class="col-6 col-md-6">
                <img src="./${animal.imgUrl}" class="m-3" alt="...">
            </div>
            <div class="col-6 col-md-6">
                <div class="d-inline">
                <h5 class="card__nome mt-2">${animal.name}</h5>
                <p class="card__descricao">${animal.year}<br>${animal.size}<br>${animal.characteristics}</p>
                <p class="card__local mb-0">${animal.location}</p>
                <p class="card__msg"><img src="./assets/img/img_animais/ícone_mensagem.svg" class="m-2" class="text-muted">Falar com responsável</p>
                </div>
            </div>
            </div>
        </div>`
    ).join('')
}


buscaPet()


