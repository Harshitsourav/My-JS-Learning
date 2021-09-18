'use strict';

const showwModels = document.querySelectorAll('.show-modal');

const open_model = function () {
  document.querySelector('.modal').classList.remove('hidden');
  document.querySelector('.overlay').classList.remove('hidden');
};

const closeModel = function () {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
};

for (let modelNumber = 0; modelNumber < showwModels.length; modelNumber++) {
  showwModels[modelNumber].addEventListener('click', open_model);
}

document.querySelector('.close-modal').addEventListener('click', closeModel);

document.querySelector('.overlay').addEventListener('click', closeModel);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModel();
  }
});
