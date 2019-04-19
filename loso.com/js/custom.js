//  SHOW AND HIDE MENU WHEN SCROLLING 
$(document).ready(function() {
    'use strict';
    $(window).scroll(function() { 
        'use strict';
        if($(window).scrollTop() < 80 ) {
            $('.navbar').css ({
               'margin-top': '-100px',
                'opacity': '0'     
            });

            $('.navbar-default').css({
                'background-color': 'rgba(0, 0 , 0, 0.748)'   
            });   
        } else {

            $('.navbar').css ({
               'margin-top': '0px',
                'opacity': '1'   
            });
            
            $('.navbar-default').css({
                'background-color': 'rgba(0, 0, 0, 0.748)',
                'border-color': '#444'      
            });
            
            $('.navbar-brand img').css({
               'height': '35px',
                'padding-top': '0px' 
            });
            
            $('.navbar-nav > li > a ').css({
                'padding-top': '15px'      
            });  
        }  
    });       
});

// =============== ADD SMOOTH SCROLILNG ===============
$(document).ready(function() {
    'use strict';
   
    $('.nav-item, #scroll-top').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
      
});

// =============== ACTIVE MENU ITEM ON CLICK ===============
$(document).ready(function() {
    'use strict';
    $('.navbar-nav li a').click(function(){
        'use strict';
        $('.navbar-nav li a').parent().removeClass("active");
        $(this).parent().addClass("active");
    });
});

// =============== HIGHTLIGHTS ITEM MENU ON SCROLL ===============
$(document).ready(function() {
    'use strict';
    $(window).scroll( function() {
        'use strict';
        $("section").each(function()  {   
            'use strict';
            
            var bb = $(this).attr("id");  // ABOUT, CONTACT, DOWNLOAD
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
            
            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");

            } else {
                $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");   
            }          
        });
    });  
});

// =============== ADD AUTO PADDING TO HEADER ===============

// $(document).ready(function() {
//     'use strict';
//     setInterval(function() {  
//         'use strict';

//         var windowHeight = $(window).height();
//         var containerHeight = $(".header-container").height();
//         var padTop = windowHeight - containerHeight;
        
//         $(".header-container").css({
//             'padding-top': Math.round( padTop / 2) + 'px',
//             'padding-bottom': Math.round( padTop / 2) + 'px'
            
//         })
//     }, 10)    
// });

$(document).ready(function() {
    
    'use strict';
    
    setInterval( function() {
        
        'use strict';
        
        var windowHeight = $(window).height();
        
        var containerHeight = $(".header-container").height();
        
        var padTop = windowHeight - containerHeight;
        
        $(".header-container").css({
            
            'padding-top': Math.round( padTop / 2) + 'px',
            'padding-bottom': Math.round( padTop / 2) + 'px'
            
        });    
    }, 10)    
});


// ===== BX SLIDER SCREEN SECTION =====
$(document).ready(function() {
    $('.bxslider').bxSlider({
        slideWidth: 292.5,
        auto: true,
        minSlides: 1, 
        maxSlides: 3, 
        slideMargin: 50
    });   
});


// ============ COUNTER ============
$(document).ready(function() { 
    $('.counter-num').counterUp({
        delay: 10,
        time: 2000
    });
});

// === ANIMATION / INITIALIZE WOO ===
$(document).ready(function() {
    'use strict';
    new WOW().init();  
});






























