function randomNumber (a, b) {
  if (a >= b) {
    //console.log('Параметр а должен быть меньше b');
  } else {
    return Math.floor(Math.random() * (b -a + 1)) + a;
  }
}

randomNumber (3, 10);
