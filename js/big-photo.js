import {photosData} from './data';
import {isEscapeKey} from './utils';

const body = document.querySelector('body');
const pictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const commentsList = bigPicture.querySelector('.social__comments');
const commentTemplate = bigPicture.querySelector('.social__comment');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentLoader = bigPicture.querySelector('.comments-loader');
const buttonBigPictureClose = bigPicture.querySelector('.big-picture__cancel');

const renderComment = ({avatar, name, message}) => {
  const commentElement = commentTemplate.cloneNode(true);
  commentElement.querySelector('.social__picture').src = avatar;
  commentElement.querySelector('.social__picture').alt = name;
  commentElement.querySelector('.social__text').textContent = message;

  return commentElement;
};


const commentsShow = (elements) => {
  commentsList.innerHTML = '';

  const listCommentsFragment = document.createDocumentFragment();
  elements.forEach((element) => {
    const commentElement = renderComment(element);
    listCommentsFragment.append(commentElement);
  });

  commentsList.append(listCommentsFragment);
};

const BigPictureShow = ({url, likes, comments, description}) => {
  bigPicture.querySelector('.big-picture__img img').src = `photos/${url}`;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__comment-shown-count').textContent = comments.length;
  bigPicture.querySelector('.social__comment-total-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;

  return bigPicture;
};

const onDocumentKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhono();
  }
};

function openBigPhoto () {
  bigPicture.classList.remove('hidden');
  commentCount.classList.add('hidden');
  commentLoader.classList.add('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeyDown);
}

function closeBigPhono () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeyDown);
}

const miniGalleryClick = pictures.addEventListener('click', (evt) => {
  const element = evt.target.closest('[data-element-id]');
  if (!element) {
    return;
  }
  const elemetId = +element.dataset.elementId;
  const photoData = photosData.find((photo) => photo.id === elemetId);

  openBigPhoto();

  BigPictureShow(photoData);
  commentsShow(photoData.comments);

});


buttonBigPictureClose.addEventListener('click', () => {
  closeBigPhono();
});

export {miniGalleryClick};


