/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

/*
Array form of quotes, with each have the following properties quote, author, year, and citation
*/
let Quotes = [
  {quote:"The greatest glory in living lies not in never falling, but in rising every time we fall", author: "Nelson Mandela", year:'',citation:""},
  {quote:"The way to get started is to quit talking and begin doing", author: "Walt Disney", year:'',citation:""},
  {quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", author: "Steve Jobs", year:'',citation:""},
  {quote:"Many of life's failures are people who did not realize how close they were to success when they gave up", author: "Thomas Edison", year:'',citation:""},
  {quote:"Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth", year:'',citation:""},
  {quote:"You only live once, but if you do it right, once is enough.", author: "Mae West", year:'',citation:""},
  {quote:"Try not to become a man of success. Rather become a man of value." , author: "Albert Einstein", year:'',citation:""},
  {quote:"If you are not willing to risk the usual, you will have to settle for the ordinary.", author: "Jim Rohn", year:'',citation:""},
  {quote:"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.", author: "Patrick McKenzie", year: 2016, citation:"Twitter"},
  {quote:"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.", author: "J.K. Rowling", year:2000,citation:"Harry Potter and the Goblet of Fire"},
  {quote:"Happiness can be found, even in the darkest of times, if one only remembers to turn on the light", author: "J.K. Rowling", year:'',citation:"Harry Potter and the Prisoner of Azkaban"},
  {quote:"I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.", author: "Dr. Seuss", year:'',citation:""}

]

/*
Return a random hexdecimal number use for the color value of the background
  use the # symbol to form the complete color number in javascript

*/
function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

/***
 * `getRandomQuote` function
***/

/***
 * Return a random quote from the array using the function random number 
 * and passing the length of the array as parameter 
***/
let randomQuote = function(arr) {
  let num = Math.floor(Math.random()*arr);
  return Quotes[num];
 
}



/***
 * `printQuote` function
***/

/***
 * Prints the selected quote by calling the randomQuote function
 * and verify which condition the quote if fullfiling to decide
 * which format should be printed
***/

function printQuote() {
  let quoteSelect = randomQuote(Quotes.length);
  document.body.style.backgroundColor = generateRandomColor()
  if (quoteSelect.year !== '' && quoteSelect.citation !== '') {
    document.querySelector('div').innerHTML = `
  <p class="quote">${quoteSelect.quote}</p>
  <p class="source">${quoteSelect.author}<span class="citation">${quoteSelect.citation}</span><span class="year">${quoteSelect.year}</span></p>
  `;
  }
  else if((quoteSelect.year === '' && quoteSelect.citation !== '')){
    document.querySelector('div').innerHTML = `
  <p class="quote">${quoteSelect.quote}</p>
  <p class="source">${quoteSelect.author}<span class="citation">${quoteSelect.citation}</span></p>
  `;
  }
  else {
    document.querySelector('div').innerHTML = `
  <p class="quote">${quoteSelect.quote}</p>
  <p class="source">${quoteSelect.author}</p>
  `;
  }

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);