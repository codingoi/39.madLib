// Grab values from the submitted form in the URL
const words = new URLSearchParams(window.location.search);

// Cleans up and capitalizes the variables (parameters from the query string)
function cleanAndCap (str){
  if(!str) return null
  let temp = str.trim()
  return temp[0].toUpperCase() + temp.substring(1)
}

// Assigning the variables with values used in the story

//Nouns
const noun1 = cleanAndCap(words.get('noun-1'));
const noun2 = cleanAndCap(words.get('noun-2'));
const noun3 = cleanAndCap(words.get('noun-3'));
const noun4 = cleanAndCap(words.get('noun-4'));
const noun5 = cleanAndCap(words.get('noun-5'));


//Adjectives
const adj1 = cleanAndCap(words.get('adj-1'));
const adj2 = cleanAndCap(words.get('adj-2'));
const adj3 = cleanAndCap(words.get('adj-3'));

//Adverb
const adv1 = cleanAndCap(words.get('adv-1'));

//Verbs
const verb1 = cleanAndCap(words.get('verb-1'));
const verb2 = cleanAndCap(words.get('verb-2'));
const verb3 = cleanAndCap(words.get('verb-3'));

//Other
const answer = cleanAndCap(words.get('answer'));
const num1 = cleanAndCap(words.get('num-1'));
const quote = cleanAndCap(words.get('quote'));
const speed = cleanAndCap(words.get('speed'));



// The string containing HTML and text which will populate the story.html page
const story = `<p>There have been many attempts at creating a digital currency during the 90s tech boom, with systems like Flooz, <span class="word" title="id: noun-1">${noun1}</span> and DigiCash emerging on the market but inevitably failing. There were many different reasons for their failures, such as <span class="word" title="id: verb-1">${verb1}</span>, financial problems and even frictions between employees and their <span class="word" title="id: noun-2">${noun2}</span>.</p>

<p>Notably, all of those systems utilized a Trusted Third Party approach, meaning that the companies behind them <span class="word" title="id: verb-2">${verb2}</span> and <span class="word" title="id: verb-3">${verb3}</span> the transactions. Due to the failures of these companies, the creation of a digital cash system was seen as a <span class="word" title="id: adj-1">${adj1}</span> <span class="word" title="id: noun-3">${noun3}</span> for a long while.</p>

<p>Then, in early 2009, a <span class="word" title="id: adj-2">${adj2}</span> programmer or a group of programmers under an alias Satoshi Nakamoto introduced Bitcoin. Satoshi described it as a <span class="word" title="id: adv-1">${adv1}</span> <span class="word" title="id: adj-3">${adj3}</span> cash system. It is completely decentralized, meaning there are no <span class="word" title="id: noun-4">${noun4}</span> involved and no central controlling authority. The concept closely resembles peer-to-peer networks for <span class="word" title="id: noun-5">${noun5}</span> sharing.</p>

<p>Are you currently investing in cryptocurrency? <span class="word" title="id: answer">${answer}!</span></p>

<p>Prediction: In a few years you will own <span class="word" title="id: num-1">${num1}</span> shares of cryptocurrency. You might accumulate them at a <span class="word" title="id: speed">${speed}</span> than your peers.</p>`
;


// Grabbing the title element
const title = document.getElementById('title');
// Populating the title element with text
title.innerHTML = `The History of Cryptocurrency</span>`;

// Grabbing the story element
const storyEl = document.getElementById('story');
// Populating the story element with the value of the story variable
storyEl.innerHTML = story;

// Grabbing the moral-message element
const moralMessage = document.getElementById('moral-message');
// Populating the moral-message element with text
moralMessage.innerHTML = `<p>Just Remember: <span class="word" title="id: quote">${quote}</span></p>`;
