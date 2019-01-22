const Rot13 = (function() {

    const DOMstrings = {
        sourceText: '#container .source-text',
        destinationText: '#container .destination-text',
        formConvert: '#container .destination-text',
        btnConvert: '#container .btn-convert'
    };
    
    const rot13Input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    const rot13Output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split('');

    const rotateChar = function(ch) {
      return rot13Input.indexOf(ch) > -1 ? rot13Output[rot13Input.indexOf(ch)] : ch;
    };

    const convertRot13 = function(sourceText) {
      return sourceText.split('').map(rotateChar).join('');
    };

    const handleBtnConvert = function() {
      const sourceText = document.querySelector(DOMstrings.sourceText).value;
      const convertedText = convertRot13(sourceText);
      document.querySelector(DOMstrings.destinationText).value = convertedText;
    };

    const initPage = function() {
      const form = document.querySelector(DOMstrings.formConvert);
      // see https://developer.mozilla.org/ja/docs/Web/API/Event/preventDefault
      form.addEventListener('submit', evt => evt.preventDefault());

      const btn = document.querySelector(DOMstrings.btnConvert);
      btn.addEventListener('click', handleBtnConvert);
    };

    initPage();

})();
