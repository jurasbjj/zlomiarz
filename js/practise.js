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

if (mediaQuery.matches){
    h2[0].textContent = "Kilka słów o dyscyplinach, treningach"
    footerText[0].textContent = 'Copyright © Złomiarz Team Gdańsk'
    footerText[1].textContent = "";
}
// ###################################################### KONIEC MOBILE TEXT CONTENT ############################################# 


//###################################################### CLASSES #############################################################
const activitys = document.querySelectorAll('.activity')
const classes = document.querySelectorAll('.class')

// CLASS BJJ 
classes[0].addEventListener('click', function(){
    for (i = 0; i < activitys.length; i++){
        activitys[0].classList.toggle('active');
        if (i === 0) continue;
        activitys[i].classList.remove('active');
    }
})
classes[1].addEventListener('click', function(){
    for (i = 0; i < activitys.length; i++){
        activitys[1].classList.toggle('active');
        if (i === 1) continue;
        activitys[i].classList.remove('active');
    }
})
classes[2].addEventListener('click', function(){
    for (i = 0; i < activitys.length; i++){
        activitys[2].classList.toggle('active');
        if (i === 2) continue;
        activitys[i].classList.remove('active');
    }
})
classes[3].addEventListener('click', function(){
    for (i = 0; i < activitys.length; i++){
        activitys[3].classList.toggle('active');
        if (i === 3) continue;
        activitys[i].classList.remove('active');
    }
})
classes[4].addEventListener('click', function(){
    for (i = 0; i < activitys.length; i++){
        activitys[4].classList.toggle('active');
        if (i === 4) continue;
        activitys[i].classList.remove('active');
    }
})
classes[5].addEventListener('click', function(){
    for (i = 0; i < activitys.length; i++){
        activitys[5].classList.toggle('active');
        if (i === 5) continue;
        activitys[i].classList.remove('active');
    }
})
classes[6].addEventListener('click', function(){
    for (i = 0; i < activitys.length; i++){
        activitys[6].classList.toggle('active');
        if (i === 6) continue;
        activitys[i].classList.remove('active');
    }
})
// KONIEC CLASS BJJ

// CLASS KICK
classes[7].addEventListener('click', function(){
    for (i = 0; i < activitys.length; i++){
        activitys[7].classList.toggle('active');
        if (i === 7) continue;
        activitys[i].classList.remove('active');
    }
})
classes[8].addEventListener('click', function(){
    for (i = 0; i < activitys.length; i++){
        activitys[8].classList.toggle('active');
        if (i === 8) continue;
        activitys[i].classList.remove('active');
    }
})
classes[9].addEventListener('click', function(){
    for (i = 0; i < activitys.length; i++){
        activitys[9].classList.toggle('active');
        if (i === 9) continue;
        activitys[i].classList.remove('active');
    }
})
classes[10].addEventListener('click', function(){
    for (i = 0; i < activitys.length; i++){
        activitys[10].classList.toggle('active');
        if (i === 10) continue;
        activitys[i].classList.remove('active');
    }
})
// KONIEC CLASS KICK

// ###################################################### KONIEC CLASSES #####################################################


// ###################################################### SLIDER ################################################################
i = 0
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

// ###################################################### KONIEC SLIDER ##########################################################

