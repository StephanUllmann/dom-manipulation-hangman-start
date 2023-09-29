// Imports and global variables - leave them as they are
import { words, getLetterIndexes, getRandomWord } from './utils/utils.js';
let currentWord = getRandomWord();
let hangmanPart, points, lettersToGo, playing;

/**
 * ! START HERE
 * * Selecting elements from the DOM
 * TODO | Select the form to get a new typed in word
 * TODO | form class="new-word__form"
 */

/**
 * TODO | Select this button to randomly select a new word
 * TODO | button id="random-word-btn"
 */

/**
 * TODO | Select this input to get the player's name
 * TODO | input name="player-name"
 */

/**
 * TODO | Select this span to control the points
 * TODO | <span class="points__num">26</span>
 */

/**
 * TODO | Select this container to insert the hangman parts later on
 * TODO | <section class="hangman__container">
 */

/**
 * TODO | This container to insert the missing and found letters later on
 * TODO | <section class="word__container">
 */

/**
 * TODO | Somehow something from these to get the letter
 * TODO | <section class="keyboard__container">
 * TODO | <button class="btn--letter"><span>q</span></button>
 * TODO | <button class="btn--letter strikeout"><span>e</span></button>
 */

/**
 * * Doing something with the elements
 *
 * * Display "spaces" for the currentWord inside the wordContainer
 * TODO | Create and show <div class="word__letter--container"><span class="word__letter"></span></div>
 * TODO | per letter in currentWord
 */

function renderCurrentWord() {
  // loop over currentWord
  // create the div and add the css classes
  // "word__letter--container" on every,
  // "word__letter--space" only on whitespaces
  //
  // create span, add css and insert into div
  // insert the div into wordContainer
}
/**
 * TODO | actually call the function 😊
 */

/**
 * * Making the UI interactive
 *
 * TODO | add event listener(s) to get a letter on click
 */

/**
 * TODO | write the event handler function for the letter click (as ES5 function expressions)
 * TODO | get letter indexes on keyboard click
 */

function handleKeyboardClick(e) {
  if (!playing) return;
  // get the button from the event (e)
  // return early if invalid
  // get the letter from the button
  const indexes = getLetterIndexes(letter, currentWord);
  // add css class "strikeout" to the button
  // disable the button
  if (indexes.length === 0) insertHangman();
  else insertLetter(indexes);
}
// ! OR
function handleLetterClick(e) {
  if (!playing) return;
  // get the button from the event (e)
  // return early if invalid
  // get the letter from the button
  const indexes = getLetterIndexes(letter, currentWord);
  // add css class "strikeout" to the button
  // disable the button
  if (indexes.length === 0) insertHangman();
  else insertLetter(indexes);
}

/**
 * TODO | display the correct letter in it's place
 */

function insertLetter(foundIndexes) {
  foundIndexes.forEach((foundIndex) => {
    // change the textContent of the "letter space" to the letter in our currentWord
    lettersToGo -= 1;
  });
  if (lettersToGo === 0) endGame('won');
}

/**
 * TODO | display the next part of the hangman (consider the variable hangmanPart)
 */

function insertHangman() {
  // prepare the new DOM node as template literal and insert the current hangmanPart

  // insert the prepared markup into the hangmanContainer

  points--;
  // (later) send Event

  hangmanPart++;
  if (hangmanPart > 10) endGame('lost');
}

/**
 * TODO | Display Win / Loose Status
 */

function endGame(status) {
  playing = false;
  // get the right <template> from the document depending on the status param
  // clone the template
  // append the clone to the hangmanContainer

  if (status === 'won') {
    hangmanContainer.querySelector('.points__num--won').textContent = points;
  }
}

/**
 * * Getting values from forms
 *  TODO | get new word from form
 */

newWordForm.addEventListener('submit', (e) => {
  // in (almost) every form...
  //
  // get the value from the input element (traversing the tree, querying or accessing the form elements)
  //
  words.push(newWord);
  currentWord = newWord;
  start();
});

/**
 * * Simple button handling
 * TODO | get random word from the words array
 */

/**
 * TODO | Add an event listener on the "light" button, to toggle
 * TODO | the .light css class on the body element
 */

/**
 * * re/starting the game
 */

function start() {
  // clear wordContainer
  // remove won/lost and hangmanParts
  // remove .strikeout css class and disabled property from every letter btn

  // render freshly
  renderCurrentWord();
  resetValues();
}

start();

/**
 * ? optional - declaring and listening for custom Events
 * ? TODO  | declare a new Event "decrementpoints"
 * ? TODO | Listen for custom event and decrement points
 */

/**
 * ! THE END - Thank you for your attention
 * * go ahead, play with the code, refactor, restructure...
 *
 *
 * leave that here ⬇️
 */

function resetValues() {
  hangmanPart = 0;
  points = 11;
  lettersToGo = currentWord.replaceAll(' ', '').length;
  playing = true;
  pointsEl.textContent = points;
}
