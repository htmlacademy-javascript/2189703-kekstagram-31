import { isEscapeKey } from './utils';

const MESSAGE_DESCRIPTON = 'длина комментария не может составлять больше 140 символов';
const HASHTAGS_MAX_COUNT = 5;
const MESSAGE_HASHTAGS_MAX_COUNT = `нельзя указать больше ${HASHTAGS_MAX_COUNT} хэштегов`;
const HASHTAGS_PROPERTY = /^#[a-zа-яё0-9]{1,19}$/i;
const MESSAGE_HASHTAGS_PROPERTY = 'Хештег введён некорректно!';
const MESSAGE_HASHTAGS_NO_REPEAT = 'Недопустимо вводить одинаковые хештеги!';

const imgUploadForm = document.querySelector('.img-upload__form');
const textDescriptionForm = imgUploadForm.querySelector('.text__description');
const textHashtagsForm = imgUploadForm.querySelector('.text__hashtags');


const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__form--error',
});

function validateTextDescription (value) {
  return value.length <= 140;
}

const stringArray = (string) => string.trim().split(' ');

function validateHashtagsLength (value) {
  return stringArray(value).length <= HASHTAGS_MAX_COUNT;
}

function validateHashtagProperty (value) {
  return stringArray(value).every((string) => (HASHTAGS_PROPERTY.test(string)));
}

function validateHashtagNoRepeat (value) {
  let length = 0;
  const valueArray = stringArray(value);
  valueArray.forEach((string1) => {
    valueArray.forEach((string2) => {
      if (string1 === string2) {
        length++;
      }
    });
  });
  return length <= valueArray.length;
}

pristine.addValidator(textDescriptionForm, validateTextDescription, MESSAGE_DESCRIPTON);
pristine.addValidator(textHashtagsForm, validateHashtagsLength, MESSAGE_HASHTAGS_MAX_COUNT);
pristine.addValidator(textHashtagsForm, validateHashtagProperty, MESSAGE_HASHTAGS_PROPERTY);
pristine.addValidator(textHashtagsForm, validateHashtagNoRepeat, MESSAGE_HASHTAGS_NO_REPEAT);

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  pristine.validate();
});

textDescriptionForm.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

textHashtagsForm.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});
