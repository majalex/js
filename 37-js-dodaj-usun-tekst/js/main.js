paragraph = document.getElementById("tekst");
show = document.getElementById("dodaj");
hide = document.getElementById("usuń");

show.onclick = function() {
    paragraph.textContent = 'Dowolny tekst - opis produktu.';
}

hide.onclick = function () {
    paragraph.textContent = '';
}
