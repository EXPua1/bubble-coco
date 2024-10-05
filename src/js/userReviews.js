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
        'xlink:href',
        currentIndex === 0
          ? './img/sprite.svg#icon-left-off'
          : './img/sprite.svg#icon-left-on'
      );
    rightArrow
      .querySelector('use')
      .setAttribute(
        'xlink:href',
        currentIndex === maxIndex
          ? './img/sprite.svg#icon-right-off'
          : './img/sprite.svg#icon-right-on'
      );
  }

  // function updateArrows() {
  //   leftArrow.src =
  //     currentIndex === 0
  //       ? '../img/reviews/icon_left_Off.svg'
  //       : '../img/reviews/icon_left_On.svg';
  //   rightArrow.src =
  //     currentIndex === maxIndex
  //       ? '../img/reviews/icon_right_Off.svg'
  //       : '../img/reviews/icon_right_On.svg';
  // }

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
