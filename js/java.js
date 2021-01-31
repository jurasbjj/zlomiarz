// ###################################################### PRELOADER ######################################################
const preload = document.querySelector('.loader-wrapper');

// preload.classList.add('show-preloader');
$(window).load(function() {
    setTimeout(
      function()
      {
          $(".loader-wrapper").fadeOut();
      }, 500);
});
// ########################################## KONIEC PRELOADER ######################################################

// ###################################################### SCROLL  ######################################################

// scroll img
$('nav img').click(function(){
    $('html, body').animate({
    scrollTop: $('body').offset().top
}, 0);
$('nav.mobile, .fade').removeClass('active')
})

// scroll sekcji 
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
  
        var target = this.hash,
            $target = $(target);
  
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 63
        }, 800, 'swing', function () { // czas scrolowania
            // window.location.hash = target;
        });
    });
  });

// desktop aktywacja nawigacji
$(window).scroll(function () {
   if ($(window).scrollTop() > 64) {
      $('nav.desktop').addClass('active');
   } else {
      $('nav.desktop').removeClass('active');
   }
});

  //burger
$('.burger, fade').click(function(){
    $('nav.mobile, .fade').toggleClass('active')
 })
 
 $('.fade').click(function(){
    $('nav.mobile, .fade').removeClass('active')
 })

  // usuwanie cienia
 $('nav li a').click(function(){
    $('nav.mobile, .fade').removeClass('active')
 })

// ###################################################### KONIEC SCROLL ######################################################


// ###################################################### FAQ ######################################################
const quests = document.querySelectorAll('.question')

 quests.forEach(function(quest){
     quest.addEventListener('click', function(){
        //  console.log(this.dataset.id)
         quests[this.dataset.id].classList.toggle('active');
         for (i = 0; i < quests.length; i++){
             if (i == this.dataset.id) continue;
             quests[i].classList.remove('active');
         }
     })
 })

// ###################################################### KONIEC FAQ ######################################################

// ###################################################### SLIDER ABOUT_US ######################################################
// MOBILE 

  var swiper = new Swiper('.swiper-container', {
    speed: 800,
    effect: 'slide',
    slidesPerView: '1',
    loop: true,
    pagination: {
       el: '.slide-number',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
      return ('0' + current).slice(-2) + ' / ' + ('0' + total).slice(-2);
}
    },
    navigation: {
      nextEl: '.right',
      prevEl: '.left',
    },
     autoplay: {
         delay: 4000,
         disableOnInteraction: false,
       },
       breakpoints:{
           800:{
                slidesPerView: 3,
                spaceBetween: 0,
                loop: true,
                centeredSlides: true,

               autoplay:{
                   delay: 6000,
               },

           }
       }
  });
 // #about_us SLIDER WRAP BUTTON
 $('#about_us button').click(function(){
     $('.wrap-text').toggleClass('active')
     $('#about_us button').toggleClass('active');
     if ($("#about_us button").hasClass("active")) {
         $("#about_us button span").text('Czytaj mniej');
       }
     else {
         $('#about_us button span').text('Czytaj więcej')
     }
 })

// ###################################################### SLIDER ABOUT_US ######################################################





//  ###################################################### MOBILE TEXT CONTENT ###################################################
const mediaQueryMobile = window.matchMedia('(max-width: 800px')
const mediaQueryDesktop = window.matchMedia('(min-width: 800px')
const h2 = document.querySelectorAll('h2')
const h1 = document.querySelectorAll('h1')
const footerText = document.querySelectorAll('footer span')

if (mediaQueryMobile.matches){
    // h2[0].textContent = "Kim jesteśmy? Kilka słów o klubie Złomiarz Team Gdańsk."
    // h2[1].textContent = "Sprawdź aktualny rozkład treningów."
    // h1[1].textContent = "Grafik zajęć"
     h2[2].textContent = "Składki członkowskie"
    // h2[3].textContent = 'Najczęściej zadawane pytania i nasze odpowiedzi.'
     h2[4].textContent = 'Masz jakiekolwiek pytania? Napisz do nas.'
    footerText[0].textContent = 'Copyright © Złomiarz Team Gdańsk'
    footerText[1].textContent = "";
}

if(mediaQueryDesktop.matches){
    $(".swiper-slide#s1 img").attr("src","img/about_us/onas1.jpg");
    $(".swiper-slide#s2 img").attr("src","img/about_us/onas2.jpg");
    $(".swiper-slide#s3 img").attr("src","img/about_us/onas3.jpg");

}


//  ################################################### KONIEC MOBILE TEXT CONTENT ###############################################


// ###################################################### CONTACT ###############################################################
const contactContent = document.querySelectorAll('.contact .card')


// RE-SIZE REFRESH
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

// KONIEC RE-SIZE REFRESH

// SLIDER HEADER PAGE
i = 0

// 
// automatyczna zmiana
setTimeout(
    function()
    {
        $('header .bg img:nth-of-type(1)').addClass('active');

    }, 100);
setInterval(
    function()
    {
        $('header img').toggleClass('active');
        if(i == 0){
            i++
        }
        else{
            i--
        }

    }, 10000);
  



$('.right').click(function(){
    if (i == 0){
        $('header img').toggleClass('active')
        i++
    }
})
$('.left').click(function(){
    if (i == 1){
        $('header img').toggleClass('active')
        i--
    }
})