// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Creazione funzione
function checkPalindrome(word) {
  
  // Dichiarazione parola (al contrario)
  let reverseWord = '';

  // Iterazione lettere parola (al contrario)
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
  
  // Comparazione 'word' e 'reverseWord'
  if (reverseWord === word) {
    return true;
  
  } else {
    return false;
  }

}

console.log(checkPalindrome('itopinonavevanonipoti'));
// Dovrebbe stampare 'true';

console.log(checkPalindrome('panino'));
// Dovrebbe stampare 'false';