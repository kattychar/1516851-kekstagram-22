function randomNumber (a, b) {
  if (a < 0 && b < 0) {
    alert ('Аргументы должны быть положительные');
  } else {
    if (a >= b) {
      alert('Параметр а должен быть меньше b');
    } else {
      return Math.floor(Math.random() * (b -a + 1)) + a;
    }
  }
}
randomNumber (3, 10);
//https://learn.javascript.ru/task/random-int-min-max

function check(str, maxLength) {
  if(maxLength <= 0) {
    alert ('Максимальная длина строки введена некорректно, исправьте пожалуйста')
  } else {
    if (str.length <= maxLength) {
      return str;
    } else {
      alert('Сообщение превышает максимальную длину в ' + maxLength + ' символов');
    }
  }
}
check('Hello',5);
//https://learn.javascript.ru/string
