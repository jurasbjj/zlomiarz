// ###################################################### PRELOADER ###################################################
const preload = document.querySelector('.loader-wrapper');

preload.classList.add('show-preloader');
$(window).load(function() {
    setTimeout(
      function()
      {
          $(".loader-wrapper").fadeOut();
      }, 500);
});
// ###################################################### KONIEC PRELOADER ####################################################




// ###################################################### SCROLL ###################################################### 
    // IMG powrót
$("nav img").click(function() {
    window.location.href = 'index.html'
  });

   // SCROLL NAWIGACJA AKTYWACJA
$(window).scroll(function () {
    if ($(window).scrollTop() > 64) {
       $('nav.desktop').addClass('active');
    } else {
       $('nav.desktop').removeClass('active');
    }
});
    // SCROLL 
$(document).ready(function () {
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();

      var target = this.hash,
          $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top - 67
      }, 800, 'swing', function () { // czas scrolowania
          // window.location.hash = target;
      });
  });
});

//BURGER
$('.burger, fade').click(function(){
    $('nav.mobile, .fade').toggleClass('active')
})

$('.fade').click(function(){
    $('nav.mobile, .fade').removeClass('active')
})

$('nav li a').click(function(){
    $('nav.mobile, .fade').removeClass('active')
})

// ###################################################### KONIEC SCROLL ###################################################### 


// ######################################################  MOBILE TEXT CONTENT ################################################ 
const mediaQuery = window.matchMedia('(max-width: 800px')
const h2 = document.querySelectorAll('h2')
const h1 = document.querySelectorAll('h1')
const footerText = document.querySelectorAll('footer span')

const mediaQueryMobile = window.matchMedia('(max-width: 800px')
const mediaQueryDesktop = window.matchMedia('(min-width: 800px')

if (mediaQuery.matches){
    h2[0].textContent = "Kilka słów o dyscyplinach, treningach"
    footerText[0].textContent = 'Copyright © Złomiarz Team Gdańsk'
    footerText[1].textContent = "";
}
if (mediaQueryDesktop.matches){
    $('header img.kick').attr('src', 'img/practise/kick.jpg')
    $('header img.bjj').attr('src', 'img/practise/bjj.jpg')
}
// ###################################################### KONIEC MOBILE TEXT CONTENT ############################################# 


//###################################################### CLASSES #############################################################
const activitys = document.querySelectorAll('.activity')
const practices = document.querySelectorAll('.class')

practices.forEach(function(practice){
    practice.addEventListener('click', function(){
        for (i = 0; i < activitys.length; i++){
            activitys[this.dataset.id].classList.toggle('active');
            if (i == this.dataset.id) continue;
            activitys[i].classList.remove('active');
        }
    })
})

// ###################################################### KONIEC CLASSES #####################################################


// ###################################################### SLIDER ################################################################
i = 0
$('header .bg img:nth-of-type(1)').addClass('active');

$('.right').click(function(){
    if (i == 0){
        $('header img').toggleClass('active')
        i++
        $('.slide-number').text('0'+(i+1) + ' / 02')
    }
})
$('.left').click(function(){
    if (i == 1){
        $('header img').toggleClass('active')
        i--
        $('.slide-number').text('0'+(i+1) + ' / 02')
    }
})

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
        $('.slide-number').text('0'+(i+1) + ' / 02')

    }, 10000);


// ###################################################### KONIEC SLIDER ##########################################################


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