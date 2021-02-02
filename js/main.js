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
  if(maxLength <= 0) {
    alert ('Максимальная длина строки введена некорректно, исправьте пожалуйста')
  } else {
    if (str.length <= maxLength) {
      return true;
    } else {
      return false;
      //alert('Сообщение превышает максимальную длину в ' + maxLength + ' символов');
    }
  }
}
checkCommentLength('Hello',5);
