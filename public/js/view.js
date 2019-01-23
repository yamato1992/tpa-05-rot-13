import { convertRot13 } from './rot13.js';

const handleBtnConvert = function() {
  const sourceText = document.querySelector('#container .source-text').value;
  const convertedText = convertRot13(sourceText);
  document.querySelector('#container .destination-text').value = convertedText;
};

const initDOMAndListeners = function() {
  const form = document.querySelector('#container .form-convert');
  // see https://developer.mozilla.org/ja/docs/Web/API/Event/preventDefault
  form.addEventListener('submit', evt => evt.preventDefault());

  const btn = document.querySelector('.btn-convert');
  btn.addEventListener('click', handleBtnConvert);
};

export {
  initDOMAndListeners,
};
