//https://learn.javascript.ru/task/random-int-min-max
function randomNumber (min, max) {
  if ((min < 0 || max < 0)||(min >= max)) {
    alert ('Аргументы должны быть положительные, параметр min должен быть меньше max ');
  } else {
    return Math.floor(Math.random() * (max -min + 1)) + min;
  }
}
randomNumber (3, 10);

//https://learn.javascript.ru/string
//а так сама сделала
function checkCommentLength(str, maxLength) {
  let LengthResult = true;

  if (maxLength <= 0) {
    alert ('Максимальная длина строки не может быть меньше или равна 0, исправьте пожалуйста')
  }

  if (str.length > maxLength) {
    LengthResult = false;
  }

  return LengthResult;
}
checkCommentLength('Hello',5);
