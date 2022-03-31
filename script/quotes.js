const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

fetch("https://api.quotable.io/random")
  .then((response) => response.json())
  .then((blah) => {
    quote.innerText = blah.content;
    author.innerText = blah.author;
  });

function onMouseOverQuote(event) {
  author.classList.remove(HIDDEN_CLASS);
}

function onMouseOutQuote(event) {
  author.classList.add(HIDDEN_CLASS);
}

quote.addEventListener("mouseover", onMouseOverQuote);
quote.addEventListener("mouseout", onMouseOutQuote);
