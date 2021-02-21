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
  let lengthResult = true;

  if (maxLength <= 0) {
    alert ('Максимальная длина строки не может быть меньше или равна 0, исправьте пожалуйста')
  }

  if (str.length > maxLength) {
    lengthResult = false;
  }

  return lengthResult;
}
checkCommentLength('Hello',5);

//Массив обьектов- описание фотографий
const SIMILAR_DESCRIPTION_COUNT = 25;

const DESCRIPTION = [
  'Мир должен видеть,что я ем',
  'Здесь все: Котя Метелкин, Дюша и Матроскин',
  'Твоя киска сьела бы вискас',
  'Спать по 20 часов бесценно',
  'Серпантин такой красивый, я срочно должен его попробовать на вкус',
]

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
]

const NAMES = [
  'Анфиса',
  'Кэтти',
  'Сильвестр',
  'Степан',
  'Клеопатра',
]

const randomIndex (minIndex,maxIndex);
const randomUrl (minIndexUrl,maxIndexUrl);
const randomLikes (minLike,maxLike);
const randomId (minId,maxId);
const randomAvatar (minAvatar,maxAvatar);

const getRandomArrayElement = (elements) => {
  return elements[_.randomNumber(0, elements.length - 1)];
};

const createDescription = () => {
  //const comments = new Array(SIMILAR_DISCRIPTION_COUNT).fill(null).map(() => createComments());
  return {
    index: randomNumber(randomIndex(1,25));
    url: "photos/" + `${randomNumber(randomUrl(1,25))}`;
    description: getRandomArrayElement(DESCRIPTION);
    likes: randomNumber(randomLikes(15,200));
    comments: new Array(SIMILAR_DESCRIPTION_COUNT).fill(null).map(() => createComments());
  }
}

const createComments = () => {
  return {
    id: randomNumber(randomId(1,135));
    avatar: 'img/avatar-' + `${randomNumber(randomAvatar(1,6))}` + '.svg';
    message: getRandomArrayElement(MESSAGES);
    name: getRandomArrayElement(NAMES);
  }
}

const similarDiscriptions = new Array(SIMILAR_DESCRIPTION_COUNT).fill(null).map(() => createDiscription());
console.log(similarDescriptions);
