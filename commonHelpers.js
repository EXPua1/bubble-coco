(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const o={btn:document.querySelector(".btn_js"),closeBtn:document.querySelector(".mob_btn_js"),burgerBtn:document.querySelector(".burger_js"),mobMenu:document.querySelector(".mob_menu"),body:document.querySelector("body"),links:document.querySelectorAll(".mob_link")};o.btn.addEventListener("click",a);o.burgerBtn.addEventListener("click",f);o.closeBtn.addEventListener("click",l);o.links.forEach(n=>{n.addEventListener("click",d)});function d(){l(),this.removeEventListener("click",d)}function a(){window.open("https://play.google.com/store/apps/details?id=com.cookapps.bubblecoco","_blank")}window.addEventListener("resize",m);function f(){window.addEventListener("keydown",u),o.mobMenu.classList.add("active"),o.body.classList.add("no-scroll")}function l(){window.removeEventListener("keydown",u),o.mobMenu.classList.remove("active"),o.body.classList.remove("no-scroll")}function m(){window.innerWidth>375&&l()}function u(n){n.key==="Escape"&&l()}document.addEventListener("DOMContentLoaded",function(){document.querySelector(".reviews_wrapper");const n=document.querySelector(".reviews_list"),i=document.querySelector(".left_arrow"),s=document.querySelector(".right_arrow");let r=0;const t=document.querySelectorAll(".review_card").length-3;function c(){i.querySelector("use").setAttribute("href",r===0?"./img/sprite.svg#icon_left_Off":"./img/sprite.svg#icon_left_On"),s.querySelector("use").setAttribute("href",r===t?"./img/sprite.svg#icon_right_Off":"./img/sprite.svg#icon_right_On")}s.addEventListener("click",function(){r<t&&(r++,n.style.transform=`translateX(-${r*368}px)`,c())}),i.addEventListener("click",function(){r>0&&(r--,n.style.transform=`translateX(-${r*368}px)`,c())}),c()});
//# sourceMappingURL=commonHelpers.js.map
