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




// SCROLL #########################################################################################
 $('nav img').click(function(){
     $('html, body').animate({
     scrollTop: $('body').offset().top
 }, 800);})

 //scroll
//  $('nav li a').click(function(){
//     $('html, body').animate({
//     scrollTop: ($('.'+$(this).attr('id')).offset().top - 63)
// }, 800);})

$('nav li a').click(function(){
    $('nav.mobile, .fade').removeClass('active')
})



//BURGER
$('.burger, fade').click(function(){
    $('nav.mobile, .fade').toggleClass('active')
})

$('.fade').click(function(){
    $('nav.mobile, .fade').removeClass('active')
})





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


left = 0
i = 0
a = 0

// $("button").click(function(){
//     left = left - 632
//     $("#coaches img").animate({left: left+'px'});

//     if(i === 0){
//         $('$coaches img').toggleClass('active')

//         i++
//     }

//   }); 

$('button.nxt').click(function(){
    left = left - 544
    
    i++
    a++
    if(i === 1){
        $("#coaches img").animate({left: left+'px'});
        $('#coaches img:nth-of-type(2)').addClass('active');
        $('#coaches img:nth-of-type(1)').removeClass('active');
    }
    if(i === 2){
        $("#coaches img").animate({left: left+'px'});
        $('#coaches img:nth-of-type(3)').addClass('active');
        $('#coaches img:nth-of-type(2)').removeClass('active');
    }
    if(i === 3){
        $("#coaches img").animate({left: left+'px'});
        $('#coaches img:nth-of-type(4)').addClass('active');
        $('#coaches img:nth-of-type(3)').removeClass('active');
    }
    if(i === 4){
        $("#coaches img").animate({left: left+'px'});
        $('#coaches img:nth-of-type(5)').addClass('active');
        $('#coaches img:nth-of-type(4)').removeClass('active');
    }
    if(i === 5){
        $("#coaches img").animate({left: left+'px'});
        $('#coaches img:nth-of-type(6)').addClass('active');
        $('#coaches img:nth-of-type(5)').removeClass('active');
    }
    if(i === 6){
        $("#coaches img").animate({left: left+'px'});
        $('#coaches img:nth-of-type(7)').addClass('active');
        $('#coaches img:nth-of-type(6)').removeClass('active');
    }
    if(i === 7){
        i = 6
    }
    if(a === 7){
        a = 6
    }
})
$('button.prev').click(function(){
    left = left + 544
    
    i--

    if(a === 1){
        $("#coaches img").animate({left: left+'px'});
        $('#coaches img:nth-of-type(1)').addClass('active');
        $('#coaches img:nth-of-type(2)').removeClass('active');
        a--
    }
    
    if(a === 2){
        $("#coaches img").animate({left: left+'px'});
        $('#coaches img:nth-of-type(2)').addClass('active');
        $('#coaches img:nth-of-type(3)').removeClass('active');
        a--

    }
    if(a === 3){
        $("#coaches img").animate({left: left+'px'});
        $('#coaches img:nth-of-type(3)').addClass('active');
        $('#coaches img:nth-of-type(4)').removeClass('active');
        a--
    }
    if(a === 4){
        $("#coaches img").animate({left: left+'px'});
        $('#coaches img:nth-of-type(4)').addClass('active');
        $('#coaches img:nth-of-type(5)').removeClass('active');
        a--

    }
    if(a === 5){
        $("#coaches img").animate({left: left+'px'});
        $('#coaches img:nth-of-type(5)').addClass('active');
        $('#coaches img:nth-of-type(6)').removeClass('active');
        a--

    }
    if(a === 6){
        $("#coaches img").animate({left: left+'px'});
        $('#coaches img:nth-of-type(6)').addClass('active');
        $('#coaches img:nth-of-type(7)').removeClass('active');

        a--

    }
    if(i === 0){
        i = 0
    }
    if (a === 0){
        a = 1
    }
})