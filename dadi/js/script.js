// $ Gioco dei dadi
// $ Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// $ Stabilire il vincitore, in base a chi fa il punteggio più alto.

const userNum = Math.floor(Math.random() * 6 + 1);
console.log(userNum);

const computerNum = Math.floor(Math.random() * 6 + 1);
console.log(computerNum);

if (userNum > computerNum) {
  console.log("User wins");
} else if (userNum === computerNum) {
  console.log("It's a draw");
} else {
  console.log("Computer wins");
}
