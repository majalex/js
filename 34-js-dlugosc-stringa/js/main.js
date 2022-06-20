let txt1 = 'Uwielbiam JavaScript';
let txt2 = "Jestem świetnym programistą";


function longerTxt(a, b) {
    if (a.length > b.length) {
        return a;
    } else if (a.length < b.length) {
        return b;
    }
}

console.log(longerTxt(txt1, txt2));