function randomNumber (a, b) {
  if (a >= b) {
    console.log('Параметр а должен быть меньше b');
  } else {
  return Math.floor(Math.random() * (b -a + 1)) + a;
  }
}
console.log ('Ваше число ' + randomNumber (3, 10);
