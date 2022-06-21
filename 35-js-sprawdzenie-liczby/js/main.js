let randomNumber = Math.floor(Math.random() * 301);

function number(n) {
    if (n >= 100 && n <= 200) {
        return('Liczba znajduje się w przedziale');
    } else {
        return('Liczba nie znajduje się w przedziale');
    }
}

console.log(randomNumber);
console.log(number(randomNumber));