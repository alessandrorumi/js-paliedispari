// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri 
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// Scelta dell'utente
const choice = document.getElementById('user-choice');
const userNumber = document.getElementById('user-number');

// Bottone Play
const play = document.getElementById('play');

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
    if (sum % 2 === 0 && choiceOutput === 'pari' || sum % 2 === 1 && choiceOutput === 'dispari') {
      return 'Hai Vinto!'
    } else {
      return 'Hai Perso'
    }
  }
  
})



