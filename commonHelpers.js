import"./assets/styles-2897cf83.js";const t={btn:document.querySelector(".btn_js"),closeBtn:document.querySelector(".mob_btn_js"),burgerBtn:document.querySelector(".burger_js"),mobMenu:document.querySelector(".mob_menu"),body:document.querySelector("body"),links:document.querySelectorAll(".mob_link")};t.btn.addEventListener("click",u);t.burgerBtn.addEventListener("click",a);t.closeBtn.addEventListener("click",o);t.links.forEach(n=>{n.addEventListener("click",l)});function l(){o(),this.removeEventListener("click",l)}function u(){window.open("https://play.google.com/store/apps/details?id=com.cookapps.bubblecoco","_blank")}window.addEventListener("resize",m);function a(){window.addEventListener("keydown",d),t.mobMenu.classList.add("active"),t.body.classList.add("no-scroll")}function o(){window.removeEventListener("keydown",d),t.mobMenu.classList.remove("active"),t.body.classList.remove("no-scroll")}function m(){window.innerWidth>375&&o()}function d(n){n.key==="Escape"&&o()}document.addEventListener("DOMContentLoaded",function(){document.querySelector(".reviews_wrapper");const n=document.querySelector(".reviews_list"),c=document.querySelector(".left_arrow"),i=document.querySelector(".right_arrow");let e=0;const s=document.querySelectorAll(".review_card").length-3;function r(){c.querySelector("use").setAttribute("href",e===0?"./img/sprite.svg#icon_left_Off":"./img/sprite.svg#icon_left_On"),i.querySelector("use").setAttribute("href",e===s?"./img/sprite.svg#icon_right_Off":"./img/sprite.svg#icon_right_On")}i.addEventListener("click",function(){e<s&&(e++,n.style.transform=`translateX(-${e*368}px)`,r())}),c.addEventListener("click",function(){e>0&&(e--,n.style.transform=`translateX(-${e*368}px)`,r())}),r()});
//# sourceMappingURL=commonHelpers.js.map
