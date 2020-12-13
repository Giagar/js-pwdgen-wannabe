// Dati utente
var name = prompt("Username: ");

if (name === "Paolo") {
    var password = prompt("Password: ");
    if(password === "140") {
        //display the page
        alert("Welcome back!")
    } else {
        alert("Wrong answer!")
    }
} else {
    alert("Wrong answer!")
}