const filterButtons = document.querySelectorAll('.filter-btn');
const gameCards = document.querySelectorAll('.gameType-Games');
document.getElementById('no-result').style.display = "none";


filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        filterGames(category);
        document.getElementById('no-result').style.display = "none";
    });
});

function filterGames(category) {
    gameCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(',');
        if (category === 'all' || categories.includes(category)) {
            card.style.display = 'block';
            document.getElementById('no-result').style.display = "none";

        } else {
            card.style.display = 'none';
            document.getElementById('no-result').style.display = "block";
        }
    });
}

// searchGames code

document.getElementById('search-btn').addEventListener('click', () => {
    const searchTerm = document.getElementById('search-game').value.toLowerCase();
    searchGames(searchTerm);
    // document.getElementById('no-result').style.display = "none";
});

document.getElementById('search-game').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        const searchTerm = event.target.value.toLowerCase();
        searchGames(searchTerm);
        document.getElementById('no-result').style.display = "none";
        document.getElementById('search-game').value = "";
    }
});

function searchGames(term) {
    gameCards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        if (title.includes(term)) {
            card.style.display = 'block';
            document.getElementById('no-result').style.display = "none";

        } else {
            card.style.display = 'none';
            document.getElementById('no-result').style.display = "block";
        }
    });
}
