//  // Initiate the wowjs
  new WOW().init();
    

  $(".team-carousel").owlCarousel ({
    autoplay: true,
    smartSpeed: 1000,
    center: false,
    dots: false,
    loop: true,
    margin: 50,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});


// Testimonial carousel

$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    center: true,
    dots: true,
    loop: true,
    margin: 0,
    nav : true,
    navText: false,
    responsiveClass: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});

$(document).ready(function(){
    $('.counter-value').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 2000,
            easing: 'swing', // Default easing
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});


(jQuery);




(jQuery);

