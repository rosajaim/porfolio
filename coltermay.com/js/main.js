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
    $('.nav__link').on('click', function (e) { //a['href^="#"'] will target ALL the "a" elements which can
    e.preventDefault();                     //affect the behavior of the other "a" elemets that are 
    var target = this.hash;                 // NOT nav links.
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
  if (imgEffect > 2700) {
    $(".about__photo").addClass("about__photo-js");
  } else {
    $(".about__photo").removeClass("about__photo-js");
  }

  if ($(window).scrollTop() > 780 ) {
    $('.main__nav').addClass("sticky");
  } else {
    $('.main__nav').removeClass( "sticky" );
  } 

});

// $(window).scroll(function() {
//   if ($(window).scrollTop() > 150 ) {
//     $('.main__nav').addClass("sticky");
//   } else {
//     $('.main__nav').removeClass( "sticky" );
//   } 
// });

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

/* **** STICKY NAVIGATION ***** */

    // $(window).on('scroll', function(){
    //   var scroll = $(window).scrollTop();    
    //     if (scroll >= 10) {				
    //     $(".main__nav").addClass(".sticky");
    //     } else if(scroll <= 50) {
    //     $(".main_nav").removeClass("sticky");
    //   }
    // });


    // $(document).ready(function(){
    //   $(".slide__btn").click(function(){
    //     $(".slide-image").toggleClass("frame slider-wrapper-frame slide-image-frame");
    //   });
    // });