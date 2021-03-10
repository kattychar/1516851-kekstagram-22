import {similarDescriptions} from './data.js';

const bigPicture = document.querySelector('.big-picture');
bigPicture.classList.remove('hidden');
const img = document.querySelector('.big-picture__img');
const likes = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const picDescription = document.querySelector('.social__caption');


const generationBigPictures = similarDescriptions();

generationBigPictures.forEach((bigPicture) => {
  img.src = bigPicture.url;
  likes.textContent = bigPicture.likes;
  commentsCount.textContent = bigPicture.comments.length;
  picDescription.textContent = bigPicture.description;
})
