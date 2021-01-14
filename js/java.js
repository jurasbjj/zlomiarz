// ###################################################### PRELOADER ######################################################
const preload = document.querySelector('.loader-wrapper');

preload.classList.add('show-preloader');
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
         console.log(this.dataset.id)
         quests[this.dataset.id].classList.toggle('active');
         for (i = 0; i < quests.length; i++){
             if (i == this.dataset.id) continue;
             quests[i].classList.remove('active');
         }
     })
 })

// ###################################################### KONIEC FAQ ######################################################

// ###################################################### SLIDER ABOUT_US ######################################################
// a = 0

// $('#about_us .right').click(function(){
//     console.log('ok')


//     if(a < 2){
//     a++
//     $('#about_us img.active.slider').addClass('empty')
//     $('#about_us img.active').removeClass('active')

//     $('#about_us img.inactive.slider').addClass('active')
//     $('#about_us img.inactive.slider').removeClass('inactive')

//     $('#about_us img.far.slider').addClass('inactive')
//     $('#about_us img.far.slider').removeClass('far')

//     $('.slide-number').text('0'+(a+1) + ' / 03')
// }

// })
// $('#about_us .left').click(function(){
//     console.log('ok')

//     if(a == 1){
//     a--
//     $('#about_us img.inactive.slider').addClass('far')
//     $('#about_us img.inactive.slider').removeClass('inactive')

//     $('#about_us img.active.slider').addClass('inactive')
//     $('#about_us img.active.slider').removeClass('active')

//     $('#about_us img.slider:nth-of-type(2)').addClass('active')
//     $('#about_us img.slider:nth-of-type(2)').removeClass('empty')

//     $('.slide-number').text('0'+(a+1) + ' / 03')
// }

//     if(a == 2){
//         a--
//         $('#about_us img.inactive.slider').addClass('far')
//         $('#about_us img.inactive.slider').removeClass('inactive')
    
//         $('#about_us img.active.slider').addClass('inactive')
//         $('#about_us img.active.slider').removeClass('active')
    
//         $('#about_us img.slider:nth-of-type(3)').addClass('active')
//         $('#about_us img.slider:nth-of-type(3)').removeClass('empty')

//         $('.slide-number').text('0'+(a+1) + ' / 03')
//     }

// })
// // #about_us SLIDER WRAP BUTTON
// $('#about_us button').click(function(){
//     $('.wrap-text').toggleClass('active')
//     $('#about_us button').toggleClass('active');
//     if ($("#about_us button").hasClass("active")) {
//         $("#about_us button span").text('Czytaj mniej');
//       }
//     else {
//         $('#about_us button span').text('Czytaj więcej')
//     }
// })

// ###################################################### SLIDER ABOUT_US ######################################################





//  ###################################################### MOBILE TEXT CONTENT ###################################################
const mediaQueryMobile = window.matchMedia('(max-width: 800px')
const mediaQueryDesktop = window.matchMedia('(min-width: 800px')
const h2 = document.querySelectorAll('h2')
const h1 = document.querySelectorAll('h1')
const footerText = document.querySelectorAll('footer span')

if (mediaQueryMobile.matches){
    h2[0].textContent = "Kim jesteśmy? Kilka słów o klubie Złomiarz Team Gdańsk."
    h2[1].textContent = "Sprawdź aktualny rozkład treningów."
    h1[1].textContent = "Grafik zajęć"
    h2[2].textContent = "Składki członkowskie"
    h2[3].textContent = 'Najczęściej zadawane pytania i nasze odpowiedzi.'
    h2[4].textContent = 'Masz jakiekolwiek pytania? Napisz do nas.'
    footerText[0].textContent = 'Copyright © Złomiarz Team Gdańsk'
    footerText[1].textContent = "";

    $('.slider img.static, .slider img.active').attr('src','img/about_us/mobile/onas1.jpg')
    $('.slider img.inactive').attr('src','img/about_us/mobile/onas2.png')
    $('.slider img.far').attr('src','img/about_us/mobile/onas3.jpg')
}

if(mediaQueryDesktop.matches){
    $('.slider img.static, .slider img.active').attr('src','img/about_us/onas1.jpg')
    $('.slider img.inactive').attr('src','img/about_us/onas2.png')
    $('.slider img.far').attr('src','img/about_us/onas3.jpg')
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