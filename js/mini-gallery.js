import {photoDescription} from './data';

const NUMBER_PHOTOS = 25;

const listMiniPhoto = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').
  content.
  querySelector('.picture');

const miniPhotos = photoDescription(NUMBER_PHOTOS);

const listMiniPhotoFragment = document.createDocumentFragment();

miniPhotos.forEach(({url, description, likes, comments}) => {
  const photoElement = photoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = `photos/${url}`;
  photoElement.querySelector('.picture__img').alt = description;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;

  listMiniPhotoFragment.append(photoElement);
});

listMiniPhoto.append(listMiniPhotoFragment);
