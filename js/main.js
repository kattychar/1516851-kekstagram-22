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

const randomIndex = randomNumber(minIndex,maxIndex);
const randomUrl = randomNumber (minIndexUrl,maxIndexUrl);
const randomLikes = randomNumber (minLike,maxLike);
const randomId = randomNumber (minId,maxId);
const randomAvatar = randomNumber (minAvatar,maxAvatar);

let minIndex = 1;
let maxIndex = 25;
let minIndexUrl = 1;
let maxIndexUrl = 25;
let minLike = 15;
let maxLike = 200;
let minId = 1;
let maxId = 135;
let minAvatar = 1;
let maxAvatar = 6;


const getRandomArrayElement = (elements) => {
  return elements[randomNumber(0, elements.length - 1)];
};

const createDescription = () => {
  return {
    index: randomIndex,
    url: 'photos/' + `${randomUrl}`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: randomLikes,
    comments: new Array(SIMILAR_DESCRIPTION_COUNT).fill(null).map(() => createComments()),
  }
}

const createComments = () => {
  return {
    id: randomId,
    avatar: 'img/avatar-' + `${randomAvatar}` + '.svg',
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  }
}

const similarDescriptions = new Array(SIMILAR_DESCRIPTION_COUNT).fill(null).map(() => createDescription());
alert(similarDescriptions);
