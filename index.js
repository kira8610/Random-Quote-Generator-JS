const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "In the end, we only regret the chances we didn't take. - Lewis Carroll",
    "The best way to predict the future is to create it. - Peter Drucker"
];

const quoteDisplay = document.getElementById("quoteDisplay");

function quoteGenerator(){
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.textContent = `${randomQuote}`;
}