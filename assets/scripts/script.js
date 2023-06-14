const characterListElement = document.getElementById('character-list');

// Função para fazer a solicitação à API
function getStarWarsCharacters(url = 'https://swapi.dev/api/people/') {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const characters = data.results;
            displayCharacters(characters);

            // Verifica se há mais páginas e continua recuperando os personagens
            if (data.next) {
                getStarWarsCharacters(data.next);
            }
        })
        .catch(error => {
            console.log('Erro ao obter dados dos personagens', error);
        });
}

// Função para exibir os personagens na página HTML
function displayCharacters(characters) {
    characters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.classList.add('character');

        const nameElement = document.createElement('h2');
        nameElement.textContent = character.name;
        characterElement.appendChild(nameElement);

        const detailsListElement = document.createElement('ul');
        characterElement.appendChild(detailsListElement);

        const heightElement = document.createElement('li');
        heightElement.textContent = `Altura: ${character.height} cm`;
        detailsListElement.appendChild(heightElement);

        const massElement = document.createElement('li');
        massElement.textContent = `Peso: ${character.mass} kg`;
        detailsListElement.appendChild(massElement);

        const hairColorElement = document.createElement('li');
        hairColorElement.textContent = `Cor do cabelo: ${character.hair_color}`;
        detailsListElement.appendChild(hairColorElement);

        // E assim por diante... você pode adicionar os demais detalhes desejados

        characterListElement.appendChild(characterElement);
    });
}

// Chama a função para obter e exibir todos os personagens
getStarWarsCharacters();
