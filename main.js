/*
 
Descrizione:
fruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani! Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
Consigli del giorno:
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?

*/


// devo sapere l'ora e la data di oggi e domani
    // recupero ora con variabile
// dalla data e l'ora recuperare i secondi
// intervallo tra oggi e domani in millisecondi
// secondo deve decrementare fino a zero alle 9:30 di domani mattina 

// DATA OGGI
const dataOggi = new Date()
let secondiOggi = dataOggi.getSeconds()

// DATA DOMANI
const dataDomani = new Date("January 19, 2024 9:30:00")
let secondiDomani = dataDomani.getSeconds()

//Secondi mancanti tra oggi e domani trasformo millisecondi in secondi
let millisecMancanti = dataOggi - dataDomani;
let sec = Math.round(millisecMancanti/1000);

// cuntdown dinamico in Html
const countdown = setInterval(function(){
    
    if(sec === 0){
        clearInterval()
        alert("Sono le 9:30!")

    } else{
        sec++
        document.getElementById("text").innerHTML = sec * -1
    }

}, 1000)



