// ###################################################### PRELOADER ######################################################
$(window).load(function() {
    setTimeout(
      function()
      {
        (function () {
          if (!('fonts' in document)) return;
          document.fonts.load('1em Montserrat').then(function () {
            document.documentElement.className += ' fonts-loaded';
          });
        })();
          $(".loader-wrapper").fadeOut();
      }, 300);

});
// ########################################## KONIEC PRELOADER #########################################################

// ###################################################### SCROLL  ######################################################
const mediaQueryMobile = window.matchMedia('(max-width: 800px')
const mediaQueryDesktop = window.matchMedia('(min-width: 801px')
// scroll sekcji 
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
  
        var target = this.hash,
            $target = $(target);
  
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 64
        }, 800, 'swing', function () { // czas scrolowania
            // window.location.hash = target;
        });
    });
  });

//mobile aktywacja nawigacji
if(mediaQueryMobile.matches){
  //burger
$('.burger, fade').click(function(){
    $('nav, .fade').toggleClass('active')
 })
 
 $('.fade').click(function(){
    $('nav, .fade').removeClass('active')
 })

  // usuwanie cienia
 $('nav li a').click(function(){
    $('nav, .fade').removeClass('active')
 })
}
// ###################################################### KONIEC SCROLL ######################################################
// ######################################## MEDIA CONTENT ####################################################################
const h2 = document.querySelectorAll('h2')
const h1 = document.querySelectorAll('h1')
const footerText = document.querySelectorAll('footer span')

if (mediaQueryMobile.matches){
    footerText[0].textContent = 'Copyright © Złomiarz Team Gdańsk'
    footerText[1].textContent = "";
}
// ######################################## MEDIA CONTENT #####################################################

// ###################################################### RE-SIZE REFRESH ####################################################
var ww = $(window).width();
var limit = 800;
function refresh() {
   ww = $(window).width();
   var w =  ww<limit ? (location.reload(true)) :  ( ww>limit ? (location.reload(true)) : ww=limit );
}
var tOut;
$(window).resize(function() {
    var resW = $(window).width();
    clearTimeout(tOut);
    if ( (ww>limit && resW<limit) || (ww<limit && resW>limit) ) {
        tOut = setTimeout(refresh, 10);
    }
});
//###################################################### KONIEC RE-SIZE REFRESH #################################################