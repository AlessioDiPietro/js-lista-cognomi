// Mail

// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// Chiedi all’utente la sua email:
var emailUser = prompt("inserisci qui la TUA EMAIL");
console.log ("email inserita: ", emailUser);

// controlla che sia nella lista di chi può accedere:
var emailList = ["pinko.pallino@email.it", "panko.pallino@email.it", "pippo.pallino@email.it", "pluto.pallino@email.it"];

// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
for (i = 0; i < emailList.length; i++) {

    if (emailUser != emailList[i]) {
        console.log(emailUser, " : Mi Dispiace, qualcosa è andato storto");
        document.getElementById("esito_login").innerHTML = "\"" + emailUser + "\"" + " Mi Dispiace, qualcosa è andato storto :("
        
    }
    else {
        console.log("BENTORNATO!");
        document.getElementById("esito_login").innerHTML = "CIAO!  \"" + emailUser + "\"  BENTORNATO!"
        break;
    }
}



// Lista Cognomi:
// chiedi all’utente il cognome
// inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova


// chiedi all’utente il cognome
var userSurname = prompt("inserisci qui il TUO COGNOME");
console.log ("Cognome inserito: ", userSurname);

// inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var surnameList = ["bianchi", "neri", "rossi", "verdi","gialli"];
surnameList.push(userSurname);

// stampa la lista ordinata alfabeticamente
console.log(surnameList.sort()) ;
document.getElementById("user_surname_list").innerHTML = "--x " + surnameList.sort() + " x--";

