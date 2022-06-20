paragraph = document.getElementById("opis");
button = document.querySelector('button');

button.onclick = function() {
    paragraph.textContent = 'Dowolny tekst - opis produktu.';
}