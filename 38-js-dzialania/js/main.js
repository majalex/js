function calculator(num1, num2) {
  let add = num1 + num2;
  let subtraction = num1 - num2;
  let multiply = num1 * num2;

  if (add >= 0) {
    console.log(`1. Wynik dodawania wynosi: ${add}`);
    // console.log("1. Wynik dodawania wynosi: " + add);
  } else {
    console.log("1. Wynik jest nieprawidłowy!");
  }

  if (subtraction >= 0) {
    console.log(`2. Wynik odejmowania wynosi: ${subtraction}`);
    // console.log("1. Wynik dodawania wynosi: " + add);
  } else {
    console.log("2. Wynik jest nieprawidłowy!");
  }

  if (multiply >= 0) {
    console.log(`3. Wynik mnożenia wynosi: ${multiply}`);
    // console.log("1. Wynik dodawania wynosi: " + add);
  } else {
    console.log(" Wynik jest nieprawidłowy!");
  }
}
  calculator(3, 8);