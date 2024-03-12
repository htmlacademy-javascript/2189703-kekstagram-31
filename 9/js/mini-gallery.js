const listMiniPhoto = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').
  content.
  querySelector('.picture');

const renderElement = ({url, description, likes, comments, id}) => {
  const photoElement = photoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = `photos/${url}`;
  photoElement.querySelector('.picture__img').alt = description;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photoElement.dataset.elementId = id;
  return photoElement;
};

const renderMiniGallery = (data) => {
  const listMiniPhotoFragment = document.createDocumentFragment();
  data.forEach((element) => {
    const galleryElement = renderElement(element);
    listMiniPhotoFragment.append(galleryElement);
  });
  listMiniPhoto.append(listMiniPhotoFragment);
};

export {renderMiniGallery};
