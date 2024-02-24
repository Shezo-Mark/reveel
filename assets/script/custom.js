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

    $('#myCarousel1').carousel({
        pause: 'hover'
    });

    // 
    // cat dropdown\
    $('.cat_dropdown').on('click', function(e){
        e.preventDefault();
        $('.cat_dropdown').removeClass('is_checked');
        $(this).toggleClass('is_checked');
    });
    $('.cat_dropdown a').on('click', function(e){
        e.preventDefault();
        $('.cat_dropdown a').removeClass('is_checked');
        $(this).toggleClass('is_checked');
    });
});








// var _gaq = _gaq || [];
// _gaq.push(['_setAccount', 'UA-36251023-1']);
// _gaq.push(['_setDomainName', 'jqueryscript.net']);
// _gaq.push(['_trackPageview']);

// (function() {
//   var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
//   ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
//   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
// })();

// try {
// fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
//   return true;
// }).catch(function(e) {
//   var carbonScript = document.createElement("script");
//   carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
//   carbonScript.id = "_carbonads_js";
//   document.getElementById("carbon-block").appendChild(carbonScript);
// });
// } catch (error) {
// console.log(error);
// }



/*------------------*\
|  Thumbnail_slider  |
\*------------------*/
$(document).ready(function() {
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 6; //globaly define number of elements per page
    var syncedSecondary = true;
    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        // nav: true,
        autoplay: false,
        responsiveRefreshRate: 200,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);
    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);
    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;
        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);
        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        //end block
        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();
        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }
    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }
    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});










