const btn = document.querySelector('.btn_js');
btn.addEventListener('click', goAppStore);

function goAppStore() {
  window.open(
    'https://play.google.com/store/apps/details?id=com.cookapps.bubblecoco',
    '_blank'
  );
}
