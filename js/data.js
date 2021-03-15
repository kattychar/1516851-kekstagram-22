import {randomNumber} from './util.js';

//Массив обьектов- описание фотографий
const SIMILAR_DESCRIPTION_COUNT = 25;
const SIMILAR_COMMENTS_COUNT = 1;

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

const MIN_INDEX = 1;
const MAX_INDEX = 25;
const MIN_LIKE = 15;
const MAX_LIKE = 200;
const MIN_ID = 1;
const MAX_ID = 135;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;

const getRandomArrayElement = (elements) => {
  return elements[randomNumber(0, elements.length - 1)];
};

const createDescription = (randomUrl) => {
  const randomIndex = randomNumber(MIN_INDEX, MAX_INDEX);
  const randomLikes = randomNumber (MIN_LIKE, MAX_LIKE);

  return {
    index: randomIndex,
    url: `photos/${randomUrl+1}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: randomLikes,
    comments: new Array(SIMILAR_COMMENTS_COUNT).fill(null).map(() => createComments()),
  }
}

const createComments = () => {
  const randomId = randomNumber (MIN_ID, MAX_ID);
  const randomAvatar = randomNumber (MIN_AVATAR, MAX_AVATAR);

  return {
    id: randomId,
    avatar: `img/avatar-${randomAvatar}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  }
}

function similarDescriptions (elementCount) {
  let arr = new Array(elementCount).fill(null).map((item,randomUrl) => createDescription(randomUrl));
  return arr;
}
similarDescriptions(SIMILAR_DESCRIPTION_COUNT);

//alert (similarDescriptions);
//console.log(similarDescriptions);

export {similarDescriptions, SIMILAR_DESCRIPTION_COUNT};
