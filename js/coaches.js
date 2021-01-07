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


const coachesIMG = document.querySelectorAll('#coaches .slider img')
const coachesH1 = ['Daniel Wrześniewski', 'Adam Górny', 'Anrzej Iwat', 'Marcin Soszyński', 'Joanna Zabulewicz', 'Michał Miranowski', 'Mateusz Kowalski']
const coachesH3 = ['BRAZYLIJSKIE JIU-JITSU', 'BRAZYLIJSKIE JIU-JITSU', 'BRAZYLIJSKIE JIU-JITSU', 'BRAZYLIJSKIE JIU-JITSU', 'BRAZYLIJSKIE JIU-JITSU KIDS', 'BRAZYLIJSKIE JIU-JITSU', 'KICKBOXING']
const coachesP = ['Współzałożyciel klubu Złomiarz Team. Czarny pas bjj od 2012 roku pod Vagner „Boca” Guimaraes. Ze sportem związany od 7 roku życia, zaś z samym BJJ od 15 lat. Doświadczony trener i zawodnik. Multimedalista polskiej jak i zagranicznej sceny BJJ. Na co dzień nauczyciel wychowania fizycznego oraz trener grupy zaawansowanej w naszym klubie. Ceni sobie wytrwałość i ciężką pracę.', 'Czarny pas w Brazylijskim Jiu Jitsu od 2014 roku. BJJ uprawia od stycznia 2002 roku. Siedmiokrotny medalista Mistrzostw Polski BJJ, medalista Pucharu Polski BJJ (dwukrotny); medalista Mistrzostw Polski ADCC (dwukrotny). Prowadzi zajęcia grupy porannej bjj i początkującej.', 'Zawodnik klubu Złomiarz Team Gdańsk oraz trener sekcji No-Gi. Swoją przygodę z BJJ rozpoczął w 2009 roku. Wielokrotny medalista Mistrzostw Polski, Pucharu Polski w Gi i NoGi oraz złoty medalista Mistrzostw Polski Grapplingu. Jego poczynania można śledzić na profilu facebookowym - PsujJitsu.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet felis et ante suscipit aliquam. Donec ultrices eros sit amet sapien elementum, vitae pulvinar neque dignissim. Sed hendrerit egestas justo, vel vulputate sem porttitor at. Etiam libero lacus, finibus at enim et, ornare tristique orci. Praesent faucibus ut lacus vitae pretium. Fusce porttitor turpis sed lectus sollicitudin cursus. Duis auctor eu ex et finibus.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in auctor felis. Maecenas rutrum urna condimentum dolor hendrerit, at suscipit elit porttitor. Maecenas vestibulum neque nec euismod convallis. Aenean egestas justo vel porta scelerisque. Quisque suscipit metus a leo commodo, sit amet venenatis massa iaculis. Morbi elementum mauris tellus, vitae iaculis lacus interdum tristique. Nam at nisl aliquam, rutrum ligula in, ultrices neque. Cras vulputate malesuada mi, nec auctor mauris congue eget. Nulla vitae lorem nec tellus pulvinar aliquam at eget orci. Integer at leo dictum, egestas odio sit amet, lobortis nisi. Integer at turpis ut lorem consequat pulvinar ut sit amet velit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et dolor quis purus dignissim vestibulum quis ac purus. Suspendisse justo metus, molestie ut ultricies et, dapibus vitae leo. Donec auctor orci non iaculis aliquam. Curabitur commodo libero quis enim mattis, vitae egestas augue vulputate. Duis ac lectus ut dolor sagittis feugiat. Mauris nec odio posuere, euismod justo quis, pretium nunc. Maecenas lacus erat, lacinia at massa ac, sodales porttitor dolor. Donec congue pellentesque lectus vitae porta.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet pretium risus. Etiam vel ullamcorper nunc, ac tempus tellus. Integer suscipit, tortor pretium consectetur varius, risus ligula aliquam ante, at aliquet eros arcu quis turpis. Fusce vel ultricies erat, vel ultricies justo. Proin dignissim justo ut est eleifend pretium ac in ']
const socialFB = ['Daniel Wrześniewski BJJ', 'Adam Górny BJJ', 'Psuj jitsu', 'Marcin Soszyński BJJ', 'Dżoana', 'Mirnelius', 'Mateusz Kowalski' ]
const socialIG = ['danielwrzesniewskibjj', 'kleszczbjj', 'psuj_jitsu', 'marcinsoszynski_bjj', 'asia_zabulewicz', 'miranov_bjj', 'kowalkick']

