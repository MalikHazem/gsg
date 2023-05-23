function fetchQuotes() {
    fetch('https://dummyjson.com/quotes')
        .then(response => response.json())
        .then(data => {
            const quoteList = document.getElementById('quoteList');
            quoteList.innerHTML = '';
            console.log("data ",data.quotes)

            data.quotes.map(i => {
                console.log("quote ",i)
                const listItem = document.createElement('li');
                listItem.className = 'quote-item';
                listItem.textContent = i.quote;

                quoteList.appendChild(listItem);
            });
        })
        .catch(error => {
            const quoteList = document.getElementById('quoteList');
            quoteList.innerHTML = '';

            const errorItem = document.createElement('li');
            errorItem.className = 'quote-item';
            errorItem.textContent = 'Failed to fetch quotes.';
            quoteList.appendChild(errorItem);
        });
}

function filterSearch() {
    const searchInput = document.getElementById('searchInput');
    const search= searchInput.value.toLowerCase();
    const quoteItems = document.getElementsByClassName('quote-item');

    Array.from(quoteItems).forEach(item => {
        const quoteText = item.textContent.toLowerCase();
        if (quoteText.includes(search)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', fetchQuotes);

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', filterSearch);