const comparison = document.querySelector('.comparison');

const innerBefore = comparison.querySelector('.comparison__inner--before');
const innerAfter = comparison.querySelector('.comparison__inner--after');

const buttonBefore = comparison.querySelector('.comparison__button--before');
const buttonAfter = comparison.querySelector('.comparison__button--after');
const sliderScale = comparison.querySelector('.comparison__slider-scale');
const sliderBar = comparison.querySelector('.comparison__slider-bar');

buttonBefore.addEventListener('click', function() {
  innerBefore.style.width = '100%';
  innerAfter.style.width = '0';
  sliderBar.value = 0;
})

buttonAfter.addEventListener('click', function() {
  innerBefore.style.width = '0';
  innerAfter.style.width = '100%';
  sliderBar.value = 100;
})

sliderBar.addEventListener('input', function() {
  innerBefore.style.width = (100 - sliderBar.value) + '%';
  innerAfter.style.width = sliderBar.value + '%';
})
