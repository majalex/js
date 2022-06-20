let num1 = 2;
let num2 = 5;

function value(num1, num2) {
    if (num1 > num2) {
        return(num1)
    } else if (num1 < num2) {
        return(num2)
    } else {
        return('Liczby są równe');
    }
}

console.log(value(num1,num2));