const mediaQueryMobile = window.matchMedia('(max-width: 800px')
const mediaQueryDesktop = window.matchMedia('(min-width: 800px')


left = 0
i = 0
a = 0

$('.right').click(function(){
    
    if(mediaQueryDesktop.matches){
        left = left - 53
        if (left < -378){
            left = -378
        }
    }
    if(mediaQueryMobile.matches){
        left = left - 73
        if (left < -438){
            left = -438
        }
    }
    
    if(i > 6){
        i = 6
    }
    if(i < 6){
    $("#coaches .slider img").css({left: left+'%'});
    $('#coaches .text span.coach-social:nth-of-type(1) span').hide().text(socialFB[i+1]).fadeIn(1000);
    $('#coaches .text span.coach-social:nth-of-type(2) span').hide().text(socialIG[i+1]).fadeIn(1000);
    $('#coaches .text span.coach-social img').hide().fadeIn(1000);
    $('#coaches .text h1').hide().text(coachesH1[i+1]).fadeIn(1000);
    $('#coaches .text h3').hide().text(coachesH3[i+1]).fadeIn(1000);
    $('#coaches .text p').hide().text(coachesP[i+1]).fadeIn(1000);
    coachesIMG[i+1].classList.add('active');
    coachesIMG[i].classList.add('inactive');
    coachesIMG[i].classList.remove('active');
    i++
    a++
    }
     
     $('.slide-number').text('0'+(i+1) + ' / 07')
})


$('.left').click(function(){
    
    if(mediaQueryDesktop.matches){
        left = left + 53
        if (left > 0){
            left = 0
        }
    }
    if(mediaQueryMobile.matches){
        left = left + 73
        if (left > 0){
            left = 0
        }
    }
    i--
    if (i > -1){
    $("#coaches .slider img").css({left: left+'%'});
    $('#coaches .text span.coach-social:nth-of-type(1) span').hide().text(socialFB[i]).fadeIn(1000);
    $('#coaches .text span.coach-social:nth-of-type(2) span').hide().text(socialIG[i]).fadeIn(1000);
    $('#coaches .text span.coach-social img').hide().fadeIn(1000);

    $('#coaches .text h1').hide().text(coachesH1[i]).fadeIn(1000);
    $('#coaches .text h3').hide().text(coachesH3[i]).fadeIn(1000);
    $('#coaches .text p').hide().text(coachesP[i]).fadeIn(1000);
    coachesIMG[i].classList.add('active');
    coachesIMG[i+1].classList.remove('inactive');
    coachesIMG[i+1].classList.remove('active');
    }

    if(i < 0){
        i = 0
    }
     
    $('.slide-number').text('0'+(i+1) + ' / 07')

})



const mediaQuery = window.matchMedia('(max-width: 800px')
const h2 = document.querySelectorAll('h2')
const h1 = document.querySelectorAll('h1')
const footerText = document.querySelectorAll('footer span')

if (mediaQuery.matches){
    h2[0].textContent = "Kilka słów o dyscyplinach, treningach"
    footerText[0].textContent = 'Copyright © Złomiarz Team Gdańsk'
    footerText[1].textContent = "";
}



// $('.right').click(function(){
//     left = left - 544
    
//     i++
//     a++
//     if(i === 1){
//         $("#coaches .slider img").css({left: left+'px'});
//         coachesIMG[1].classList.add('active');
//         coachesIMG[0].classList.add('inactive');
//         coachesIMG[0].classList.remove('active');
        
