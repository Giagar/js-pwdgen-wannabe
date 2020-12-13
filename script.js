// Acquisizione informazioni
var nome = prompt("Qual è il tuo nome?");
var cognome = prompt("Qual è il tuo cognome?");
var colore = prompt("Qual è il tuo coloro preferito?");
var dataAttuale = new Date().getFullYear();

// Generatore di password
var risultato = nome + cognome + colore + dataAttuale;

// Password su html
document.getElementById("password").innerText = risultato;
