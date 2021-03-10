import {similarDescriptions} from './data.js';

//Контейнер для pictures
const picturesElements = document.querySelector('.pictures');

//Получаем шаблон миниатюры
const picturesTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const generationPictures = similarDescriptions();

const picturesFragment = document.createDocumentFragment();

generationPictures.forEach(({url, likes, comments}) => {
  const picElement = picturesTemplate.cloneNode(true);
  picElement.querySelector('.picture__img').src = url;
  picElement.querySelector('.picture__likes').textContent = likes;
  picElement.querySelector('.picture__comments').textContent = comments.length;
  picturesFragment.appendChild(picElement);
});

picturesElements.appendChild(picturesFragment);
