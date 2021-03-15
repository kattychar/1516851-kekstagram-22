//import {similarDescriptions} from './data.js';
import {generationPictures} from './pictures-miniature.js';

const bigPicture = document.querySelector('.big-picture');
const img = document.querySelector('.big-picture__img img');
const likes = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const allComments = document.querySelector('.social__comments');
//const commentsCountBlock = document.querySelector('.social__comment-count');
//const commentsLoader = document.querySelector('.comments-loader');
const picDescription = document.querySelector('.social__caption');
//const body = document.querySelector('body');
const commentTemplate = document.querySelector('#comment')
  .content
  .querySelector('.social__comment');
//const cancelButton = document.querySelector('.big-picture__cancel');

bigPicture.classList.remove('hidden');

document.querySelector('.social__comments').innerHTML = '';

const bigPictureData = generationPictures[5];
img.src = bigPictureData.url;
likes.textContent = bigPictureData.likes;
commentsCount.textContent = bigPictureData.comments.length;
picDescription.textContent = bigPictureData.description;

const commentFragment = document.createDocumentFragment();

generationPictures.forEach(({avatar, name, message}) => {
  let comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;
  commentFragment.appendChild(comment);
})

allComments.appendChild(commentFragment);

/*function openBigPicture () {
  bigPicture.classList.remove('hidden');
  commentsCountBlock.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('.modal-open');
}

function closeBigPicture () {
  bigPicture.classList.add ('hidden');
  body.classList.remove('.modal-open');
}

cancelButton.addEventListener('click', function() {
  closeBigPicture();
})*/
