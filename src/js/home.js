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

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.mob_link, .nav-list_item a'); // Ссылки из модального окна и хедера

  // Объекты для хранения отступов для каждой секции
  const mobileOffsets = {
    home: 0,
    features: 150,
    about: 350,
    gallery: 150,
    reviews: 100,
  };

  const desktopOffsets = {
    home: 70,
    features: 300,
    about: 250,
    gallery: 150,
    reviews: 150,
  };

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); // Отключаем стандартное поведение якоря
      const targetID = link.getAttribute('href').substring(1); // Получаем ID секции (без #)
      const targetSection = document.getElementById(targetID); // Находим секцию по ID

      if (targetSection) {
        // Если клик был по мобильной ссылке — закрываем меню
        if (link.classList.contains('mob_link')) {
          closeMob();
        }

        // Определяем, какой объект отступов использовать
        const offsets =
          window.innerWidth <= 1200 ? mobileOffsets : desktopOffsets;

        // Получаем отступ для текущей секции
        const offset = offsets[targetID] || 0;

        const sectionPosition =
          targetSection.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: sectionPosition,
          behavior: 'smooth',
        });
      } else {
        console.error(`Section with ID "${targetID}" not found`);
      }
    });
  });
});
