// $ Mail
// $ Chiedi all'utente la sua email,
// $ controlla che sia nella lista di chi può accedere,
// $ stampa un messaggio appropriato sull'esito del controllo.

// # email pool
const emails = [
  "example@example.com",
  "janedoe456@mail.com",
  "user789@fakemail.com",
  "testemail001@domain.com",
  "sampleuser@samplemail.com",
  "randomperson99@nowhere.com",
  "exampleuser88@fakemailservice.com",
  "myemail567@fakeemail.com",
  "hello123@randommail.com",
  "testuser2024@email.com",
];

// # user data

const userMail = prompt("Inserisci il tuo indirizzo email");

const isUserMailValid = userMail.includes("@") && userMail.includes(".");

if (isUserMailValid) {
  let isMailFound = false;

  for (let i = 0; i < emails.length; i++) {
    const currentMail = emails[i];

    if (currentMail === userMail) {
      isMailFound = true;
    }

    if (isMailFound) {
      console.log("Email trovata");
    } else {
      console.log("Email non trovata");
    }
  }
} else {
  console.log("Email non valida");
}
