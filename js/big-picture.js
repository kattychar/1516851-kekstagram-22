import {isEscEvent} from './util.js';
import {generationPictures} from './pictures-miniature.js';

const bigPicture = document.querySelector('.big-picture');
const img = document.querySelector('.big-picture__img img');
const likes = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const allComments = document.querySelector('.social__comments');
const commentsCountBlock = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const picDescription = document.querySelector('.social__caption');
const bodyElement = document.querySelector('body');
const commentTemplate = document.querySelector('#comment')
  .content
  .querySelector('.social__comment');
const cancelButton = document.querySelector('.cancel');

const clearDefaultComments = () => {
  allComments.innerHTML = '';
}

function createComment(commentData) {
  let comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = commentData.avatar;
  comment.querySelector('.social__picture').alt = commentData.name;
  comment.querySelector('.social__text').textContent = commentData.message;
  return comment;
}

function createComments (comments) {
  const commentFragment = document.createDocumentFragment();

  comments.forEach(element => {
    commentFragment.appendChild(createComment(element))
  });

  allComments.appendChild(commentFragment);
}

function renderBigPicture () {
  for (let i = 0; i < generationPictures.length; i++) {
    let bigPictureData = generationPictures[i];
    img.src = bigPictureData.url;
    likes.textContent = bigPictureData.likes;
    commentsCount.textContent = bigPictureData.comments.length;
    picDescription.textContent = bigPictureData.description;

    if (bigPictureData.comments.length > 0) {
      clearDefaultComments();
      createComments(bigPictureData.comments);
    }
  }
}

//функция открывает большую версию фотографии
function openBigPicture () {
  bigPicture.classList.remove('hidden');
  bodyElement.classList.add('.modal-open');
  commentsCountBlock.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  renderBigPicture ();
  cancelButton.addEventListener('click',onCancelButtonClick);
  document.addEventListener('keydown', onPopupEscKeydown);
}

//закрывает pop-up с большой фотографией при нажатии на кнопку cancel
function closeBigPicture () {
  bigPicture.classList.add ('hidden');
  bodyElement.classList.remove('.modal-open');
  commentsCountBlock.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  cancelButton.removeEventListener('click',onCancelButtonClick);
  document.removeEventListener('keydown', onPopupEscKeydown);
}

//bigPicture.classList.remove('hidden');

function onCancelButtonClick () {
  closeBigPicture();
}

function onPopupEscKeydown (evt) {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

function clickOnSmallPicture (evt) {
  if (evt.target.classList.contains('picture__img')) {
    openBigPicture();
  }
}
