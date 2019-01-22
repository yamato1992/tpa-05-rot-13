const rot13Input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
const rot13Output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split('');

const rotateChar = function(ch) {
  return rot13Input.indexOf(ch) > -1 ? rot13Output[rot13Input.indexOf(ch)] : ch;
};

const convertRot13 = function(sourceText) {
  return sourceText.split('').map(rotateChar).join('');
};

const handleBtnConvert = function() {
  const sourceText = document.querySelector('#container .source-text').value;
  const convertedText = convertRot13(sourceText);
  document.querySelector('#container .destination-text').value = convertedText;
};

const initPage = function() {
  const form = document.querySelector('#container .form-convert');
  // see https://developer.mozilla.org/ja/docs/Web/API/Event/preventDefault
  form.addEventListener('submit', evt => evt.preventDefault());

  document.querySelector('.btn-convert')
    .addEventListener('click', handleBtnConvert);
};

initPage();
