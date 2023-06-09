// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

// *****************************************************************************************************
// MAIL
function controlloEmail(){
    let inputValue = document.getElementById('inputEmail').value

    let arrayEmails = [
        'email1@gmail.com',
        'email2@gmail.com',
        'email3@gmail.com',
        'email4@gmail.com',
    ]

    let soldatino = false;
    
    for(let i = 0; i < arrayEmails.length; i++){
        if(arrayEmails[i] == inputValue){
            soldatino = true
        }
    }

    if(soldatino == true){
        document.writeln("L'email che hai scritto è presente")
    }else{
        document.writeln("L'email che hai scritto NON è presente, REGISTRATI")

    }

}
// ******************************************************************************************************
// DADI
function randomNumber(max,min){
    return Math.floor( Math.random() * max ) + min

}

function gioca(){
    let cpu = randomNumber(6,1)
    let persona = randomNumber(6,1)

    if( cpu > persona){
        document.writeln('la cpu ha vinto')
    }else if(persona > cpu){
        document.writeln('la persona ha vinto')
    }else{
        document.writeln('pareggio')
    }

}