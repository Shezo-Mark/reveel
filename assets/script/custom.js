jQuery(document).ready(function($){
    $('.slide_1').owlCarousel({
        loop: true,
        margin: 23,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true,
            },
            600: {
                items: 3,
                nav: false,
                loop: true,
            },
            1000: {
                items: 5.5,
                nav: true,
                loop: true,
            }
        }
    })
});