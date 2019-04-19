"use strict";

(function () {
  var navList = document.querySelector(".navigation__list");
  document.querySelector(".navigation__button").addEventListener("click", show);

  function show() {
    setTimeout(function () {
      navList.classList.toggle(".visible");
    }, 400);
  }
})
();


