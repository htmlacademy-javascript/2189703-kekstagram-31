
import {isEscapeKey} from './utils';

const body = document.querySelector('body');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const imgUplodEdit = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadCansel = imgUploadForm.querySelector('.img-upload__cancel');

const onFormKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFormUpload();
  }
};

function openFormUpload () {
  imgUplodEdit.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onFormKeyDown);
}
function closeFormUpload () {
  imgUplodEdit.classList.add('hidden');
  body.classList.remove('modal-open');
  imgUploadForm.reset();

  document.removeEventListener('keydown', onFormKeyDown);
}

imgUploadInput.addEventListener('change', () => {
  openFormUpload();
});

imgUploadCansel.addEventListener('click', () => {
  closeFormUpload();
});