//         $('#coaches .text h1').hide().text(coaches[1]).fadeIn(1000); 

//     }
//     if(i === 2){
//         $("#coaches .slider img").css({left: left+'px'});
//         coachesIMG[2].classList.add('active');
//         coachesIMG[1].classList.add('inactive');
//         coachesIMG[1].classList.remove('active');


//     }
//     if(i === 3){
//         $("#coaches .slider img").css({left: left+'px'});
//         coachesIMG[3].classList.add('active');
//         coachesIMG[2].classList.add('inactive');
//         coachesIMG[2].classList.remove('active');

//     }
//     if(i === 4){
//         $("#coaches .slider img").css({left: left+'px'});
//         coachesIMG[4].classList.add('active');
//         coachesIMG[3].classList.add('inactive');
//         coachesIMG[3].classList.remove('active');

//     }
//     if(i === 5){
//         $("#coaches .slider img").css({left: left+'px'});
//         coachesIMG[5].classList.add('active');
//         coachesIMG[4].classList.add('inactive');
//         coachesIMG[4].classList.remove('active');

//     }
//     if(i === 6){
//         $("#coaches .slider img").css({left: left+'px'});
//         coachesIMG[6].classList.add('active');
//         coachesIMG[5].classList.add('inactive');
//         coachesIMG[5].classList.remove('active');

//     }
//     if(i === 7){
//         i = 6
//     }
//     if(a === 7){
//         a = 6
//     }
//     if (left < -3264){
//         left = -3264
//     }
//     $('.slide-number').text('0'+(i+1) + ' / 07')
// })
// $('.left').click(function(){
//     left = left + 544
    
//     i--

//     if(a === 1){
//         $("#coaches .slider img").css({left: left+'px'});
//         $('#coaches .slider img:nth-of-type(1)').addClass('active');
//         $('#coaches .slider img:nth-of-type(2)').removeClass('inactive');
//         $('#coaches .slider img:nth-of-type(2)').removeClass('active');
//         a--
//     }
    
//     if(a === 2){
//         $("#coaches .slider img").css({left: left+'px'});
//         $('#coaches .slider img:nth-of-type(2)').addClass('active');
//         $('#coaches .slider img:nth-of-type(3)').removeClass('inactive');
//         $('#coaches .slider img:nth-of-type(3)').removeClass('active');
//         a--

//     }
//     if(a === 3){
//         $("#coaches .slider img").css({left: left+'px'});
//         $('#coaches .slider img:nth-of-type(3)').addClass('active');
//         $('#coaches .slider img:nth-of-type(4)').removeClass('inactive');
//         $('#coaches .slider img:nth-of-type(4)').removeClass('active');
//         a--
//     }
//     if(a === 4){
//         $("#coaches .slider img").css({left: left+'px'});
//         $('#coaches .slider img:nth-of-type(4)').addClass('active');
//         $('#coaches .slider img:nth-of-type(5)').removeClass('inactive');
//         $('#coaches .slider img:nth-of-type(5)').removeClass('active');
//         a--

//     }
//     if(a === 5){
//         $("#coaches .slider img").css({left: left+'px'});
//         $('#coaches .slider img:nth-of-type(5)').addClass('active');
//         $('#coaches .slider img:nth-of-type(6)').removeClass('inactive');
//         $('#coaches .slider img:nth-of-type(6)').removeClass('active');
//         a--

//     }
//     if(a === 6){
//         $("#coaches .slider img").css({left: left+'px'});
//         $('#coaches .slider img:nth-of-type(6)').addClass('active');
//         $('#coaches .slider img:nth-of-type(7)').removeClass('active');
//         a--
//     }
//     if(i < 0){
//         i = 0
//     }
//     if (a < 0){
//         a = 0
//     }
//     if (left > 0){
//         left = 0
//     }
//     $('.slide-number').text('0'+(i+1) + ' / 07')
// })



// ################################# KONIEC SLAJDER #################################################################
