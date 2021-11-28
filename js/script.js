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
let Quotes = [
  {quote:"The greatest glory in living lies not in never falling, but in rising every time we fall", author: "Nelson Mandela", year:'',citation:""},
  {quote:"The way to get started is to quit talking and begin doing", author: "Walt Disney", year:'',citation:""},
  {quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", author: "Steve Jobs", year:'',citation:""},
  {quote:"Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas Edison", year:'',citation:""},
  {quote:"Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth", year:'',citation:""},
  {quote:"You only live once, but if you do it right, once is enough.", author: "Mae West", year:'',citation:""},
  {quote:"Try not to become a man of success. Rather become a man of value." , author: "Albert Einstein", year:'',citation:""},
  {quote:"If you are not willing to risk the usual, you will have to settle for the ordinary.", author: "Jim Rohn", year:'',citation:""},
  {quote:"Natasha", author: "Natasha", year: 20, citation:"En la casa"},
  {quote:"Tatiana", author: "Tatiana", year:'',citation:""},
  {quote:"Vanessa", author: "Vanessa", year:'',citation:""},
  {quote:"Juan", author: "Juan", year:'',citation:""}

]


/***
 * `getRandomQuote` function
***/

let randomQuote = function(arr) {
  let num = Math.floor(Math.random()*arr);
  //quoteSelect = Quotes[num];
  return Quotes[num];
}



/***
 * `printQuote` function
***/


function printQuote() {
  let quoteSelect = randomQuote(Quotes.length);
  if (quoteSelect.year !== '' && quoteSelect.citation !== '') {
    document.querySelector('div').innerHTML = `
  <p class="quote">${quoteSelect.quote}</p>
  <p class="source">${quoteSelect.author}<span class="citation">${quoteSelect.citation}</span><span class="year">${quoteSelect.year}</span></p>
  `;
  }
  else{
    document.querySelector('div').innerHTML = `
  <p class="quote">${quoteSelect.quote}</p>
  <p class="source">${quoteSelect.author}</p>
  `;
  }
  
  //document.querySelector('p').innerText = `${quoteSelect.author}`
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);