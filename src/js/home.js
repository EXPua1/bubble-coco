const refs = {
  btn: document.querySelector('.btn_js'),
  closeBtn: document.querySelector('.mob_btn_js'), // исправленный селектор
  burgerBtn: document.querySelector('.burger_js'),
  mobMenu: document.querySelector('.mob_menu'),
  body: document.querySelector('body'), // добавляем body в селектор
  links: document.querySelectorAll('.mob_link'),
};

refs.btn.addEventListener('click', goAppStore);
refs.burgerBtn.addEventListener('click', openMob);
refs.closeBtn.addEventListener('click', closeMob);

refs.links.forEach(link => {
  link.addEventListener('click', handleLinkClick);
});

function handleLinkClick() {
  closeMob(); // Закрываем мобильное меню
  this.removeEventListener('click', handleLinkClick); // Убираем обработчик клика для этой ссылки
}

function goAppStore() {
  window.open(
    'https://play.google.com/store/apps/details?id=com.cookapps.bubblecoco',
    '_blank'
  );
}
window.addEventListener('resize', closeOnResize);
function openMob() {
  window.addEventListener('keydown', closeOnEscape);
  refs.mobMenu.classList.add('active');
  refs.body.classList.add('no-scroll');
}

function closeMob() {
  window.removeEventListener('keydown', closeOnEscape);
  refs.mobMenu.classList.remove('active');
  refs.body.classList.remove('no-scroll');
}
function closeOnResize() {
  if (window.innerWidth > 375) {
    closeMob(); // Закрыть меню
  }
}
function closeOnEscape(event) {
  if (event.key === 'Escape') {
    closeMob(); // Закрыть меню
  }
}
