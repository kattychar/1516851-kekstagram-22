function Number (a, b) {
  if (a >= b) {
    console.log('Параметр а должен быть меньше b');
  } else {
    return Math.floor(Math.random() * (b -a + 1)) + a;
  }
}

console.log('Ваше число ' + Number (3, 10));
