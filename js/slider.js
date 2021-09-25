const comparison = document.querySelector('.comparison');

const imageBefore = comparison.querySelector('.comparison__image--before');
const imageAfter = comparison.querySelector('.comparison__image--after');

const buttonBefore = comparison.querySelector('.comparison__button--before');
const buttonAfter = comparison.querySelector('.comparison__button--after');
const sliderScale = comparison.querySelector('.comparison__slider-scale');
const sliderBar = comparison.querySelector('.comparison__slider-bar');

buttonBefore.addEventListener('click', function() {
  imageBefore.style.width = '100%';
  imageAfter.style.width = '0';
  sliderBar.value = 0;
})

buttonAfter.addEventListener('click', function() {
  imageBefore.style.width = '0';
  imageAfter.style.width = '100%';
  sliderBar.value = 100;
})

sliderBar.addEventListener('input', function() {
  imageBefore.style.width = (100 - sliderBar.value) + '%';
  imageAfter.style.width = sliderBar.value + '%';
})
