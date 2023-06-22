const characterListElement = document.getElementById('character-list');

    function getStarWarsCharacters() {
      const url = 'https://swapi.dev/api/people/';

      fetch(url)
        .then(response => response.json())
        .then(data => {
          const characters = data.results;
          displayCharacters(characters);
        })
        .catch(error => {
          console.log('Erro ao obter dados dos personagens', error);
        });
    }

    function displayCharacters(characters) {
      characters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.classList.add('character');
        characterElement.classList.add('card');

        const nameElement = document.createElement('h2');
        nameElement.textContent = character.name;
        characterElement.appendChild(nameElement);

        const imageElement = document.createElement('img');
        getStarWarsImage(character.url)
          .then(imageUrl => {
            imageElement.src = imageUrl;
          })
          .catch(error => {
            console.log('Erro ao obter imagem do personagem', error);
          });
        characterElement.appendChild(imageElement);

        const heightElement = document.createElement('p');
        heightElement.textContent = `Altura: ${character.height}`;
        characterElement.appendChild(heightElement);

        characterListElement.appendChild(characterElement);
      });
    }

    function getStarWarsImage(url) {
      return fetch(url)
        .then(response => response.json())
        .then(data => {
          return data.image;
        });
    }

    getStarWarsCharacters();