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
}, 0);})

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
const answers = document.querySelectorAll('.answer')
const arrows = document.querySelectorAll('.arrow')

quests[0].addEventListener('click', function(){
    for (i = 0; i < quests.length; i++){
        answers[0].classList.toggle('active');
        arrows[0].classList.toggle('active');
        if (i === 0) continue;
        answers[i].classList.remove('active');
        arrows[i].classList.remove('active');
    }
})

quests[1].addEventListener('click', function(){
    for (i = 0; i < quests.length; i++){
        answers[1].classList.toggle('active');
        arrows[1].classList.toggle('active');
        if (i === 1) continue;
        answers[i].classList.remove('active');
        arrows[i].classList.remove('active');
    }
})

quests[2].addEventListener('click', function(){
    for (i = 0; i < quests.length; i++){
        answers[2].classList.toggle('active');
        arrows[2].classList.toggle('active');
        if (i === 2) continue;
        answers[i].classList.remove('active');
        arrows[i].classList.remove('active');
    }
})

quests[3].addEventListener('click', function(){
    for (i = 0; i < quests.length; i++){
        answers[3].classList.toggle('active');
        arrows[3].classList.toggle('active');
        if (i === 3) continue;
        answers[i].classList.remove('active');
        arrows[i].classList.remove('active');
    }
})

quests[4].addEventListener('click', function(){
    for (i = 0; i < quests.length; i++){
        answers[4].classList.toggle('active');
        arrows[4].classList.toggle('active');
        if (i === 4) continue;
        answers[i].classList.remove('active');
        arrows[i].classList.remove('active');
    }
})

quests[5].addEventListener('click', function(){
    for (i = 0; i < quests.length; i++){
        answers[5].classList.toggle('active');
        arrows[5].classList.toggle('active');
        if (i === 5) continue;
        answers[i].classList.remove('active');
        arrows[i].classList.remove('active');
    }
})

quests[6].addEventListener('click', function(){
    for (i = 0; i < quests.length; i++){
        answers[6].classList.toggle('active');
        arrows[6].classList.toggle('active');
        if (i === 6) continue;
        answers[i].classList.remove('active');
        arrows[i].classList.remove('active');
    }
})

quests[7].addEventListener('click', function(){
    for (i = 0; i < quests.length; i++){
        answers[7].classList.toggle('active');
        arrows[7].classList.toggle('active');
        if (i === 7) continue;
        answers[i].classList.remove('active');
        arrows[i].classList.remove('active');
    }
})

quests[8].addEventListener('click', function(){
    for (i = 0; i < quests.length; i++){
        answers[8].classList.toggle('active');
        arrows[8].classList.toggle('active');
        if (i === 8) continue;
        answers[i].classList.remove('active');
        arrows[i].classList.remove('active');
    }
})
quests[9].addEventListener('click', function(){
    for (i = 0; i < quests.length; i++){
        answers[9].classList.toggle('active');
        arrows[9].classList.toggle('active');
        if (i === 9) continue;
        answers[i].classList.remove('active');
        arrows[i].classList.remove('active');
    }
})
quests[10].addEventListener('click', function(){
    for (i = 0; i < quests.length; i++){
        answers[10].classList.toggle('active');
        arrows[10].classList.toggle('active');
        if (i === 10) continue;
        answers[i].classList.remove('active');
        arrows[i].classList.remove('active');
    }
})
quests[11].addEventListener('click', function(){
    for (i = 0; i < quests.length; i++){
        answers[11].classList.toggle('active');
        arrows[11].classList.toggle('active');
        if (i === 11) continue;
        answers[i].classList.remove('active');
        arrows[i].classList.remove('active');
    }
})
quests[12].addEventListener('click', function(){
    for (i = 0; i < quests.length; i++){
        answers[12].classList.toggle('active');
        arrows[12].classList.toggle('active');
        if (i === 12) continue;
        answers[i].classList.remove('active');
        arrows[i].classList.remove('active');
    }
})
// ###################################################### KONIEC FAQ ######################################################

// ###################################################### SLIDER ABOUT_US ######################################################
a = 0

$('#about_us .right').click(function(){
    console.log('ok')


    if(a < 2){
    a++
    $('#about_us img.active.slider').addClass('empty')
    $('#about_us img.active').removeClass('active')

    $('#about_us img.inactive.slider').addClass('active')
    $('#about_us img.inactive.slider').removeClass('inactive')

    $('#about_us img.far.slider').addClass('inactive')
    $('#about_us img.far.slider').removeClass('far')

    $('.slide-number').text('0'+(a+1) + ' / 03')
}

})
$('#about_us .left').click(function(){
    console.log('ok')

    if(a == 1){
    a--
    $('#about_us img.inactive.slider').addClass('far')
    $('#about_us img.inactive.slider').removeClass('inactive')

    $('#about_us img.active.slider').addClass('inactive')
    $('#about_us img.active.slider').removeClass('active')

    $('#about_us img.slider:nth-of-type(2)').addClass('active')
    $('#about_us img.slider:nth-of-type(2)').removeClass('empty')

    $('.slide-number').text('0'+(a+1) + ' / 03')
}

    if(a == 2){
        a--
        $('#about_us img.inactive.slider').addClass('far')
        $('#about_us img.inactive.slider').removeClass('inactive')
    
        $('#about_us img.active.slider').addClass('inactive')
        $('#about_us img.active.slider').removeClass('active')
    
        $('#about_us img.slider:nth-of-type(3)').addClass('active')
        $('#about_us img.slider:nth-of-type(3)').removeClass('empty')

        $('.slide-number').text('0'+(a+1) + ' / 03')
    }

})
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
const mediaQuery = window.matchMedia('(max-width: 800px')
const h2 = document.querySelectorAll('h2')
const h1 = document.querySelectorAll('h1')
const footerText = document.querySelectorAll('footer span')

if (mediaQuery.matches){
    h2[0].textContent = "Kim jesteśmy? Kilka słów o klubie Złomiarz Team Gdańsk."
    h2[1].textContent = "Sprawdź aktualny rozkład treningów."
    h1[1].textContent = "Grafik zajęć"
    h2[2].textContent = "Składki członkowskie"
    h2[3].textContent = 'Najczęściej zadawane pytania i nasze odpowiedzi.'
    h2[4].textContent = 'Masz jakiekolwiek pytania? Napisz do nas.'
    footerText[0].textContent = 'Copyright © Złomiarz Team Gdańsk'
    footerText[1].textContent = "";
}

//  ################################################### KONIEC MOBILE TEXT CONTENT ###############################################


// ###################################################### CONTACT ###############################################################
const contactContent = document.querySelectorAll('.contact .card')


