//===== SELECT DOM ITEMS =====
const menuBtn = document.querySelector('.menu-btn ');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

//===== SET INITIAL STATE OF MENU =====
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(index => index.classList.add('show'));

    //===== SET MENU STATE =====
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(index => index.classList.remove('show'));

    //===== SET MENU STATE ====== 
    showMenu = false;

  }

}

//===== CLOSES THE NAV ON NAV ITEM CLICK =====
$('.nav-item').click(function () {
  $('.navbar-toggle:visible').click();
});

//===== NAVIGATION SCROLL =====
$('.nav-link, .project-link').on('click', function (e) { //a['href^="#"'] will target ALL the "a" elements which can
  e.preventDefault();                                    //affect the behavior of the other "a" elemets that are 
  var target = this.hash; // NOT nav links.
  var $target = $(target);
  $('html, body').stop().animate({
    'scrollTop': $target.offset().top
  }, 900, 'swing', function () {
    window.location.hash = target;
  });
});


// ******* HEADER TYPE WRITER ********
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt-type">${this.txt}</span>`;


    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}


// ===== HEADER SCROLL DOWN BOTTON =====
(function () {
  'use strict';

  var btnScrollDown = document.querySelector('#scroll_down');

  function scrollDown() {
    var windowCoords = document.documentElement.clientHeight;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 10);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
      }
    })();
  }

  btnScrollDown.addEventListener('click', scrollDown);
})();


//===== REMOVES SECTION-HEADING CLASS AND ADDS SECTION-HEADING-HORIZINTAL CLASS =====
$(function () {
  $(window).bind("resize", function () { // THIS CODE IS NOT BEING USE. JUST KEEP IT FOR FURURE REFERANCE
    if ($(this).width() < 770) {
      $('.mobile').removeClass('section-heading-vertical').addClass('section-heading-horizontal')
    } else {
      $('.mobile').removeClass('section-heading-horizontal').addClass('section-heading-vertical')
    }
  }).resize();
});


//===== ANIMATION =====
$(document).ready(function () {

  $('.js--wp-1').waypoint(function (direction) {
    $('.js--wp-1').addClass('animate__animated animate__fadeInUp');

  }, {
    offset: '50%'
  });

  $('.js--wp-2').waypoint(function (direction) {
    $('.js--wp-2').addClass('animate__animated animate__fadeInLeft');

  }, {
    offset: '50%'
  });

  $('.js--wp-3').waypoint(function (direction) {
    $('.js--wp-3').addClass('animate__animated animate__fadeInRight');

  }, {
    offset: '50%'
  });

});

//===== TOGGLES THE PAGE BETWEEN INGLISH AND SPANISH
var currentLanguage;
var $languageChoice = $('.language-choice');

$languageChoice.on('click', function () {
  $('.language').removeClass('active');
  currentLanguage = $(this).data('language');
  $languageChoice.removeClass('current');
  $(this).addClass('current');
  $('.' + currentLanguage).addClass('active');
  $('body').removeClass().addClass(currentLanguage);
});