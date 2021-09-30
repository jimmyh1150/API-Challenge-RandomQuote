function quoteText() {
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
        .then(function(response) {
            return response.json();
        })

    .then(function(json) {
            let data = json.data[0].quoteText;
            getQuote(data);
        })
        .catch(err => console.log(err));
}

function getQuote(data) {
    let text = document.getElementById("text");
    text.innerText = data;
};