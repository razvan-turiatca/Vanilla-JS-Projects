const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

let quotes = []

const showLoadingSpinner = () => {
  loader.hidden = false
  quoteContainer.hidden = true
}

const removeLoadingSpinner = () => {
  quoteContainer.hidden = false
  loader.hidden = true
}

// show new quote
const newQuote = () => {
  //pick a random quote from quotes
  const randomNumber = Math.floor(Math.random() * quotes.length)

  const quote = quotes[randomNumber]

  //check if Author field is blank and replace it with "Unknown"
  authorText.innerText = quote.author || 'Unknown'

  // Check the quote length to determine the styling

  quote.text.length > 100
    ? quoteText.classList.add('long-quote')
    : quoteText.classList.remove('long-quote')

  // Set quote, hide loader

  quoteText.innerText = quote.text
  removeLoadingSpinner()
}

// Get quotes from API

const getQuotes = async () => {
  showLoadingSpinner()
  const apiUrl = 'https://type.fit/api/quotes'

  try {
    const response = await fetch(apiUrl)
    quotes = await response.json()
    newQuote()
  } catch (err) {
    console.log(err)
  }
}

// Tweet a quote

const tweetQuote = () => {
  const twitterUrl = `http://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
  window.open(twitterUrl, '_blank')
}

// event listeners

twitterBtn.addEventListener('click', tweetQuote)

newQuoteBtn.addEventListener('click', newQuote)

// on load
getQuotes()
