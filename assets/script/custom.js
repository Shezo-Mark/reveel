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
});








var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

try {
fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
  return true;
}).catch(function(e) {
  var carbonScript = document.createElement("script");
  carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
  carbonScript.id = "_carbonads_js";
  document.getElementById("carbon-block").appendChild(carbonScript);
});
} catch (error) {
console.log(error);
}