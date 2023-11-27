// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri 
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// Scelta dell'utente
const choice = document.getElementById('user-choice');
const userNumber = document.getElementById('user-number');

// Bottone Play
const play = document.getElementById('play');

let winCount = 0;

let gameCount = 0;

play.addEventListener('click', function() {

  const choiceOutput = choice.value.toLowerCase();
  const userNumberOutput = parseInt(userNumber.value);

  // Funzione Generazione n. Random computer
  function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  let computerNumber = getComputerChoice(1, 5);
  
  const sum = userNumberOutput + computerNumber;

  function determineWinner() {
    gameCount++
    if (sum % 2 === 0 && choiceOutput === 'pari' || sum % 2 === 1 && choiceOutput === 'dispari') {
      winCount++;
      return 'Hai Vinto!'
    } else {
      return 'Hai Perso'
    }
  }
  
  document.getElementById('choice-output').innerHTML = `Hai scelto: ${choiceOutput}`;
  document.getElementById('user-number-output').innerHTML = `Hai scelto il numero: ${userNumberOutput}`;
  document.getElementById('computer-number-output').innerHTML = `Il computer ha scelto il numero: ${computerNumber}`;
  document.getElementById('total').innerHTML = `Il totale è: ${sum}`;
  document.getElementById('winner').innerHTML = determineWinner();
  document.getElementById('win-count').innerHTML = `Vittorie: ${winCount} su ${gameCount}`;
})



