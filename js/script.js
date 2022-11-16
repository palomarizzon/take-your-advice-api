request();

function request() {
  fetch("https://api.adviceslip.com/advice").then((resp) => {
    resp.json().then((quote) => {
      renderQuote(quote.slip);
    });
  });
}

const quoteNumber = document.querySelector(".quote-number");
const quoteText = document.querySelector(".quote-text");

function renderQuote(quoteJson) {
  quoteNumber.innerHTML = `Advice #${quoteJson.id}`;
  quoteText.innerHTML = `${quoteJson.advice}`;
}

const button = document.getElementById("btn");
button.addEventListener("click", request);
