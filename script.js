const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// let apiQuotes = [];  // works with async func below to fetch remote api quotes

// Show New Quote
function newQuote() {
    loading();
// Pick a random quote from apiQuotes array
// need to chg local Quotes below to apiQuotes - if using with async func below / remote api
const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
// check if Author field is blank and replace it with 'Anonymous'
if (!quote.author) {
    authorText.textContent = 'GT Wilson';
} else {
    authorText.textContent = quote.author;

}

// Check Quote Length to determine styling
if (quote.text.length > 80) {
    quoteText.classList.add('long-quote');
} else {
    quoteText.classList.remove('long-quote');
}

quoteText.textContent = quote.text;
complete();

}

// Get Quotes From API
// async function getQuotes() {
//     const apiUrl = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error) {
//         // Catch Error Here
//     }
// }

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}



// Event Listiners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);




// On Load
// getQuotes(); // works with async func above to fetch remote api quotes

newQuote();
