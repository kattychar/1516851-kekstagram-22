import {generationPictures} from './pictures-miniature.js';

const bigPicture = document.querySelector('.big-picture');
const img = document.querySelector('.big-picture__img img');
const likes = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const allComments = document.querySelector('.social__comments');
const commentsCountBlock = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const picDescription = document.querySelector('.social__caption');
const body = document.querySelector('body');
const commentTemplate = document.querySelector('#comment')
  .content
  .querySelector('.social__comment');
const cancelButton = document.querySelector('.big-picture__cancel');

document.querySelector('.social__comments').innerHTML = '';

function makeComment(commentData) {
  let comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = commentData.avatar;
  comment.querySelector('.social__picture').alt = commentData.name;
  comment.querySelector('.social__text').textContent = commentData.message;
  return comment;
}

function makeComments (comments) {
  const commentFragment = document.createDocumentFragment();

  comments.forEach(element => {
    commentFragment.appendChild(makeComment(element))
  });

  allComments.appendChild(commentFragment);
}

for (let i = 0; i < generationPictures.length; i++) {
  const bigPictureData = generationPictures[i];
  img.src = bigPictureData.url;
  likes.textContent = bigPictureData.likes;
  commentsCount.textContent = bigPictureData.comments.length;
  picDescription.textContent = bigPictureData.description;
  if (bigPictureData.comments.length > 0) {
    makeComments(bigPictureData.comments);
  }
}

function openBigPicture () {
  bigPicture.classList.remove('hidden');
  commentsCountBlock.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('.modal-open');
}

function closeBigPicture () {
  bigPicture.classList.add ('hidden');
  body.classList.remove('.modal-open');
}
