function isNegative(number) {
    if (Math.sign(number) === 1) {
        return number;
    } else {
        return(" wynik jest nieprawidłowy!");
    }
}
function add(num1, num2) {
    let result = num1 + num2;
    return result;
  }
function subtraction(num1, num2) {
    let result = num1 - num2;
    return result;
  }
function multiply(num1, num2) {
    let result = num1 * num2;
    isNegative(result);

  }

console.log("1. Wynik dodawania wynosi:", add(5, 7));
console.log("2. Wynik odejmowania wynosi:", subtraction(5, 7));
console.log("3. Wynik mnożenia wynosi:", multiply(5, -7));