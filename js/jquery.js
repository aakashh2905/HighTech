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

// $(document).ready(function(){
//     $('.counter-value').each(function(){
//         $(this).prop('Counter',0).animate({
//             Counter: $(this).text()
//         },{
//             duration: 2000,
//             easing: 'easeInQuad',
//             step: function (now){
//                 $(this).text(Math.ceil(now));
//             }
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     Initialize counter
//     let startTime = Date.now();

//     // Function to update counter
//     function updateCounter() {
//         let currentTime = Date.now();
//         let elapsedTime = Math.floor((currentTime - startTime) / 1000); // in seconds

//         // Update the counter values based on elapsed time
//         document.querySelectorAll('.counter-value').forEach(function(counterElement) {
//             let currentValue = parseInt(counterElement.innerText.trim());
//             let newValue = currentValue + elapsedTime;
//             counterElement.innerText = newValue;
//         });
//     }



(jQuery);

