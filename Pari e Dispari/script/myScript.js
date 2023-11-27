// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri 
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// Scelta dell'utente
const choice = prompt('Scegli pari o dispari').toLowerCase();
const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));

console.log(choice);
console.log(userNumber);

// Funzione Generazione n. Random computer
function getComputerChoice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

computerNumber = getComputerChoice(1, 5);

console.log(computerNumber);

const sum = userNumber + computerNumber;

console.log(sum);

function determineWinner() {
  if (sum % 2 === 0 && choice === 'pari' || sum % 2 === 1 && choice === 'dispari') {
    return 'Hai Vinto!'
  } else {
    return 'Hai Perso'
  }
}

console.log(determineWinner());