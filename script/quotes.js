const quoteElem = document.querySelector("#quote");
const quoteTextElem = document.querySelector("#quote > #quote-text");
const quoteAuthorElem = document.querySelector("#quote > #quote-author");

fetch("https://api.quotable.io/random")
  .then((response) => response.json())
  .then((blah) => {
    quoteTextElem.innerText = blah.content;
    quoteAuthorElem.innerText = blah.author;
  });
