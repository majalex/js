let paragraph = document.getElementById("opis");
let button = document.querySelector('button');

button.onclick = function() {
    paragraph.textContent = 'Dowolny tekst - opis produktu.';
}