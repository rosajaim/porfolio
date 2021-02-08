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

    //SET MENU STATE
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(index => index.classList.remove('show'));

    //SET MENU STATE
    showMenu = false;

  }

}

  // Closes the Responsive Menu on Menu Item Click
  // $('.nav-item ul li a').click(function() {
  //   $('.navbar-toggle:visible').click();
  // });

    /* **** NAVIGATION SCROLL ***** */
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      var target = this.hash;
      var $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          // window.location.hash = target;
      });
  });

// ES6 Class
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
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

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

// SCROLL DOWN BOTTON
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


//DOWNLOAD BUTTON
/* 
Based on a Pablo Stanley (https://medium.com/@pablostanley) design
*/

var downloadBtn = document.getElementById('download-btn');
var inprogress = false;
downloadBtn.onclick = function () {
  if (inprogress) {
    return false;
  }
  inprogress = true
  downloadBtn.classList.add('btn-download__first');
  setTimeout(function () {
    downloadBtn.classList.add('btn-download__bridge1');
  }, 500);
  setTimeout(function () {
    downloadBtn.classList.add('btn-download__second');
  }, 600);
  setTimeout(function () {
    downloadBtn.classList.add('btn-download__third');
  }, 700);
  setTimeout(function () {
    downloadBtn.classList.add('btn-download__final');
  }, 1800);
  setTimeout(function () {
    downloadBtn.classList.remove('btn-download__final');
    downloadBtn.classList.remove('btn-download__third');
    downloadBtn.classList.remove('btn-download__second');
    downloadBtn.classList.remove('btn-download__bridge1');
    downloadBtn.classList.remove('btn-download__first');
    inprogress = false;
  }, 3200)
};

//REMOVES SECTION-HEADING CLASS AND ADDS SECTION-HEADING-HORIZINTAL CLASS
$(function () {
  $(window).bind("resize", function () {
    if ($(this).width() < 770) {
      $('.mobile').removeClass('section-heading-vertical').addClass('section-heading-horizontal')
    } else {
      $('.mobile').removeClass('section-heading-horizontal').addClass('section-heading-vertical')
    }
  }).resize();
});









	