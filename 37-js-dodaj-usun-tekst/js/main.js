let paragraph = document.getElementById("tekst");
let show = document.getElementById("dodaj");
let hide = document.getElementById("usuń");

show.onclick = function() {
    paragraph.textContent = 'Dowolny tekst - opis produktu.';
}

hide.onclick = function () {
    paragraph.textContent = '';
}
