document.addEventListener('DOMContentLoaded', function () {
  const reviewWrapper = document.querySelector('.reviews_wrapper');
  const reviewList = document.querySelector('.reviews_list');
  const leftArrow = document.querySelector('.left_arrow');
  const rightArrow = document.querySelector('.right_arrow');

  let currentIndex = 0;
  const totalCards = document.querySelectorAll('.review_card').length;
  const maxIndex = totalCards - 3;

  function updateArrows() {
    leftArrow
      .querySelector('use')
      .setAttribute(
        'href',
        currentIndex === 0
          ? './img/sprite.svg#icon_left_Off'
          : './img/sprite.svg#icon_left_On'
      );
    rightArrow
      .querySelector('use')
      .setAttribute(
        'href',
        currentIndex === maxIndex
          ? './img/sprite.svg#icon_right_Off'
          : './img/sprite.svg#icon_right_On'
      );
  }

  rightArrow.addEventListener('click', function () {
    if (currentIndex < maxIndex) {
      currentIndex++;
      reviewList.style.transform = `translateX(-${currentIndex * 368}px)`;
      updateArrows();
    }
  });

  leftArrow.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
      reviewList.style.transform = `translateX(-${currentIndex * 368}px)`;
      updateArrows();
    }
  });

  updateArrows();
});
