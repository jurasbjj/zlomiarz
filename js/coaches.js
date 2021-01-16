// ################################################### PRELOADER #############################################################
const preload = document.querySelector('.loader-wrapper');

preload.classList.add('show-preloader');
$(window).load(function() {
    setTimeout(
      function()
      {
          $(".loader-wrapper").fadeOut();
      }, 500);
});
// ################################################### KONIEC PRELOADER ###################################################


// ###################################################### SCROLL ###################################################### 
    // IMG powrót
    $("nav img").click(function() {
        window.location.href = 'index.html'
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


// ################################# SLIDER #################################################################

// swiper array content 
const coachesIMG = document.querySelectorAll('#coaches .slider img')
const coachesH1 = ['Daniel Wrześniewski', 'Adam Górny', 'Anrzej Iwat', 'Marcin Soszyński', 'Joanna Zabulewicz', 'Michał Miranowski', 'Mateusz Kowalski', 'Marcin Grabowski']
const coachesH3 = ['BRAZYLIJSKIE JIU-JITSU', 'BRAZYLIJSKIE JIU-JITSU', 'BRAZYLIJSKIE JIU-JITSU', 'BRAZYLIJSKIE JIU-JITSU', 'BRAZYLIJSKIE JIU-JITSU KIDS', 'BRAZYLIJSKIE JIU-JITSU', 'KICKBOXING', 'ZAPASY']
const coachesP = ['Współzałożyciel klubu Złomiarz Team. Czarny pas bjj od 2012 roku pod Vagner „Boca” Guimaraes. Ze sportem związany od 7 roku życia, zaś z samym BJJ od 15 lat. Doświadczony trener i zawodnik. Multimedalista polskiej jak i zagranicznej sceny BJJ. Na co dzień nauczyciel wychowania fizycznego oraz trener grupy zaawansowanej w naszym klubie. Ceni sobie wytrwałość i ciężką pracę.', 'Czarny pas w Brazylijskim Jiu Jitsu od 2014 roku. BJJ uprawia od stycznia 2002 roku. Siedmiokrotny medalista Mistrzostw Polski BJJ, medalista Pucharu Polski BJJ (dwukrotny); medalista Mistrzostw Polski ADCC (dwukrotny). Prowadzi zajęcia grupy porannej bjj i początkującej.', 'Zawodnik klubu Złomiarz Team Gdańsk oraz trener sekcji No-Gi. Swoją przygodę z BJJ rozpoczął w 2009 roku. Wielokrotny medalista Mistrzostw Polski, Pucharu Polski w Gi i NoGi oraz złoty medalista Mistrzostw Polski Grapplingu. Jego poczynania można śledzić na profilu facebookowym - PsujJitsu.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet felis et ante suscipit aliquam. Donec ultrices eros sit amet sapien elementum, vitae pulvinar neque dignissim. Sed hendrerit egestas justo, vel vulputate sem porttitor at. Etiam libero lacus, finibus at enim et, ornare tristique orci. Praesent faucibus ut lacus vitae pretium. Fusce porttitor turpis sed lectus sollicitudin cursus. Duis auctor eu ex et finibus.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in auctor felis. Maecenas rutrum urna condimentum dolor hendrerit, at suscipit elit porttitor. Maecenas vestibulum neque nec euismod convallis. Aenean egestas justo vel porta scelerisque. Quisque suscipit metus a leo commodo, sit amet venenatis massa iaculis. Morbi elementum mauris tellus, vitae iaculis lacus interdum tristique. Nam at nisl aliquam, rutrum ligula in, ultrices neque. Cras vulputate malesuada mi, nec auctor mauris congue eget. Nulla vitae lorem nec tellus pulvinar aliquam at eget orci. Integer at leo dictum, egestas odio sit amet, lobortis nisi. Integer at turpis ut lorem consequat pulvinar ut sit amet velit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et dolor quis purus dignissim vestibulum quis ac purus. Suspendisse justo metus, molestie ut ultricies et, dapibus vitae leo. Donec auctor orci non iaculis aliquam. Curabitur commodo libero quis enim mattis, vitae egestas augue vulputate. Duis ac lectus ut dolor sagittis feugiat. Mauris nec odio posuere, euismod justo quis, pretium nunc. Maecenas lacus erat, lacinia at massa ac, sodales porttitor dolor. Donec congue pellentesque lectus vitae porta.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet pretium risus. Etiam vel ullamcorper nunc, ac tempus tellus. Integer suscipit, tortor pretium consectetur varius, risus ligula aliquam ante, at aliquet eros arcu quis turpis. Fusce vel ultricies erat, vel ultricies justo. Proin dignissim justo ut est eleifend pretium ac in ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet felis et ante suscipit aliquam. Donec ultrices eros sit amet sapien elementum, vitae pulvinar neque dignissim. Sed hendrerit egestas justo, vel vulputate sem porttitor at. Etiam libero lacus, finibus at enim et, ornare tristique orci. Praesent faucibus ut lacus vitae pretium. Fusce porttitor turpis sed lectus sollicitudin cursus.']
const socialFB = ['Daniel Wrześniewski BJJ', 'Adam Górny BJJ', 'Psuj jitsu', 'Marcin Soszyński BJJ', 'Dżoana', 'Mirnelius', 'Mateusz Kowalski', 'Marcin Grabowski' ]
const socialIG = ['danielwrzesniewskibjj', 'kleszczbjj', 'psuj_jitsu', 'marcinsoszynski_bjj', 'asia_zabulewicz', 'miranov_bjj', 'kowalkick', 'marcingrabekgrabowski']

const mediaQueryMobile = window.matchMedia('(max-width: 800px')
const mediaQueryDesktop = window.matchMedia('(min-width: 800px')

    // swiper init
var mySwiper = new Swiper('.swiper-container', {

    // swiper settings
    speed: 800,
    spaceBetween: 12,
    slidesPerView: 1,
    // swiper licznik
    pagination: {
      el: '.slide-number',
      type: 'custom',
       renderCustom: function (swiper, current, total) {
        return ('0' + current).slice(-2) + ' / ' + ('0' + total).slice(-2);
  }
    },

    //swiper nawigacja
    navigation: {
      nextEl: '.right',
      prevEl: '.left',
    },

        breakpoints: {
        800: {
            spaceBetween: 0,
            loop: false,

            pagination: {
                el: '.pagination',
            }
        }
    }
  });
  


  // swiper change content
  mySwiper.on('slideChange', function(){
    setTimeout(function(){
      console.log($('.swiper-slide-active').data().id)
      $('#coaches .text span.coach-social:nth-of-type(1) span').hide().text(socialFB[$('.swiper-slide-active').data().id]).fadeIn(799);
      $('#coaches .text span.coach-social:nth-of-type(2) span').hide().text(socialIG[$('.swiper-slide-active').data().id]).fadeIn(799);
      $('#coaches .text span.coach-social img').hide().fadeIn(799);
      $('#coaches .text h1').hide().text(coachesH1[$('.swiper-slide-active').data().id]).fadeIn(799);
      $('#coaches .text h3').hide().text(coachesH3[$('.swiper-slide-active').data().id]).fadeIn(799);
      $('#coaches .text p').hide().text(coachesP[$('.swiper-slide-active').data().id]).fadeIn(799);
  }, 0);

  })

  setTimeout(function(){
    $("#coaches .swiper-container").height($('.swiper-slide').height())
}, 0);


 
// ######################################## KONIEC SLIDER #####################################################

// ######################################## MEDIA CONTENT #####################################################

const mediaQuery = window.matchMedia('(max-width: 800px')
const h2 = document.querySelectorAll('h2')
const h1 = document.querySelectorAll('h1')
const footerText = document.querySelectorAll('footer span')

if (mediaQuery.matches){
    h2[0].textContent = "Kilka słów o dyscyplinach, treningach"
    footerText[0].textContent = 'Copyright © Złomiarz Team Gdańsk'
    footerText[1].textContent = "";
}


// ######################################## MEDIA CONTENT #####################################################


// ######################################## RE-SIZE REFRESH ########################################
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

// ######################################## KONIEC RE-SIZE REFRESH ########################################