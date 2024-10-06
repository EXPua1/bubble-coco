if (document.body.classList.contains('privacy-page')) {
  const button = document.querySelector('.pr_btn');

  if (button) {
    button.addEventListener('click', function () {
      window.location.href = './index.html';
    });
  } else {
    console.error("Элемент с классом '.pr_btn' не найден!");
  }
}
