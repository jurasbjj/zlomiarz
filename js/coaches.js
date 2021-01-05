// PRELOADER #####################################################################################
const preload = document.querySelector('.loader-wrapper');

preload.classList.add('show-preloader');
$(window).load(function() {
    setTimeout(
      function()
      {
          $(".loader-wrapper").fadeOut();
      }, 500);
});
// KONIEC PRELOADER ###############################################################################


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

// SCROLL ########################################################################################################

$('nav img').click(function(){
    $('html, body').animate({
    scrollTop: $('body').offset().top
}, 800);})


$(document).ready(function () {
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();

      var target = this.hash,
          $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top - 67
      }, 800, 'swing', function () {
          // window.location.hash = target;
      });
  });
});
// KONIEC SCROLL ########################################################################################################


// ################################# SLAJDER #################################################################

left = 0
i = 0
a = 0

$('.nxt').click(function(){
    left = left - 544
    
    i++
    a++
    if(i === 1){
        $("#coaches .slider img").animate({left: left+'px'});
        $('#coaches .slider img:nth-of-type(2)').addClass('active');
        $('#coaches .slider img:nth-of-type(1)').removeClass('active');
    }
    if(i === 2){
        $("#coaches .slider img").animate({left: left+'px'});
        $('#coaches .slider img:nth-of-type(3)').addClass('active');
        $('#coaches .slider img:nth-of-type(2)').removeClass('active');
    }
    if(i === 3){
        $("#coaches .slider img").animate({left: left+'px'});
        $('#coaches .slider img:nth-of-type(4)').addClass('active');
        $('#coaches .slider img:nth-of-type(3)').removeClass('active');
    }
    if(i === 4){
        $("#coaches .slider img").animate({left: left+'px'});
        $('#coaches .slider img:nth-of-type(5)').addClass('active');
        $('#coaches .slider img:nth-of-type(4)').removeClass('active');
    }
    if(i === 5){
        $("#coaches .slider img").animate({left: left+'px'});
        $('#coaches .slider img:nth-of-type(6)').addClass('active');
        $('#coaches .slider img:nth-of-type(5)').removeClass('active');
    }
    if(i === 6){
        $("#coaches .slider img").animate({left: left+'px'});
        $('#coaches .slider img:nth-of-type(7)').addClass('active');
        $('#coaches .slider img:nth-of-type(6)').removeClass('active');
    }
    if(i === 7){
        i = 6
    }
    if(a === 7){
        a = 6
    }
    if (left < -3264){
        left = -3264
    }
})
$('.prev').click(function(){
    left = left + 544
    
    i--

    if(a === 1){
        $("#coaches .slider img").animate({left: left+'px'});
        $('#coaches .slider img:nth-of-type(1)').addClass('active');
        $('#coaches .slider img:nth-of-type(2)').removeClass('active');
        a--
    }
    
    if(a === 2){
        $("#coaches .slider img").animate({left: left+'px'});
        $('#coaches .slider img:nth-of-type(2)').addClass('active');
        $('#coaches .slider img:nth-of-type(3)').removeClass('active');
        a--

    }
    if(a === 3){
        $("#coaches .slider img").animate({left: left+'px'});
        $('#coaches .slider img:nth-of-type(3)').addClass('active');
        $('#coaches .slider img:nth-of-type(4)').removeClass('active');
        a--
    }
    if(a === 4){
        $("#coaches .slider img").animate({left: left+'px'});
        $('#coaches .slider img:nth-of-type(4)').addClass('active');
        $('#coaches .slider img:nth-of-type(5)').removeClass('active');
        a--

    }
    if(a === 5){
        $("#coaches .slider img").animate({left: left+'px'});
        $('#coaches .slider img:nth-of-type(5)').addClass('active');
        $('#coaches .slider img:nth-of-type(6)').removeClass('active');
        a--

    }
    if(a === 6){
        $("#coaches .slider img").animate({left: left+'px'});
        $('#coaches .slider img:nth-of-type(6)').addClass('active');
        $('#coaches .slider img:nth-of-type(7)').removeClass('active');
        a--
    }
    if(i < 0){
        i = 0
    }
    if (a < 0){
        a = 0
    }
    if (left > 0){
        left = 0
    }
})

// ################################# KONIEC SLAJDER #################################################################
