'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  var body = document.querySelector('body');
  var modal = document.querySelector('.modal');
  var closeBtn = document.querySelector('.modal__close');
  var openBtn = document.querySelector('.user-list__registration-btn');

  var onPopupEscPress = function (evt) {
    if (evt.key === ESC_KEY) {
      closeModal();
    }
  };

  var openModal = function (evt) {
    evt.preventDefault();
    modal.style.display = 'block';
    body.classList.add('modal-open');

    document.addEventListener('keydown', onPopupEscPress);
    document.addEventListener('click', onPopupEscPressDocument);
  };

  var closeModal = function () {
    modal.style.display = 'none';
    body.classList.remove('modal-open');

    document.removeEventListener('keydown', onPopupEscPress);
    document.removeEventListener('click', onPopupEscPressDocument);
  };

  openBtn.addEventListener('click', function (evt) {
    openModal(evt);
  });

  closeBtn.addEventListener('click', function() {
    closeModal();
  });

  closeBtn.addEventListener('keydown', function () {
    if (evt.key === ENTER_KEY) {
      closeModal();
    }
  });
})();
