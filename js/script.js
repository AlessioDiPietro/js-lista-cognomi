// Mail

// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// Chiedi all’utente la sua email:
var emailUser = prompt("inserisci qui la TUA EMAIL");
console.log ("email inserita: ", emailUser);

// controlla che sia nella lista di chi può accedere:
var emailList = ["pinko.pallino@email.it", "panko.pallino@email.it", "pippo.pallino@email.it", "pluto.pallino@email.it"];


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