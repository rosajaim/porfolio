// ========== HOMEPAGE SLIDER ==========
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 4000;
let slideInterval;

const nextSlide = () => {
  //Get curent class
  const current = document.querySelector('.current');
  //Remove current class
  current.classList.remove('current');
  //Check for next slide
  if (current.nextElementSibling) {
    //Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    //Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  //Get curent class
  const current = document.querySelector('.current');
  //Remove current class
  current.classList.remove('current');
  //Check for previous slide
  if (current.previousElementSibling) {
    //Add current to previous sibling
    current.previousElementSibling.classList.add('current');
  } else {
    //Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

//Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

//Auto Slide 
if (auto) {
  //Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}

// ========== NAVIGATION  SCROLL ==========
$('.nav__link, .art__link').on('click', function (e) { //a['href^="#"'] will target ALL the "a" elements which can
  e.preventDefault(); //affect the behavior of the other "a" elemets that are 
  var target = this.hash; // NOT nav links.
  var $target = $(target);
  $('html, body').stop().animate({
    'scrollTop': $target.offset().top
  }, 900, 'swing', function () {
    window.location.hash = target;
  });
});

// ========== ABOUT IMAGE REVEALING EFFECT ON SCROLLING ==========
$(window).scroll(function () {
  var imgEffect = $(window).scrollTop();
  if (imgEffect > 3100) {
    $(".about__photo").addClass("about__photo-js");
  } else {
    $(".about__photo").removeClass("about__photo-js");
  }

  // ========== SITCKY NAV ON SCROLL==========
  if ($(window).scrollTop() > 780 ) {
    $('.main__nav').addClass("sticky");
  } else {
    $('.main__nav').removeClass( "sticky" );
  } 

});

// ========== ARTIST STATEMENT IMAGE REVEALING EFFECT ON SCROLLING ==========
$(window).scroll(function () {
  var imgEffect2 = $(window).scrollTop();
  if (imgEffect2 > 6900) {
    $(".statement__img").addClass("js-statement__img");
  } else {
    $(".statement__img").removeClass("js-statement__img");
  }
});

// ========== ART GRID MODAL==========
function main() {
  addListeners();
}
addEventListener('load', main);

function showInfo() {
  removeListeners();

  var modal = this.parentNode.getElementsByClassName('modal')[0];
  modal.style.display = 'block';
  var close = modal.getElementsByClassName('close')[0];
  close.addEventListener('click', hideInfo);
  document.getElementById('overlay').addEventListener('click', hideInfo);
}

function hideInfo() {
  var boxes = document.querySelectorAll('.modal');
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.display = 'none';
  }
  addListeners();
}

function addListeners() {
  var boxes = document.querySelectorAll('.thumbnail');
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', showInfo.bind(boxes[i]));
  }
  handleOverlay('none');
}

function removeListeners() {
  var boxes = document.querySelectorAll('.thumbnail');
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].removeEventListener('click', showInfo);
  }
  handleOverlay('block');
}

function handleOverlay(status) {
  var overlay = document.getElementById('overlay');
  overlay.style.display = status;
}

// ========== GlIDE SLIDER==========
var glide = new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  focusAt: 'center',
}).mount()


// ========== SWAPS h2 CURRICULUM VITAE TO h2 CV ==========
$(function () {
  $(window).bind("resize", function () { 
    if ($(this).width() <= 500) {
      $('#cv').css('display', 'none');
      $('.js-heading__secondary').css('display', 'block');
    } else {
      $('.js-heading__secondary').css('display', 'none');
      $('#cv').css('display', 'block');
    }
  }).resize();
});




//===== SELECT DOM ITEMS =====
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.mobile');
const menuNav = document.querySelector('.nav');
// const menuBranding = document.querySelector('.branding');
const navItems = document.querySelectorAll('.nav__item');

//===== SET INITIAL STATE OF MENU =====
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    // menuBranding.classList.add('show');
    navItems.forEach(index => index.classList.add('show'));

    //===== SET MENU STATE =====
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    // menuBranding.classList.remove('show');
    navItems.forEach(index => index.classList.remove('show'));

    //===== SET MENU STATE ====== 
    showMenu = false;

  }

}
