import {photosData} from './data';
import {isEscapeKey} from './utils';

const PART_COMMENTS = 5;
const body = document.querySelector('body');
const pictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const commentsList = bigPicture.querySelector('.social__comments');
const commentTemplate = bigPicture.querySelector('.social__comment');
const commentShowCount = bigPicture.querySelector('.social__comment-shown-count');
const buttonBigPictureClose = bigPicture.querySelector('.big-picture__cancel');
const buttonCommentsLoad = bigPicture.querySelector('.social__comments-loader');

const renderComment = ({avatar, name, message}) => {
  const commentElement = commentTemplate.cloneNode(true);
  commentElement.querySelector('.social__picture').src = avatar;
  commentElement.querySelector('.social__picture').alt = name;
  commentElement.querySelector('.social__text').textContent = message;

  return commentElement;
};

const commentsShow = (elements) => {
  const listCommentsFragment = document.createDocumentFragment();
  elements.forEach((element) => {
    const commentElement = renderComment(element);
    listCommentsFragment.append(commentElement);
  });
  commentsList.innerHTML = '';
  commentsList.append(listCommentsFragment);
};

const BigPictureShow = ({url, likes, comments, description}) => {
  bigPicture.querySelector('.big-picture__img img').src = `photos/${url}`;
  bigPicture.querySelector('.likes-count').textContent = likes;
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
  body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeyDown);
}

function closeBigPhono () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeyDown);
}

function loadComments () {
  const commentsAll = commentsList.querySelectorAll('.social__comment');
  const commentsAllShow = Array.from(commentsAll);
  commentsAllShow.forEach((comment) => {
    comment.classList.add('hidden');
  });
  let commentsCount = PART_COMMENTS;

  const loadPartComments = () => {
    if (commentsAllShow.length > commentsCount) {
      commentShowCount.textContent = commentsCount;
      buttonCommentsLoad.classList.remove('hidden');
    } else {
      commentsCount = commentsAllShow.length;
      buttonCommentsLoad.classList.add('hidden');
      commentShowCount.textContent = commentsAllShow.length;
    }
    const commentsPartShow = commentsAllShow.slice(0, commentsCount);
    commentsPartShow.forEach((comment) => {
      comment.classList.remove('hidden');
    });
  };
  loadPartComments();
  buttonCommentsLoad.addEventListener('click', () => {
    commentsCount += PART_COMMENTS;
    loadPartComments();
  });
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
  loadComments();
});


buttonBigPictureClose.addEventListener('click', () => {
  closeBigPhono();
});

export {miniGalleryClick};


