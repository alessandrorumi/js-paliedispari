// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri 
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// Scelta dell'utente
const choice = prompt('Scegli pari o dispari');
const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));

console.log(choice);
console.log(userNumber);

// Funzione Generazione n. Random computer
function getComputerChoice(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

console.log(getComputerChoice(1, 5));