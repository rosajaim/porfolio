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
$('.nav__link').on('click',function (e) {  //a['href^="#"'] will target ALL the "a" elements which can
    e.preventDefault();                    //affect the behavior of the other "a" elemets that are 
    var target = this.hash;                // NOT nav links.
    var $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
});

// ========== ABOUT IMAGE REVEALING EFFECT ON SCROLLING ==========
$(window).scroll(function() {    
    var imgEffect = $(window).scrollTop(); 
    if (imgEffect > 2900) {
        $(".about__photo").addClass("about__photo-js");
    }
    else {
        $(".about__photo").removeClass("about__photo-js");
    }
})


// ========== ART SLIDER ==========
    $(document).ready(function() {
      
      var s           = $('.art__slider'),
          sWrapper    = s.find('.slider-wrapper'),
          sItem       = s.find('.slide-content'),
          btn         = s.find('.slider-link'),
          sWidth      = sItem.width(),
          sCount      = sItem.length,
          slide_date  = s.find('.slide-date'),
          slide_title = s.find('.slide-title'),
          slide_text  = s.find('.slide-text'),
          slide_more  = s.find('.slide-more'),
          slide_image = s.find('.slide-image img'),
          sTotalWidth = sCount * sWidth;
      
      sWrapper.css('width', sTotalWidth);
      sWrapper.css('width', sTotalWidth);
      
      var clickCount  = 0;
      
      btn.on('click', function(e) {
        e.preventDefault();
  
        if( $(this).hasClass('next') ) {
          
          ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
        } else if ( $(this).hasClass('prev') ) {
          
          ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
        }
        TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })
  
        //CONTENT ANIMATIONS
  
        var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
        var toProperties = {autoAlpha:0.8, x:'0', y:'0'};
  
        TweenLite.fromTo(slide_image, 1, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
        TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
        TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
        TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
        TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);
  
      });
            
    });
  (jQuery);


// ========== ART GRID MODAL==========
  function main() {
    addListeners();
  }
  addEventListener('load',main);
  
  function showInfo() {
    removeListeners();
    
    var modal = this.parentNode.getElementsByClassName('modal')[0];
        modal.style.display = 'block';
    var close = modal.getElementsByClassName('close')[0];
        close.addEventListener('click',hideInfo);
    document.getElementById('overlay').addEventListener('click',hideInfo);
  }
  
  function hideInfo() {
    var boxes = document.querySelectorAll('.modal');
    for (var i=0;i<boxes.length;i++) {
      boxes[i].style.display = 'none';
    }
    addListeners();
  }
  
  function addListeners() {
    var boxes = document.querySelectorAll('.thumbnail');
    for (var i=0;i<boxes.length;i++) {
      boxes[i].addEventListener('click',showInfo.bind(boxes[i]));
    }
    handleOverlay('none');
  }
  
  function removeListeners() {
    var boxes = document.querySelectorAll('.thumbnail');
    for (var i=0;i<boxes.length;i++) {
      boxes[i].removeEventListener('click',showInfo);
    }
    handleOverlay('block');
  }
  
  function handleOverlay(status) {
    var overlay = document.getElementById('overlay');
        overlay.style.display = status;
  }

  // ========== TOGGLE STYLES FOR ART SLIDER PICTURES ==========
//   const slideBtn = document.querySelector('.slide__btn');
//   const element = document.getElementById("imgFrame");


// function toggleStly() {
//   element.classList.toggle("frame");

//   slideBtn.addEventListener('click', toggleStyle);

  
// }


$(document).ready(function(){
  $(".slide__btn").click(function(){
    $(".slide-image").toggleClass("frame slider-wrapper-frame slide-image-frame");
  });
});



  
